<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
<meta name="renderer" content="webkit">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta name="robots" content="noindex,nofollow">
<meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">  <title>登录</title>

    <link rel="stylesheet" href="/static/css/iconfont.css" />
    <link rel="stylesheet" href="/static/css/pizza.css" />
    <link rel="stylesheet"charset="utf-8" href="/static/site/admin/login/login.css" />
</head>
<body>
  <div class="login">
    <h2>PizzaAdmin</h2>
    <div class="login-content" id="form1">
        <div><input type="text" name="name" id="name" placeholder="用户名"></div>
        <div><input type="password" name="password" id="password" placeholder="密码"></div>
        <div>
          <button class="btn btn-success">登录</button>
        </div>
    </div>
  </div>
<script data-loader="data-loader" charset="utf-8" src="/static/lib/mod.js"></script>
<script type="text/javascript" src="/static/node_modules/jquery/dist/jquery.min.js"></script>
<script type="text/javascript" src="/static/modules/layer/skin/layer.js"></script>
<script type="text/javascript" src="/static/node_modules/process/browser.js"></script>
<script type="text/javascript" src="/static/node_modules/babel-polyfill/dist/polyfill.min.js"></script>
<script type="text/javascript" src="/static/node_modules/component-emitter/index.js"></script>
<script type="text/javascript" src="/static/node_modules/superagent/superagent.js"></script>
<script type="text/javascript" src="/static/node_modules/vue-layer/dist/vue-layer.js"></script>
<script type="text/javascript" src="/static/modules/pizzalayer/layer.js"></script>
<script type="text/javascript" src="/static/modules/pizzatools/pizza.tools.js"></script>
<script type="text/javascript" src="/static/modules/pizzaui/pizza.ui.js"></script>
<script type="text/javascript" src="/static/site/admin/login/login.js"></script>
<script type="text/javascript">
    var login = require('admin/login/login');
    login.init();
  </script>
</body>

</html>
