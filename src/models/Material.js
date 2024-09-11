'use strict';

module.exports = (sequelize, DataTypes) => {
  const material = sequelize.define('Material',{
    name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    file: {
      type: DataTypes.BLOB,
      allowNull: true
    },
  },{
    tableName: "materials"
  });
  material.associate = function(models) {
    material.belongsTo(models.Issue,{ as: "materials" , foreignkey: "id" });
  };
  return material;
};