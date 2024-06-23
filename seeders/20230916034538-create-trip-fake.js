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

    await queryInterface.bulkInsert('trips', [{
         fromStation: 1,
         toStation: 8,
         startTime: '9:00:00',
         price: 100000,
         createdAt: '2023-08-12 12:39:15',
         updatedAt: '2023-08-30 20:12:30'
      },
      {
        fromStation: 2,
        toStation: 7,
        startTime: '8:30:00',
        price: 120000,
        createdAt: '2023-08-12 12:39:15',
        updatedAt: '2023-08-30 20:12:30'
     },
     {
      fromStation: 7,
      toStation: 2,
      startTime: '8:00:00',
      price: 90000,
      createdAt: '2023-08-12 12:39:15',
      updatedAt: '2023-08-30 20:12:30'
   },
   {
    fromStation: 2,
    toStation: 6,
    startTime: '14:00:00',
    price: 100000,
    createdAt: '2023-08-12 12:39:15',
    updatedAt: '2023-08-30 20:12:30'
 },
 {
  fromStation: 3,
  toStation: 8,
  startTime: '7:00:00',
  price: 110000,
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
    await queryInterface.bulkDelete('trips', null, {});
  }
};
