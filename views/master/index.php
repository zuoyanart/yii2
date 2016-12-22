
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
<meta name="renderer" content="webkit">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta name="robots" content="noindex,nofollow">
<meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">    
    <title></title>

    <link rel="stylesheet" href="/static/css/iconfont.css" />
    <link rel="stylesheet" href="/static/site/common/common.css" />
    <link rel="stylesheet" href="/site/admin/base.css" />
</head>
<body>
	<div id="header">
		<h1><i class="icon-pizza"></i>Pizza Admin</h1>
	</div>
	<div id="user-nav">
		<ul>
			<li><i class="icon-person"></i><span id="userinfo"></span></li>
			<li><a href="javascript:void(0);" id="loginout"><i class="icon-loginout"></i>退出</a></li>
		</ul>
	</div>
	<div id="search">
		<input type="search" id="searchkw">
	</div>
	<div id="sidebar">
		<ul>
			<li><a href="/admin" class=""><i class="icon-home"></i>主页</a></li>
			<li>
				<a href="#" class="submenu"><i class="icon-article"></i>信息管理</a>
				<ul>
					<li><a href="/admin/tree">节点管理</a></li>
					<li><a href="/admin/article">文章管理</a></li>
					<li><a href="/admin/block">模块管理</a></li>
				</ul>
			</li>
			<li>
        <a href="#" class="submenu"><i class="icon-setting"></i>互动管理</a>
        <ul>
					<li><a href="/admin/guestbook">留言板管理</a></li>
					<!-- <li><a href="/admin/usergroup">用户组管理</a></li> -->
					<!-- <li><a href="/admin/power">权限分配</a></li> -->
				</ul>
      </li>
      <li>
        <a href="#" class="submenu"><i class="icon-setting"></i>系统管理</a>
        <ul>
          <li><a href="/admin/user">管理员管理</a></li>
          <!-- <li><a href="/admin/usergroup">用户组管理</a></li> -->
          <!-- <li><a href="/admin/power">权限分配</a></li> -->
        </ul>
      </li>
		</ul>
	</div>
	<div id="main">
		
	</div>
	<div class="row-fluid"></div>    

<script data-loader="data-loader" charset="utf-8" src="/static/lib/mod.js"></script>
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
<script type="text/javascript" src="/static/modules/pizzaui/pizza.ui.js"></script>
<script type="text/javascript" src="/static/site/common/common.js"></script>
<script type="text/javascript">
  var globleConfig = require('globle/globle');
  globleConfig.init();
	var common = require('common/common');
	common.init();
	</script>
</body>

</html>
