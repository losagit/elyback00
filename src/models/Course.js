'use strict';

module.exports = (sequelize, DataTypes) => {

  const course = sequelize.define('Course', {
    name: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: "courses"
  });
  course.associate = function (models) {

  };


  return course;
};