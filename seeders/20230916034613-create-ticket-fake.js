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
    await queryInterface.bulkInsert('tickets', [
    {
      trip_id: 2,
      user_id: 1,
      createdAt: '2023-08-12 12:39:15',
      updatedAt: '2023-08-30 20:12:30'
    },
    {
      trip_id: 3,
      user_id: 2,
      createdAt: '2023-08-12 12:39:15',
      updatedAt: '2023-08-30 20:12:30'
    },
    {
      trip_id: 5,
      user_id: 1,
      createdAt: '2023-08-12 12:39:15',
      updatedAt: '2023-08-30 20:12:30'
    },
    {
      trip_id: 5,
      user_id: 3,
      createdAt: '2023-08-12 12:39:15',
      updatedAt: '2023-08-30 20:12:30'
    }
  ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('tickets', null, {});
  }
};
