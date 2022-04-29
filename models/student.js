"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class students extends Model {
    static associate(models) {
      models.students.hasMany(models.rel_student_teachers);
    }
  }
  students.init(
    {
      id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
      },
      name: DataTypes.STRING,
      surname: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "students",
      timestamps: false,
    }
  );
  return students;
};