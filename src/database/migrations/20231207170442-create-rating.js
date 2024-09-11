'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ratings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      q1: {
        type: Sequelize.FLOAT
      },
      q2: {
        type: Sequelize.FLOAT
      },
      q3: {
        type: Sequelize.FLOAT
      },
      average: {
        type: Sequelize.FLOAT
      },
      unitsId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "units",
          key: "id"
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('ratings');
  }
};