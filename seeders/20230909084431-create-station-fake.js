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

     await queryInterface.bulkInsert('stations', [{
      name: 'Bến xe Giáp Bát',
      address: 'Giải Phóng, Hoàng Mai, Hà Nội',
      province: 'Thành Phố Hà Nội',
      createdAt: '2023-08-15 12:39:15',
      updatedAt:'2023-08-24 20:12:30'
    },{
      name: 'Bến xe Nước Ngầm',
      address: '1 Đ. Ngọc Hồi, Hoàng Liệt, Hoàng Mai, Hà Nội',
      province: 'Thành Phố Hà Nội',
      createdAt: '2023-08-15 12:39:15',
      updatedAt:'2023-08-24 20:12:30'
    },{
      name: 'Bến xe Mỹ Đình',
      address: 'Mỹ Đình, Nam Từ Liêm, Hà Nội',
      province: 'Thành Phố Hà Nội',
      createdAt: '2023-08-15 12:39:15',
      updatedAt:'2023-08-24 20:12:30'
    },{
      name: 'Bến xe Gia Lâm',
      address: 'Long Biên, Hà Nội',
      province: 'Thành Phố Hà Nội',
      createdAt: '2023-08-15 12:39:15',
      updatedAt:'2023-08-24 20:12:30'
    },{
      name: 'Bến xe Thái Bình',
      address: 'ĐT223, P. Bồ Xyên, Tp. Thái Bình, Thái Bình',
      province: 'Tỉnh Thái Bình',
      createdAt: '2023-08-15 12:39:15',
      updatedAt:'2023-08-24 20:12:30'
    },{
      name: 'Bến xe Hoàng Hà',
      address: 'Tiền Phong, Tp. Thái Bình, Thái Bình',
      province: 'Tỉnh Thái Bình',
      createdAt: '2023-08-15 12:39:15',
      updatedAt:'2023-08-24 20:12:30'
    },{
      name: 'Bến xe Triều Dương',
      address: 'QL39A, Triều Dương, Tiên Lữ, Hưng Yên',
      province: 'Tỉnh Hưng Yên',
      createdAt: '2023-08-15 12:39:15',
      updatedAt:'2023-08-24 20:12:30'
    },{
      name: 'Bến xe Hưng Nhân',
      address: 'QL39A, Tây Xuyên, Hưng Hà, Thái Bình',
      province: 'Tỉnh Thái Bình',
      createdAt: '2023-08-15 12:39:15',
      updatedAt:'2023-08-24 20:12:30'
    }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('stations', null, {});
  }
};
