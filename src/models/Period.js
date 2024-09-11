'use strict';

module.exports = (sequelize, DataTypes) => {
  const period = sequelize.define('Period',{

    year: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },{
    TableName:"periods"
  })

  period.associate = function(models){
    
  }

  return period;
};