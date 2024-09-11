'use strict';

module.exports = (sequelize, DataTypes) => {
  const student = sequelize.define('Student',{

    name:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    dni:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    datebirth:{
      type: DataTypes.DATE,
      allowNull: false,
    },
    gender:{
      type: DataTypes.STRING,
      allowNull: false,
    }
    
  },{
    tableName: "students"
  });
  student.associate = function(models) {

  };
  return student;
};