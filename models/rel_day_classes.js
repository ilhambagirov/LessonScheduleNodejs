"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class rel_day_classes extends Model {
    static associate(models) {
      models.rel_day_classes.belongsTo(models.days);
      models.rel_day_classes.belongsTo(models.classes);
    }
  }
  rel_day_classes.init(
    {
      id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
      },
    },
    {
      sequelize,
      modelName: "rel_day_classes",
      timestamps: false,
    }
  );
  return rel_day_classes;
};
