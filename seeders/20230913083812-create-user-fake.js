'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
      await queryInterface.bulkInsert('users', [{
          name: 'trandien17',
          email: 'trandien719@gmail.com',
          password: '$10$V/8nTCReW/kvAKZ1o.WPku/OlF8lalQFMRq/7Ep6.P9rXvVnZp5Z2',
          numberPhone: '0378209601',
          type: 'ADMIN',
          avatar: '',
          createdAt: '2023-08-15 12:39:15',
          updatedAt: '2023-08-24 20:12:30'
        },
        {
          name: 'trandien2001',
          email: 'trandien17@gmail.com',
          password: '$10$qWaD3fQyogXnAMPfAXe18er2YagNwwkMYgtlbFpXUgkQxyFbpdLTy',
          numberPhone: '0375458442',
          type: 'CLIENT',
          avatar: '',
          createdAt: '2023-08-12 12:39:15',
          updatedAt: '2023-08-30 20:12:30'
        },
        {
          name: 'siaxevan',
          email: 'crisdev@gmail.com',
          password: '$10$M7kpUJGJwZnV7BgRXMIezOD.vI9uct5tGf8ONRkvxWxA14ilNV5DO',
          numberPhone: '0382234343',
          type: 'CLIENT',
          avatar: '',
          createdAt: '2023-08-14 12:39:15',
          updatedAt: '2023-08-20 20:12:30'
        }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('users', null, {});
  }
};
