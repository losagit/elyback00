'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('enrolls', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      desc: {
        type: Sequelize.STRING
      },
      studentsId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "students",
          key: 'id'
        }
      },
      coursesId:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "courses",
          key: "id"
        }
      },
      periodsId:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "periods",
          key: "id"
        }
      },
      degreesId:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "degrees",
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
    await queryInterface.dropTable('enrolls');
  }
};