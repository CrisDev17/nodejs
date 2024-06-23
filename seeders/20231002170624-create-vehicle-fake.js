'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('vehicles', [{
     name: "Mercedes 16 chỗ",
     company_id: 1,
     createdAt: '2023-08-12 12:39:15',
     updatedAt: '2023-08-30 20:12:30'
    },
    {
      name: "Xe 12 chỗ",
      company_id: 3,
      createdAt: '2023-08-12 12:39:15',
      updatedAt: '2023-08-30 20:12:30'
     },
     {
      name: "Xe 24 chỗ",
      company_id: 3,
      createdAt: '2023-08-12 12:39:15',
      updatedAt: '2023-08-30 20:12:30'
     },
     {
      name: "Toyota 16 chỗ",
      company_id: 4,
      createdAt: '2023-08-12 12:39:15',
      updatedAt: '2023-08-30 20:12:30'
     }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('vehicles', null, {});
  }
};
