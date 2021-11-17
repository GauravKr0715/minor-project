const router = require('express').Router();
const auth = require('../../middlewares/auth');
const logger = require('../../helpers/logger');
const facultyController = require('../../controllers/faculty');

router.post('/login', async (req, res) => {
  const data = Object.assign({}, req.body);

  try {
    const response = await facultyController.validateUser(data);

    return res.send(response);
  } catch (error) {
    logger.error(error);
    res.status(400).send({ error });
  }
});

router.use('/', auth.tokenValidate);

router.get('/validateSession', (req, res) => {
  res.send({
    verified: true
  });
});

module.exports = router;
