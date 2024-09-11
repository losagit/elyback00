'use strict';

module.exports = (sequelize, DataTypes) => {
  const issue = sequelize.define('Issue',{
    desc : {
      type: DataTypes.STRING
    },
  },{
    tableName:"issues"
  });

  issue.associate = function(models){
    issue.belongsTo(models.Unit,{ as:"units", foreignKey:"id" })
  };

  return issue;
};