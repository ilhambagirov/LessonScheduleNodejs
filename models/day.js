"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class days extends Model {
    static associate(models) {
      models.days.hasMany(models.rel_day_classes);
    }
  }
  days.init(
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
      modelName: "days",
      timestamps: false,
    }
  );
  return days;
};
