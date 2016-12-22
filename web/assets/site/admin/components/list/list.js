define('site/admin/components/list/list.vue', function(require, exports, module) {

  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
  
  var _pzvueCheckbox = require('node_modules/pzvue-checkbox/dist/pz-checkbox');
  
  var _pzvueCheckbox2 = _interopRequireDefault(_pzvueCheckbox);
  
  exports["default"] = {
      data: function data() {
          return {
              ids: [], //全选获取选中的id，
              checked: false,
              cp: 1,
              mp: 20,
              kw: "",
              scroll: true, //滚动可以加载
              lastScrollBottom: 0
          };
      },
      props: {
          docs: {
              type: Object,
              "default": function _default() {
                  return {};
              }
          },
          handle: {
              type: Object,
              "default": function _default() {
                  return {};
              }
          }
      },
      mounted: function mounted() {
          document.getElementById("main").style.minHeight = document.documentElement.clientHeight - 50 + "px";
          var self = this;
          document.addEventListener('scroll', function () {
              var docHeight = document.body.scrollHeight;
              var scrollTop = 0; //滚动条高度
              if (document.documentElement && document.documentElement.scrollTop) {
                  scrollTop = document.documentElement.scrollTop;
              } else if (document.body) {
                  scrollTop = document.body.scrollTop;
              }
              var bottomHeight = docHeight - scrollTop - $(window).height();
              if (self.lastScrollBottom < bottomHeight) {
                  self.lastScrollBottom = bottomHeight;
                  return;
              }
              self.lastScrollBottom = bottomHeight;
              if (bottomHeight <= 10 && bottomHeight >= 5 && self.scroll) {
                  self.scroll = false;
                  self.cp++;
                  self.$parent.$emit("list-page", self.kw, self.cp, self.mp);
                  setTimeout(function () {
                      self.scroll = true;
                  }, 500);
              }
          }, false);
      },
      methods: {
          enter: function enter(event) {
              this.cp = 1;
              this.$parent.$emit("list-page", event.target.value, 1, 50);
          },
          checkAll: function checkAll(value, ischecked) {
              //全选
              this.checked = ischecked;
          },
          change: function change(value, ischecked) {
              //checkbox change事件
              var index = this.ids.indexOf(value);
              if (ischecked) {
                  //true
                  if (index === -1) {
                      this.ids.push(value);
                  }
              } else {
                  this.ids.splice(index, 1);
              }
          },
          click: function click(event) {
              var target = event.target;
              var cls = target.className;
              var targetParent = target.parentNode;
              if (target.tagName == "A") {
                  //a标签则返回，不执行任何操作
                  return;
              }
              var id = "";
              if (targetParent.className == "menu") {
                  id = this.ids.join(",");
              } else {
                  id = targetParent.getAttribute("id");
              }
              if (id.length == 0) {
                  return;
              }
              this.handle[event.target.className](id, target.innerText);
          }
      },
      components: {
          pzcheckbox: _pzvueCheckbox2["default"]
      }
  };
  
  (function (template) {
  
      module && module.exports && (module.exports.template = template);
  
      exports && exports["default"] && (exports["default"].template = template);
  })("<div id=\"main\">\n    <div class=\"menu\">\n        <pzcheckbox name=\"list\" :change=\"checkAll\">全选</pzcheckbox>|\n        <template v-for=\"b in docs.more\">\n         <router-link :to=\"b.link\" v-if=\"b.link &amp;&amp; b.link != ''\">{{b.text}}</router-link>\n          <em :class=\"b.cls\" v-if=\"!b.link || b.link == ''\" @click=\"click\">{{b.text}}</em> |\n        </template>\n        <input type=\"search\" id=\"searchkw\" @keyup.enter=\"enter\" v-model=\"kw\">\n    </div>\n    <ul class=\"list\" id=\"list\">\n        <li v-for=\"doc in docs.rows\">\n          <pzcheckbox name=\"list\" :checked=\"checked\" :change=\"change\" :value=\"doc.id\"></pzcheckbox>\n          <a :href=\"doc.link\" target=\"_blank\">\n            <template v-for=\"(item, key) in doc\">\n {{(key != \"link\" &amp;&amp; key != \"button\") ? item : \"\"}}\n</template>\n            </a>\n            <span @click=\"click\" :id=\"doc.id\">\n              <template v-for=\"b in docs.button\">\n<router-link :to=\"b.link +'/' + doc.id\" v-if=\"b.link &amp;&amp; b.link != ''\">\n    {{b.text}}</router-link>\n<i :class=\"b.cls\" v-if=\"!b.link || b.link == ''\">{{b.text}}</i>\n</template>\n              <template v-for=\"b in doc.button\">\n<router-link :to=\"b.link +'/' + doc.id\" v-if=\"b.link &amp;&amp; b.link != ''\">\n    {{b.text}}</router-link>\n<i :class=\"b.cls\" v-if=\"!b.link || b.link == ''\">{{b.text}}</i>\n</template>\n            </span>\n        </li>\n    </ul>\n</div>");
  module.exports = exports["default"];
  //# sourceMappingURL=/static/site/admin/components/list/list.js.map
  

});
