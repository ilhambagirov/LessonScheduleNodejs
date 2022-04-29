"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class subjects extends Model {
    static associate(models) {
      models.subjects.hasMany(models.teachers);
    }
  }
  subjects.init(
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
      modelName: "subjects",
      timestamps: false,
    }
  );
  return subjects;
};
