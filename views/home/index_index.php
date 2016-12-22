<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
<meta name="renderer" content="webkit">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta name="robots" content="noindex,nofollow">
<meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">
    <link rel="stylesheet" type="text/css" href="/static/css/variables.css" />
    <link rel="stylesheet" media="screen" charset="utf-8" href="/static/css/pizza.css" />
    <link rel="stylesheet" href="/static/css/iconfont.css" />
    <link rel="stylesheet" href="/static/site/home/index/index.css" />
</head>
<ul class="menu">
    <%for(var i=0;i<node.length;i++) {%>
        <li>
            <a href="<%= node[i].link%>">
                <%= node[i].name%>
            </a>
        </li>
        <%}%>
</ul>

<%for(var i=0;i<node.length;i++) {%>
<div class="articlelist">
  <h2><%= node[i].name%></h2>
  <ul>
    <% var data = article[i+1].msg;%>
    <%for(var j=0; j < data.length; j++) {%>
      <li><a href="<%= data[j].link%>"><%= data[j].title%></a></li>
    <%}%>
  </ul>
</div>
<%}%>

<body>
    <div id="app"></div>
    <!-- <script src="//cdn.bootcss.com/vue/2.0.3/vue.min.js"></script> -->
    <!-- <script id="ssr" src="/site/home/index/app.js"></script> -->
    <!-- 此处根据id="ssr"获取服务端渲染脚本-->
<script data-loader="data-loader" charset="utf-8" src="/static/lib/mod.js"></script>
<script data-loader="data-loader" charset="utf-8" src="/static/lib/ejs.js"></script>
<script type="text/javascript" src="/static/node_modules/vue/dist/vue.js"></script>
<script type="text/javascript" src="/static/site/home/index/index.js"></script>
<script type="text/javascript" src="/static/node_modules/jquery/dist/jquery.min.js"></script>
<script type="text/javascript" src="/static/node_modules/process/browser.js"></script>
<script type="text/javascript" src="/static/node_modules/babel-polyfill/dist/polyfill.min.js"></script>
<script type="text/javascript" src="/static/node_modules/component-emitter/index.js"></script>
<script type="text/javascript" src="/static/node_modules/superagent/superagent.js"></script>
<script type="text/javascript" src="/static/node_modules/vue-layer/dist/vue-layer.js"></script>
<script type="text/javascript" src="/static/modules/pizzalayer/layer.js"></script>
<script type="text/javascript" src="/static/modules/pizzatools/pizza.tools.js"></script>
<script type="text/javascript" src="/static/modules/layer/skin/layer.js"></script>
<script type="text/javascript" src="/static/widget/globle/globle.js"></script>
<script>
        // app.$mount("#app");asd
        var index = require("home/index/index");
        index.init();
        var g = require("globle/globle");

      require("main");
    </script>
</body>

</html>
