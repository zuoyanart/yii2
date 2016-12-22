define('site/admin/pages/block/edit.vue', function(require, exports, module) {

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
                  title: '',
                  content: ""
              },
              rules: {
                  title: {
                      min: 1,
                      max: 48,
                      message: "请填写1-48位的标题"
                  },
                  content: {
                      required: false,
                      min: 1,
                      max: 300,
                      message: "请填写1-20位的名称"
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
              var ischeck, id, op;
              return regeneratorRuntime.async(function submitHandle$(context$1$0) {
                  while (1) switch (context$1$0.prev = context$1$0.next) {
                      case 0:
                          context$1$0.next = 2;
                          return regeneratorRuntime.awrap(this.$refs.form.validate());
  
                      case 2:
                          ischeck = context$1$0.sent;
  
                          if (!(ischeck || true)) {
                              context$1$0.next = 12;
                              break;
                          }
  
                          id = this.$route.params.id;
                          op = id ? "update" : "create";
  
                          this.form.content = escape(editor.html());
                          context$1$0.next = 9;
                          return regeneratorRuntime.awrap(_pizzatools2['default'].httpAgent("/admin/block/" + op, "post", this.form));
  
                      case 9:
                          history.back();
                          context$1$0.next = 14;
                          break;
  
                      case 12:
                          console.log("数据验证失败");
                          id = this.$layer.alert("this is demo", {
                              title: "警告"
                          });
  
                      case 14:
                      case 'end':
                          return context$1$0.stop();
                  }
              }, null, this);
          }
      },
      mounted: function mounted() {
          var id, article;
          return regeneratorRuntime.async(function mounted$(context$1$0) {
              while (1) switch (context$1$0.prev = context$1$0.next) {
                  case 0:
                      window.editor = KindEditor.create('#content', {
                          uploadJson: '/admin/upfile/local',
                          allowFileManager: false
                      });
                      KindEditor('#timgup').click(function () {
                          editor.loadPlugin('image', function () {
                              editor.plugin.imageDialog({
                                  imageUrl: KindEditor('#timg').val(),
                                  clickFn: function clickFn(url, title, width, height, border, align) {
                                      KindEditor('#timg').val(url);
                                      editor.hideDialog();
                                  }
                              });
                          });
                      });
                      //获取block
                      id = this.$route.params.id;
  
                      if (!id) {
                          context$1$0.next = 10;
                          break;
                      }
  
                      context$1$0.next = 6;
                      return regeneratorRuntime.awrap(_pizzatools2['default'].httpAgent("/admin/block/get", "post", {
                          id: id
                      }));
  
                  case 6:
                      article = context$1$0.sent;
  
                      this.form = article.msg;
                      this.nodeDefault = article.msg.nodeid;
                      editor.html(article.msg.content);
  
                  case 10:
                  case 'end':
                      return context$1$0.stop();
              }
          }, null, this);
      }
  };
  
  (function (template) {
  
      module && module.exports && (module.exports.template = template);
  
      exports && exports['default'] && (exports['default'].template = template);
  })("<div id=\"main\">\n    <div class=\"menu\">\n        <a href=\"javascript:history.back();\">返回</a>\n    </div>\n    <pz-form ref=\"form\">\n        <pz-formitem label=\"标题\" :validate=\"rules.title\">\n            <pzinput v-model=\"form.title\" placeholder=\"请输入活文章标题\"></pzinput>\n        </pz-formitem>\n        <pz-formitem label=\"正文\" :validate=\"rules.content\">\n            <textarea id=\"content\" v-model=\"form.content\" style=\"height:500px;\"></textarea>\n        </pz-formitem>\n        <pz-formitem>\n            <pzbutton @click.native=\"submitHandle\">提交</pzbutton>\n        </pz-formitem>\n    </pz-form>\n</div>");
  module.exports = exports['default'];
  //通过验证
  //# sourceMappingURL=/static/site/admin/pages/block/edit.js.map
  

});
