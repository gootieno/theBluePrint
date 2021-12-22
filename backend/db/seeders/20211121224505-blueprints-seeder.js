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
      "BluePrints",
      [
        {
          name: "Mitsubishi 3000gt Vr4",
          imageUrl:
            "https://i.pinimg.com/originals/0c/26/c8/0c26c89223132796dfe3e2c1a50dc017.jpg",
          garageId: 1,
        },
        {
          name: "Mitsubishi Evo 9",
          imageUrl:
            "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/5ae44534954809.57c6b45732879.jpg",
          garageId: 1,
        },
        {
          name: "BMW E46 M3",
          imageUrl:
            "https://i.pinimg.com/originals/c2/7c/4f/c27c4f51aaa1d0a22015ca091a046696.jpg",
          garageId: 1,
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
    await queryInterface.bulkDelete("BluePrints", null, {});
  },
};
