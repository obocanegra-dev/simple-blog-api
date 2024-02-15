const { DataTypes } = require('sequelize');

const defineModels = (sequelize) => {
  const Post = sequelize.define('Post', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  });

  const Comment = sequelize.define('Comment', {
    author: {
      type: DataTypes.STRING,
      allowNull: false
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  });

  // Relaciones
  Post.hasMany(Comment);
  Comment.belongsTo(Post);

  return { Post, Comment };
};

module.exports = defineModels;
