"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Spec extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Spec.belongsTo(models.Category, { foreignKey: "categoryId" });
    }
  }
  Spec.init(
    {
      name: DataTypes.STRING(50),
      categoryId: {
        type: DataTypes.INTEGER,
        references: { model: "Categories" },
      },
    },
    {
      sequelize,
      modelName: "Spec",
    }
  );
  return Spec;
};
