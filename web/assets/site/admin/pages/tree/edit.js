define('site/admin/pages/tree/edit.vue', function(require, exports, module) {

  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
      value: true
  });
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _pzvueButton = require('node_modules/pzvue-button/dist/pz-button');
  
  var _pzvueButton2 = _interopRequireDefault(_pzvueButton);
  
  var _pzvueSelect = require('node_modules/pzvue-select/dist/pz-select');
  
  var _pzvueSelect2 = _interopRequireDefault(_pzvueSelect);
  
  var _pzvueInput = require('node_modules/pzvue-input/dist/pz-input');
  
  var _pzvueInput2 = _interopRequireDefault(_pzvueInput);
  
  var _pzvueForm = require('node_modules/pzvue-form/dist/pz-form');
  
  var _pzvueForm2 = _interopRequireDefault(_pzvueForm);
  
  var _pzvueFormitem = require('node_modules/pzvue-formitem/dist/pz-formitem');
  
  var _pzvueFormitem2 = _interopRequireDefault(_pzvueFormitem);
  
  var _kindeditor = require("node_modules/kindeditor/kindeditor-all");
  
  var _kindeditor2 = _interopRequireDefault(_kindeditor);
  
  var _pizzatools = require('pizzatools');
  
  var _pizzatools2 = _interopRequireDefault(_pizzatools);
  
  exports['default'] = {
      data: function data() {
          return {
              form: {
                  "link": ""
              },
              articleTypeOption: [{
                  text: '普通',
                  value: ""
              }, {
                  text: '组图',
                  value: "photo"
              }, {
                  text: "视频",
                  value: "video"
              }],
              rules: {
                  name: {
                      min: 1,
                      max: 48,
                      message: "请填写1-48位的标题"
                  },
                  link: {
                      required: false,
                      min: 1,
                      max: 300,
                      message: "请填写1-20位的名称"
                  },
                  keyword: {
                      required: false,
                      min: 1,
                      max: 30,
                      message: "请填写1-30位的名称"
                  },
                  seodes: {
                      required: false,
                      min: 1,
                      max: 30,
                      message: "请填写1-30位的名称"
                  },
                  brief: {
                      required: false,
                      min: 1,
                      max: 30,
                      message: "请填写1-30位的名称"
                  }
              }
          };
      },
      components: {
          pzbutton: _pzvueButton2['default'],
          pzinput: _pzvueInput2['default'],
          pzselect: _pzvueSelect2['default'],
          "pz-form": _pzvueForm2['default'],
          "pz-formitem": _pzvueFormitem2['default']
      },
      methods: {
          submitHandle: function submitHandle() {
              var ischeck, url, id, op;
              return regeneratorRuntime.async(function submitHandle$(context$1$0) {
                  while (1) switch (context$1$0.prev = context$1$0.next) {
                      case 0:
                          context$1$0.next = 2;
                          return regeneratorRuntime.awrap(this.$refs.form.validate());
  
                      case 2:
                          ischeck = context$1$0.sent;
  
                          if (!(ischeck || true)) {
                              context$1$0.next = 14;
                              break;
                          }
  
                          url = document.location.href;
                          id = this.$route.params.id;
                          op = url.indexOf("/tree/add/") == -1 ? "update" : "create";
  
                          this.form.brief = escape(editor.html());
                          this.form.pid = id;
                          context$1$0.next = 11;
                          return regeneratorRuntime.awrap(_pizzatools2['default'].httpAgent("/admin/tree/" + op, "post", this.form));
  
                      case 11:
                          history.back();
                          context$1$0.next = 16;
                          break;
  
                      case 14:
                          console.log("数据验证失败");
                          id = this.$layer.alert("this is demo", {
                              title: "警告"
                          });
  
                      case 16:
                      case 'end':
                          return context$1$0.stop();
                  }
              }, null, this);
          }
      },
      mounted: function mounted() {
          var url, id, article;
          return regeneratorRuntime.async(function mounted$(context$1$0) {
              while (1) switch (context$1$0.prev = context$1$0.next) {
                  case 0:
                      window.editor = KindEditor.create('#brief', {
                          uploadJson: '/admin/upfile/local',
                          allowFileManager: false
                      });
                      //获取
                      url = document.location.href;
                      id = this.$route.params.id;
  
                      if (!(url.indexOf("/tree/add/") == -1)) {
                          context$1$0.next = 9;
                          break;
                      }
  
                      context$1$0.next = 6;
                      return regeneratorRuntime.awrap(_pizzatools2['default'].httpAgent("/admin/tree/get", "post", {
                          id: id
                      }));
  
                  case 6:
                      article = context$1$0.sent;
  
                      this.form = article.msg;
                      editor.html(article.msg.brief);
  
                  case 9:
                  case 'end':
                      return context$1$0.stop();
              }
          }, null, this);
      }
  };
  
  (function (template) {
  
      module && module.exports && (module.exports.template = template);
  
      exports && exports['default'] && (exports['default'].template = template);
  })("<div id=\"main\">\n    <div class=\"menu\">\n        <a href=\"javascript:history.back();\">返回</a>\n    </div>\n    <pz-form ref=\"form\">\n        <pz-formitem label=\"标题\" :validate=\"rules.name\">\n            <pzinput v-model=\"form.name\" placeholder=\"请输入节点名称\"></pzinput>\n        </pz-formitem>\n        <pz-formitem label=\"连接地址\" :validate=\"rules.link\">\n            <pzinput v-model=\"form.link\" placeholder=\"请输入节点名称\"></pzinput>\n        </pz-formitem>\n        <pz-formitem label=\"正文类型\" :validate=\"rules.article_type\">\n            <pzselect :options=\"articleTypeOption\"></pzselect>\n        </pz-formitem>\n        <pz-formitem label=\"SEO keyword\" :validate=\"rules.keyword\">\n            <pzinput v-model=\"form.keyword\" placeholder=\"请输入keyword\"></pzinput>\n        </pz-formitem>\n        <pz-formitem label=\"SEO description\" :validate=\"rules.seodes\">\n            <textarea v-model=\"form.seodes\" placeholder=\"请输入description\"></textarea>\n        </pz-formitem>\n        <pz-formitem label=\"正文\" :validate=\"rules.brief\">\n            <textarea id=\"brief\" v-model=\"form.brief\" style=\"height:500px;\"></textarea>\n        </pz-formitem>\n        <pz-formitem>\n            <pzbutton @click.native=\"submitHandle\">提交</pzbutton>\n        </pz-formitem>\n    </pz-form>\n</div>");
  module.exports = exports['default'];
  //通过验证
  //# sourceMappingURL=/static/site/admin/pages/tree/edit.js.map
  

});
