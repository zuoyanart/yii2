<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
<meta name="renderer" content="webkit">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta name="robots" content="noindex,nofollow">
<meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">
    <title>
        <%= news.title%>
    </title>
    <meta name="Keywords" content="<%= news.tags%>" />
    <meta name="Description" content="<%= news.brief%>" />

    <link rel="stylesheet" media="screen" charset="utf-8" href="/static/css/pizza.css" />
    <link rel="stylesheet" href="/static/css/iconfont.css" />
    <link rel="stylesheet" href="/static/site/home/newslist/newslist.css" />
    <link rel="stylesheet" href="/static/site/home/content/content.css" />
    <link rel="stylesheet" href="/static/widget/home-header/header.css" />
</head>

<body>
    <div class="main"><div></div>
        <div class="newslist">
            <div class="left">
                <h1 class="h1title"><%= news.title%></h1>
                <div class="gap">
                    <%= formatTime(news.createtime)%>
                        <div class="bdsharebuttonbox">
                            <a href="#" class="bds_more" data-cmd="more"></a>
                            <a href="#" class="bds_qzone" data-cmd="qzone" title="分享到QQ空间"></a>
                            <a href="#" class="bds_tsina" data-cmd="tsina" title="分享到新浪微博"></a>
                            <a href="#" class="bds_tqq" data-cmd="tqq" title="分享到腾讯微博"></a>
                            <a href="#" class="bds_renren" data-cmd="renren" title="分享到人人网"></a>
                            <a href="#" class="bds_weixin" data-cmd="weixin" title="分享到微信"></a>
                        </div>
                </div>
                <div class="cont">
                    <%- news.content%>
                </div>
                <div class="cmttitle">最新评论</div>
                <ul class="cmtlist">
                
                </ul>
                <div class="form" style="padding:0 0 50px 0;">
                    <div style="padding:0;">
                        <textarea name="content" id="cmtcontent" rows="5" cols="40" placeholder="来说两句吧"></textarea>
                    </div>
                    <div style="text-align:right;">
                        <input type="submit" value="提交" class="btn btn-info">
                    </div>
                </div>
            </div>
            <div class="right">
                <%- paiming%>
            </div>
            <div style="clear:both;"></div>
        </div>
    </div>

<script data-loader="data-loader" charset="utf-8" src="/static/lib/mod.js"></script>
<script data-loader="data-loader" charset="utf-8" src="/static/lib/ejs.js"></script>
<script type="text/javascript" src="/static/node_modules/jquery/dist/jquery.min.js"></script>
<script type="text/javascript" src="/static/node_modules/process/browser.js"></script>
<script type="text/javascript" src="/static/node_modules/babel-polyfill/dist/polyfill.min.js"></script>
<script type="text/javascript" src="/static/node_modules/component-emitter/index.js"></script>
<script type="text/javascript" src="/static/node_modules/superagent/superagent.js"></script>
<script type="text/javascript" src="/static/node_modules/vue-layer/dist/vue-layer.js"></script>
<script type="text/javascript" src="/static/modules/pizzalayer/layer.js"></script>
<script type="text/javascript" src="/static/modules/pizzatools/pizza.tools.js"></script>
<script type="text/javascript" src="/static/modules/layer/skin/layer.js"></script>
<script type="text/javascript" src="/static/widget/home-globle/globle.js"></script>
<script type="text/javascript" src="/static/modules/pizzaui/pizza.ui.js"></script>
<script type="text/javascript" src="/static/site/home/content/comment.js"></script>
<script type="text/javascript">
    var globleConfig = require('home-globle/globle');
    globleConfig.init();


                            window._bd_share_config = {
                                "common": {
                                    "bdSnsKey": {},
                                    "bdText": "",
                                    "bdMini": "2",
                                    "bdPic": "",
                                    "bdStyle": "0",
                                    "bdSize": "16"
                                },
                                "share": {}
                            };
                            with(document) 0[(getElementsByTagName('head')[0] || body).appendChild(createElement('script')).src = 'http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion=' + ~(-new Date() / 36e5)];
                        

  var homegloble = require("home-globle/globle");
  homegloble.init();


       var comment = require("home/content/comment");
       cmt = new comment(<%= news.id%>);
       cmt.list(1);
       cmt.create();
    </script>
</body>

</html>
