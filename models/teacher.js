"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class teachers extends Model {
    static associate(models) {
      models.teachers.hasMany(models.lessons);
      models.teachers.hasMany(models.rel_student_teachers);
      models.teachers.belongsTo(models.subjects);
    }
  }
  teachers.init(
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
      modelName: "teachers",
      timestamps: false,
    }
  );
  return teachers;
};
