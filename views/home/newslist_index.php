<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
<meta name="renderer" content="webkit">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta name="robots" content="noindex,nofollow">
<meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">
    <link rel="stylesheet" media="screen" charset="utf-8" href="/static/css/pizza.css" />
    <link rel="stylesheet" href="/static/css/iconfont.css" />
    <link rel="stylesheet" href="/static/site/home/newslist/newslist.css" />
</head>
<body>
  <div class="main">
    <ul>
      <%for(var i=0;i<nodelist.length;i++) {%>
        <li><a href="<%= nodelist[i].link%>"><%= nodelist[i].name%></a></li>
      <%}%>
    </ul>
    <div class="right">
      <div class="src">
        <%for(var i=0;i<crumbs.length;i++) {%>
          <a href="<%= crumbs[i].link%>"><%= crumbs[i].name%></a> >
        <%}%>详细
      </div>
      <ul class="list">
        <%for(var i=0;i<news.length;i++) {%>
        <li><a href="<%= news[i].link%>" target="_blank"><%= news[i].title%></a></li>
        <%}%>
      </ul>
      <%- tp%>
    </div>
  </div>

<script data-loader="data-loader" charset="utf-8" src="/static/lib/mod.js"></script>
<script data-loader="data-loader" charset="utf-8" src="/static/lib/ejs.js"></script>
</body>

</html>
