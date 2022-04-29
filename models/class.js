"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class classes extends Model {
    static associate(models) {
      models.classes.hasMany(models.rel_day_classes);
      models.classes.hasMany(models.lessons);
    }
  }
  classes.init(
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
      modelName: "classes",
      timestamps: false,
    }
  );
  return classes;
};
