
var PostLike = require('../lib/mongo').PostLike;


module.exports = {
  // 创建一个点赞
  create: function create(postLike) {
    return PostLike.create(postLike).exec();
  },

  // 通过文章 id 以及点赞的用户，删除一个点赞数
  delete: function delCommentById(postLike) {
    return PostLike.remove(postLike).exec();
  },

 

  // 通过文章 id 以及点赞的用户来获取该文章点赞
  getLike: function getLike(count) {
    return PostLike.count(count).exec();
  }

 
};
