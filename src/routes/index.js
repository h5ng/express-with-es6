import express from 'express';
const router = express.Router();

/* GET home page. */
router.get('/test', function (req, res, next) {
    res.json('test')
});

module.exports = router;