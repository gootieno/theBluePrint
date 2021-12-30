"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Project extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Project.hasMany(models.Step, { as: "steps", foreignKey: "projectId" });
    }
  }
  Project.init(
    {
      name: DataTypes.STRING(20),
      categoryId: {
        type: DataTypes.INTEGER,
        references: { model: "Categories" },
      },
      completed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      blueprintId: {
        type: DataTypes.INTEGER,
        references: { model: "BluePrints" },
      },
    },
    {
      sequelize,
      modelName: "Project",
    }
  );
  return Project;
};
