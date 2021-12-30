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
    await queryInterface.bulkInsert(
      "Steps",
      [
        {
          title: "Step 1",
          description: "Open the AEM Gauge box then just install it",
          media: [
            "https://www.aemelectronics.com/sites/default/files/30-0352-4-web.jpg",
          ],
          projectId: 1,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Steps", null, {});
  },
};
