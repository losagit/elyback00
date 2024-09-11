'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const section = sequelize.define('Section', {

    desc: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },{
    tableName: "sections"
  });

  section.associate = function(models){
    section.belongsTo(models.Degree, {as:"degrees" , foreignkey:"id"});
  };

  return section;
};