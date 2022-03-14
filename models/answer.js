'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  var Answer = sequelize.define('Answer', {
    content: DataTypes.TEXT,
    messageId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  });
  
  Answer.associate = function (models) {
    //Associations can be define here//
    Answer.belongsTo(models.User, {
      foreignKey: 'userId',
     
    });
    Answer.belongsTo(models.Message, {
      foreignKey: 'messageId',
      onDelete: 'CASCADE', // Si on supprime un message, on supprime ses réponses //
    });
  }
  return Answer;
};
