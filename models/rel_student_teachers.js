"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class rel_student_teachers extends Model {
    static associate(models) {
      models.rel_student_teachers.belongsTo(models.students);
      models.rel_student_teachers.belongsTo(models.teachers);
    }
  }
  rel_student_teachers.init(
    {
      id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
      },
    },
    {
      sequelize,
      modelName: "rel_student_teachers",
      timestamps: false,
    }
  );
  return rel_student_teachers;
};
