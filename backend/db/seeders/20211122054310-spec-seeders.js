"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert("Specs", [
      {
        name: "Halo Headlight",
        categoryId: 1,
      },
      {
        name: "C7 Hood",
        categoryId: 1,
      },
      {
        name: "Te37 Wheels",
        categoryId: 1,
      },
      {
        name: "Groot Shift-knob",
        categoryId: 2,
      },
      {
        name: "AEM Boost Gauge",
        categoryId: 2,
      },
      {
        name: "Braum Seats",
        categoryId: 2,
      },
      {
        name: "DR650 Turbos",
        categoryId: 3,
      },
      {
        name: "AEM Boost Controller",
        categoryId: 3,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Specs", null, {});
  },
};
