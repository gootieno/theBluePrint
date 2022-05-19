"use strict";
const { Model, Sequelize } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      Category.belongsTo(models.BluePrint, { foreignKey: "blueprintId" });
      Category.hasMany(models.Spec, { as: "specs", foreignKey: "categoryId" });
    }
  }
  Category.init(
    {
      name: { type: DataTypes.STRING(50), allowNull: false, unique: true },
      blueprintId: {
        type: DataTypes.INTEGER,
        references: { model: "BluePrints" },
      },
    },
    {
      sequelize,
      modelName: "Category",
    }
  );
  return Category;
};
