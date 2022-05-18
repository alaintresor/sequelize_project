'use strict';

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

      await queryInterface.bulkInsert('Users', [{name:"John Doe",email:"john@gmail.com",age:"10",address:"kigali",password:"$2a$10$HSTbfKzFEM0j6fLEnBAmI.Xwg1F8gmkxFJc07J9GEFkbMOYSy0iH.",createdAt:new Date(),updatedAt:new Date()}], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Users', null, {});
  }
};
