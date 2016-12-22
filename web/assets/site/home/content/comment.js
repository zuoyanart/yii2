define('home/content/comment', function(require, exports, module) {

  //文章评论
  "use strict";
  
  var comment = function comment(articleid) {
      var $ = require("node_modules/jquery/dist/jquery.min");
      var tools = require('pizzatools');
      require("layer");
      require('pizzaui');
      var self = {};
      var options = {
          articleid: articleid,
          url: '/comment/',
          tpl: "<%for (var i=0;i<data.length;i++){%>\r\n<li>\r\n    <img src=\"http://img5.cache.netease.com/tie/images/noface80_80.png\" alt=\"\">\r\n    <div class=\"cmtdes\">\r\n        <h5><%= data[i].username%><span><%= tools.formatUnixTime(data[i].addtime, \"yyyy-MM-dd hh:mm:ss\")%></span></h5>\r\n        <p>\r\n            <%= data[i].content%>\r\n        </p>\r\n    </div>\r\n    <div style=\"clear:both;\"></div>\r\n</li>\r\n<%}%>\r\n",
          cp: 1,
          mp: 30
      };
      /**
       * 获取评论列表
       * @method
       * @return {[type]} [description]
       */
      self.list = function (cp) {
          $.ajax({
              type: "post",
              url: options.url + "page",
              data: "id=" + articleid + "&cp=" + cp + "&mp=" + options.mp,
              success: function success(msg) {
                  if (msg.state == true) {
                      var s = new EJS({
                          text: options.tpl
                      }).render({
                          data: msg.msg,
                          tools: tools
                      });
                      $('.cmtlist').html(s);
                      options.cp += 1;
                  }
              }
          });
      };
      /**
       * 创建评论
       * @method function
       * @return {[type]} [description]
       */
      self.create = function () {
          var id = options.articleid;
          $(".form").pizzaValidate({
              'fields': {
                  '#cmtcontent': {
                      'must': true,
                      'minLength': 3,
                      'maxLength': 1000,
                      focusMsg: "请输入评论内容",
                      errMsg: '评论内容必须在3-1000个字符之间'
                  }
              },
              ajaxFun: function ajaxFun(data) {
                  var op = "create";
                  data += "&articleid=" + id;
                  $.ajax({
                      type: "post",
                      url: options.url + op,
                      data: data,
                      success: function success(msg) {
                          if (msg.state == true) {
                              self.list(1);
                              $("#cmtcontent").val("");
                          }
                      }
                  });
              }
          });
      };
  
      return self;
  };
  
  module.exports = comment;

});
