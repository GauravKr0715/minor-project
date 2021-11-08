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
});

router.put('/updateTimeTable', async (req, res) => {
  const time_table = Object.assign([], req.body.time_table);
  const section = req.query.section || null;
  if (section) {
    const data = await sectionController.updateTimeTable(time_table, section);

    return res.send(data);
  } else {
    return res.status(400).send({
      success: false,
      message: 'Some error occured.'
    });
  }
})

module.exports = router;