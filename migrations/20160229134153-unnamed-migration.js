'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('project',
      {
        name: Sequelize.STRING
      }
    );
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('project');
  }
};
   
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
