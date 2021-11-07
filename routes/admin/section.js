const router = require('express').Router();
const sectionController = require('../../controllers/section');

router.post('/addBasicDetails', async (req, res) => {
  const body = Object.assign({}, req.body);
  try {
    const data = await sectionController.addBasicDetails(body);

    return res.send(data);
  } catch (error) {
    logger.error(error);
    res.status(400).send({ error });
  }
})

module.exports = router;