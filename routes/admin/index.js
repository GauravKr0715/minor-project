const router = require('express').Router();

router.use('/department', require('./department'));
router.use('/student', require('./student'));
router.use('/faculty', require('./faculty'));
router.use('/section', require('./section'));

module.exports = router;
