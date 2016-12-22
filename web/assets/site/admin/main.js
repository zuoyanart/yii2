define('admin/main', function(require, exports, module) {

  'use strict';
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _vue = require('node_modules/vue/dist/vue');
  
  var _vue2 = _interopRequireDefault(_vue);
  
  var _AppVue = require('site/admin/App.vue');
  
  var _AppVue2 = _interopRequireDefault(_AppVue);
  
  var _vueRouter = require('node_modules/vue-router/dist/vue-router');
  
  var _vueRouter2 = _interopRequireDefault(_vueRouter);
  
  var _vueLayer = require('node_modules/vue-layer/dist/vue-layer');
  
  var _vueLayer2 = _interopRequireDefault(_vueLayer);
  
  _vue2['default'].use(_vueRouter2['default']);
  _vue2['default'].prototype.$layer = _vueLayer2['default'];
  
  var tree = function tree(resolve) {
      return require(['site/admin/pages/tree/tree.vue'], resolve);
  };
  var treeedit = function treeedit(resolve) {
      return require(['site/admin/pages/tree/edit.vue'], resolve);
  };
  var news = function news(resolve) {
      return require(['site/admin/pages/news/news.vue'], resolve);
  }; //实现懒加载
  var newsedit = function newsedit(resolve) {
      return require(['site/admin/pages/news/edit.vue'], resolve);
  };
  var block = function block(resolve) {
      return require(['site/admin/pages/block/block.vue'], resolve);
  };
  var blockedit = function blockedit(resolve) {
      return require(['site/admin/pages/block/edit.vue'], resolve);
  };
  var guestbook = function guestbook(resolve) {
      return require(['site/admin/pages/guestbook/guestbook.vue'], resolve);
  };
  var guestbookEdit = function guestbookEdit(resolve) {
      return require(['./pages/guestbook/edit.vue'], resolve);
  };
  var user = function user(resolve) {
      return require(['site/admin/pages/user/user.vue'], resolve);
  };
  var useredit = function useredit(resolve) {
      return require(['site/admin/pages/user/edit.vue'], resolve);
  };
  
  var routes = [{
      path: '/',
      component: require("site/admin/pages/index.vue")
  }, {
      path: '/news',
      component: news
  }, {
      path: "/news/edit/:id",
      component: newsedit
  }, {
      path: "/news/create",
      component: newsedit
  }, {
      path: "/block",
      component: block
  }, {
      path: "/block/edit/:id",
      component: blockedit
  }, {
      path: "/block/edit",
      component: blockedit
  }, {
      path: "/guestbook",
      component: guestbook
  }, {
      path: "/user",
      component: user
  }, {
      path: "/user/edit/:id",
      component: useredit
  }, {
      path: "/user/edit",
      component: useredit
  }, {
      path: "/tree",
      component: tree
  }, {
      path: "/tree/add/:id",
      component: treeedit
  }, {
      path: "/tree/edit/:id",
      component: treeedit
  }];
  
  var router = new _vueRouter2['default']({
      routes: routes
  });
  
  var app = new _vue2['default']({
      el: '#app',
      render: function render(h) {
          return h(_AppVue2['default']);
      },
      router: router //使用路由器
  });

});
