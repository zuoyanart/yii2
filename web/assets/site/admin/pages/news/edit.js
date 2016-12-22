define('site/admin/pages/news/edit.vue', function(require, exports, module) {

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
                  nodeid: 0,
                  timg: "",
                  link: "",
                  source: "",
                  brief: "",
                  content: "",
                  tags: "",
                  pass: 1,
                  reco: 1
              },
              nodeOptions: [{
                  text: '不限',
                  value: 0
              }],
              nodeDefault: 0,
              recoDefault: 0,
              passDefault: 0,
              passOption: [{
                  text: '审核',
                  value: 1
              }, {
                  text: '未审核',
                  value: 0
              }],
              recoOption: [{
                  text: '不推荐',
                  value: 0
              }, {
                  text: '1级推荐',
                  value: 1
              }],
              rules: {
                  title: {
                      min: 1,
                      max: 48,
                      message: "请填写1-48位的标题"
                  },
                  timg: {
                      required: false,
                      min: 1,
                      max: 30,
                      message: "题图须在1-100个字符之间"
                  },
                  link: {
                      required: false,
                      min: 8,
                      max: 150,
                      message: "请填写8-150位的名称,非必填"
                  },
                  source: {
                      required: false,
                      min: 1,
                      max: 30,
                      message: "请输入文章来源"
                  },
                  breif: {
                      required: false,
                      min: 1,
                      max: 300,
                      message: "请填写1-20位的名称"
                  },
                  tags: {
                      required: false,
                      min: 1,
                      max: 30,
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
                          return regeneratorRuntime.awrap(_pizzatools2['default'].httpAgent("/admin/article/" + op, "post", this.form));
  
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
          },
          /**
           * 递归格式化nodelist
           * @method fomatNodeList
           * @param  {[type]}      pid  [description]
           * @param  {[type]}      data [description]
           * @return {[type]}           [description]
           */
          formatNodeList: function formatNodeList(pid, data, na) {
              var s = '';
              for (var i = 0, len = data.length; i < len; i++) {
                  if (data[i].pid == pid + "") {
                      na.push({
                          text: this.setNodeListGap(data[i].nodepath) + data[i].name,
                          value: data[i].id
                      });
                      // s += '<option value="' + data[i].id + '">' + setNodeListGap(data[i].nodepath) + data[i].name + '</option>';
                      this.formatNodeList(data[i].id, data, na);
                  }
              }
              return s;
          },
          /**
           * fomat nodelist 添加制表符
           * @method setNodeListGap
           * @param  {[type]}       nodepath [description]
           */
          setNodeListGap: function setNodeListGap(nodepath) {
              var l = nodepath.split(',').length - 3;
              var s = '';
              if (l == 0) {
                  return s;
              } else {
                  s += '├';
                  for (var i = 0; i < l; i++) {
                      s += '─ ';
                  }
                  return s;
              }
          }
  
      },
      mounted: function mounted() {
          var nodes, nodesArray, id, article;
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
                      //获取node
                      context$1$0.next = 4;
                      return regeneratorRuntime.awrap(_pizzatools2['default'].httpAgent("/admin/tree/pageall", "post"));
  
                  case 4:
                      nodes = context$1$0.sent;
                      nodesArray = [];
  
                      // for (let i = 0; i < nodes.msg.length; i++) {
                      this.formatNodeList(1, nodes.msg, nodesArray);
                      // }
                      this.nodeOptions = nodesArray;
                      //获取article
                      id = this.$route.params.id;
  
                      if (!id) {
                          context$1$0.next = 18;
                          break;
                      }
  
                      context$1$0.next = 12;
                      return regeneratorRuntime.awrap(_pizzatools2['default'].httpAgent("/admin/article/get", "post", {
                          id: id
                      }));
  
                  case 12:
                      article = context$1$0.sent;
  
                      this.form = article.msg;
                      this.nodeDefault = article.msg.nodeid;
                      this.recoDefault = article.msg.reco;
                      this.passDefault = article.msg.pass;
                      editor.html(article.msg.content);
  
                  case 18:
                  case 'end':
                      return context$1$0.stop();
              }
          }, null, this);
      }
  };
  
  (function (template) {
  
      module && module.exports && (module.exports.template = template);
  
      exports && exports['default'] && (exports['default'].template = template);
  })("<div id=\"main\">\n    <div class=\"menu\">\n        <a href=\"javascript:history.back();\">返回</a>\n    </div>\n    <pz-form ref=\"form\">\n        <pz-formitem label=\"标题\" :validate=\"rules.title\">\n            <pzinput v-model=\"form.title\" placeholder=\"请输入活文章标题\"></pzinput>\n        </pz-formitem>\n        <pz-formitem label=\"节点\">\n            <pzselect :options=\"nodeOptions\" :default=\"nodeDefault\" v-model=\"form.nodeid\"></pzselect>\n        </pz-formitem>\n        <pz-formitem label=\"标题图片\" :validate=\"rules.timg\">\n            <pzinput v-model=\"form.timg\" id=\"timg\" style=\"width:592px;display:inline-block;\"></pzinput>\n            <pzbutton id=\"timgup\">上传</pzbutton>\n        </pz-formitem>\n        <pz-formitem label=\"文章连接\" :validate=\"rules.link\">\n            <pzinput v-model=\"form.link\"></pzinput>\n        </pz-formitem>\n        <pz-formitem label=\"文章来源\" :validate=\"rules.source\">\n            <pzinput v-model=\"form.source\"></pzinput>\n        </pz-formitem>\n        <pz-formitem label=\"描述\" :validate=\"rules.brief\">\n            <textarea v-model=\"form.brief\" style=\"height:100px;\"></textarea>\n        </pz-formitem>\n        <pz-formitem label=\"正文\" :validate=\"rules.content\">\n            <textarea id=\"content\" v-model=\"form.content\" style=\"height:500px;\"></textarea>\n        </pz-formitem>\n        <pz-formitem label=\"标签\" :validate=\"rules.tags\">\n            <pzinput v-model=\"form.tags\"></pzinput>\n        </pz-formitem>\n        <pz-formitem label=\"附加\" :validate=\"rules.xs\">\n            <pzselect :options=\"passOption\" v-model=\"form.pass\" :default=\"this.passDefault\"></pzselect>\n            <pzselect :options=\"recoOption\" v-model=\"form.reco\" :default=\"this.recoDefault\"></pzselect>\n        </pz-formitem>\n        <pz-formitem>\n            <pzbutton @click.native=\"submitHandle\">提交</pzbutton>\n        </pz-formitem>\n    </pz-form>\n</div>");
  module.exports = exports['default'];
  //通过验证
  //# sourceMappingURL=/static/site/admin/pages/news/edit.js.map
  

});
