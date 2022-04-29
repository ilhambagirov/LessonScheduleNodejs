"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class lessons extends Model {
    static associate(models) {
      models.lessons.belongsTo(models.classes);
      models.lessons.belongsTo(models.teachers);
      models.lessons.belongsTo(models.days);
    }
  }
  lessons.init(
    {
      id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
      },
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "lessons",
      timestamps: false,
    }
  );
  return lessons;
};
