'use strict';

module.exports = (sequelize, DataTypes) => {
  const unit = sequelize.define('Unit',{

    name: {
      type: DataTypes.STRING,
      allowNull: true
    },
  },{
    tableName: "units"
  });
  unit.associate = function(models) {
    unit.belongsTo(models.Course,{ as: "courses" , foreignkey: "id" });
  };
  
  
  return unit;
};