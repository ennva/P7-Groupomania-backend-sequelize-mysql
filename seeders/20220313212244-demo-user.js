'use strict';
const bcrypt = require('bcrypt'); 

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users',[
      {
        email: 'nieman@gmail.com',
        password: bcrypt.hashSync('12345', 10),
        firstName: 'Jon',
        lastName: 'Stewer',
        jobtitle: 'Employee',
        isAdmin: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'kankan@gmail.com',
        password: bcrypt.hashSync('crispi', 10),
        firstName: 'Alain',
        lastName: 'Mabankou',
        jobtitle: 'Manager',
        isAdmin: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
