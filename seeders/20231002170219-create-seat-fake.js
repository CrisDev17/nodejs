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

    await queryInterface.bulkInsert('seats', [{
        name : "Ghế đầu",
        status : "1",
        vehicle_id : 1,
        createdAt: '2023-08-12 12:39:15',
        updatedAt: '2023-08-30 20:12:30'
    },
    {
      name : "Ghế giữa",
      status : "0",
      vehicle_id : 2,
      createdAt: '2023-08-12 12:39:15',
      updatedAt: '2023-08-30 20:12:30'
  },
  {
    name : "Ghế cuối",
    status : "1",
    vehicle_id : 3,
    createdAt: '2023-08-12 12:39:15',
    updatedAt: '2023-08-30 20:12:30'
},
{
  name : "Ghế đầu",
  status : "0",
  vehicle_id : 4,
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
    await queryInterface.bulkDelete('seats', null, {});
  }
};
