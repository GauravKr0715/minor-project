const router = require('express').Router();
const bcrypt = require("bcryptjs");
const logger = require('../../utils/logger');
const studentController = require('../../controllers/student');
const { registerValidation, loginValidation } = require("../../validators/studentValidator");
const studentRepo = require('../../models/student_repo');

router.post('register', async (req, res) => {
  const body = Object.assign({}, req.body);
  try {
    const { error } = registerValidation(body);
    if (error) return res.status(406).json({ Valmessage: error.details[0].message });

    const userExists = await studentRepo.fetchOne({ email: body.email });
    if (userExists) {
      return res.status(400).json({
        message: "Student already exists...",
      });
    }
    const salt = await bcrypt.genSalt(15);
    const hashedPassword = await bcrypt.hash(body.password, salt);
    body.password = hashedPassword;

  } catch (error) {
    logger.error(error);
    res.status(400).send({ error });
  }

});

module.exports = router;