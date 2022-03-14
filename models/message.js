'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  var Message = sequelize.define('Message', {
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    //image: DataTypes.STRING,//
    //date: DataTypes.DATE,//
    userId: DataTypes.INTEGER
  });

Message.associate = function (models) {
  //Associations can be define here//
  Message.belongsTo(models.User, {
    foreignKey: 'userId',
    as: 'user',
    onDelete: 'CASCADE', // Si on supprime un user, on supprime ses messages //
  });
  Message.hasMany(models.Answer, {
    foreignKey: 'messageId',
    as: 'answers', //Sequelize defaults to using the pluralized model name//
    //Un message peut avoir plusieurs réponses//
  }); 
}
  return Message;
};
