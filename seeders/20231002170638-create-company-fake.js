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
    await queryInterface.bulkInsert('companies', [{
       name : "Hoàng Hà",
       image : "",
       description : "Tính mạng con người là trên hết",
       trip_id: 2,
       createdAt: '2023-08-12 12:39:15',
       updatedAt: '2023-08-30 20:12:30'
    },
    {
      name : "Tuấn Anh Limousine",
      image : "",
      description : "Xin nhẹ chân ga",
      trip_id: 1,
      createdAt: '2023-08-12 12:39:15',
      updatedAt: '2023-08-30 20:12:30'
   },
   {
    name : "Long Thu",
    image : "",
    description : "Đạp nhẹ ga thôi anh ơi",
    trip_id: 3,
    createdAt: '2023-08-12 12:39:15',
    updatedAt: '2023-08-30 20:12:30'
 },
 {
  name : "Hà Hải Limousine",
  image : "",
  description : "Hà Hải-An toàn là trên hết",
  trip_id: 4,
  createdAt: '2023-08-12 12:39:15',
  updatedAt: '2023-08-30 20:12:30'
},
{
  name : "Quang Văn",
  image : "",
  description : "Nhanh 1 giây chậm cả đời",
  trip_id: 5,
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
    await queryInterface.bulkDelete('companies', null, {});
  }
};
