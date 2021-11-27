"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class BluePrint extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      BluePrint.belongsTo(models.Garage, { foreignKey: "garageId" });
      BluePrint.hasMany(models.Category, {
        as: "categories",
        foreignKey: "blueprintId",
      });
    }
  }
  BluePrint.init(
    {
      carName: DataTypes.STRING(50),
      imageUrl: DataTypes.STRING,
      garageId: { type: DataTypes.INTEGER, references: { model: "Garages" } },
    },
    {
      sequelize,
      modelName: "BluePrint",
    }
  );
  return BluePrint;
};
