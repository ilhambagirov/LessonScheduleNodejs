var express = require("express");
const { version } = require("../core/helper");
const { getSchoolScheduleByDay } = require("../services/schoolScheduleService");
var router = express.Router();

router.get(version(1) + "findSchedule/:dayId", getSchoolScheduleByDay);
module.exports = router;
