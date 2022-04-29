const db = require("../models/index");
async function getSchoolScheduleByDay(req, res) {
  try {
    const dayId = req.params.dayId;
    const days = await db.days.findAndCountAll({
      distinct: true,
      where: { id: dayId },
      include: [
        {
          model: db.rel_day_classes,
          attributes: ["id"],
          distinct: true,
          include: [
            {
              model: db.classes,
              distinct: true,
              include: [
                {
                  model: db.lessons,
                  attributes: ["id", "name"],
                  distinct: true,
                  where: { dayId: dayId },
                  include: [
                    {
                      model: db.teachers,
                      attributes: ["id", "name", "surname"],
                      distinct: true,
                      include: [
                        {
                          model: db.rel_student_teachers,
                          attributes: ["id"],
                          distinct: true,
                          include: [
                            {
                              model: db.students,
                            },
                          ],
                        },
                        {
                          model: db.subjects,
                          distinct: true,
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    });
    res.status(200);
    res.send(days);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

exports.getSchoolScheduleByDay = getSchoolScheduleByDay;
