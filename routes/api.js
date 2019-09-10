var express = require('express');
var router = express.Router();
const moment =require('moment');

/* GET users listing. */
router.get('/timestamp/:date_string?', function(req, res, next) {
	const dateString = req.params.date_string;
	if (!dateString) {
		const date = new Date()
		res.json({
			unix: date.getTime(),
			utc: date.toUTCString(),
		})
	}
	const date = isNaN(Number(dateString)) ? new Date(dateString) : new Date(Number(dateString));
	if (isNaN(date.getTime())) {
		res.json({
			error: "Invalid Date",
		})
	} else {
		res.json({
			unix: date.getTime(),
			utc: date.toUTCString(),
		})
	}
});

module.exports = router;
