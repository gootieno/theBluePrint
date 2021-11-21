"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Garage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Garage.belongsTo(models.User);
    }

    changeGarageName(newGarageName) {
      this.name = newGarageName;
      return this.name;
    }
  }
  Garage.init(
    {
      name: DataTypes.STRING(100),
      defaultValue: "Garage",
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Garage",
    }
  );
  return Garage;
};
