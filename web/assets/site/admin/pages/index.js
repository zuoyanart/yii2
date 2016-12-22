define('site/admin/pages/index.vue', function(require, exports, module) {

  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = {};
  
  (function (template) {
  
    module && module.exports && (module.exports.template = template);
  
    exports && exports["default"] && (exports["default"].template = template);
  })("<div id=\"main\">\n    <ul class=\"indexlist\" id=\"indexlist\">\n        <li class=\"li1\"><router-link to=\"/news\"><i class=\"icon-article\"></i>文章管理</router-link></li>\n        <li class=\"li2\"><a href=\"#\"><i class=\"icon-chat\"></i><span class=\"tip\">5</span>统计图表</a></li>\n        <li class=\"li3\"><a href=\"#\"><i class=\"icon-setting\"></i>系统设置</a></li>\n        <li class=\"li4\"><a href=\"#\"><i class=\"icon-noti\"></i><span class=\"tip\">320</span>系统通知</a></li>\n    </ul>\n    <div style=\"margin:20px;line-height:30px;\">\n        <h2>关于</h2> 当前版本号：1.5.4\n        <br> 开发者: <a href=\"#\">左盐</a>\n        <br> E-mail: <a href=\"mailto:huabinglan@163.com\">huabinglan@163.com</a>\n        <br> github: <a href=\"http://github.com/zuoyanart\" target=\"_blank\">http://github.com/zuoyanart</a>\n        <br> blog: <a href=\"http://www.zuoyan.space\" target=\"_blank\">www.zuoyan.space</a>\n        <br> ui框架： <a href=\"http://ui.zuoyan.space\" target=\"_blank\">Pizza UI</a>\n    </div>\n</div>");
  module.exports = exports["default"];
  //# sourceMappingURL=/static/site/admin/pages/index.js.map
  

});
