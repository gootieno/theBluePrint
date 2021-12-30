"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Step extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Step.belongsTo(models.Project, {
        as: "steps",
        foreignKey: "projectId",
      });
    }
  }
  Step.init(
    {
      title: DataTypes.STRING(50),
      description: DataTypes.TEXT,
      media: DataTypes.ARRAY(DataTypes.STRING),
      projectId: {
        type: DataTypes.INTEGER,
        references: { model: "Projects" },
      },
    },
    {
      sequelize,
      modelName: "Step",
    }
  );
  return Step;
};
