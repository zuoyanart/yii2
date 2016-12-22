<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
<meta name="renderer" content="webkit">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta name="robots" content="noindex,nofollow">
<meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">
  <title>后台管理</title>

    <link rel="stylesheet" type="text/css" href="/static/site/admin/components/tree/tree.css" />
    <link rel="stylesheet" type="text/css" href="/static/site/admin/components/tree/tree.css" />
    <link rel="stylesheet" type="text/css" href="/static/site/admin/App-0.css" />
    <link rel="stylesheet" type="text/css" href="/static/site/admin/App-1.css" />
    <link rel="stylesheet" type="text/css" href="/static/site/admin/pages/index.css" />
    <link rel="stylesheet" href="/static/css/iconfont.css" />
</head>

<body>
  <div id="app"></div>
<script data-loader="data-loader" charset="utf-8" src="/static/lib/mod.js"></script>
<script type="text/javascript">/*resourcemap*/
require.resourceMap({
  "res": {
    "site/admin/components/tree/tree-item.vue": {
      "url": "/static/site/admin/components/tree/tree-item.js",
      "type": "js"
    },
    "site/admin/components/tree/tree.vue": {
      "url": "/static/site/admin/components/tree/tree.js",
      "type": "js",
      "deps": [
        "site/admin/components/tree/tree-item.vue"
      ]
    },
    "site/admin/pages/tree/tree.vue": {
      "url": "/static/site/admin/pages/tree/tree.js",
      "type": "js",
      "deps": [
        "site/admin/components/tree/tree.vue"
      ]
    },
    "node_modules/pzvue-button/dist/pz-button": {
      "url": "/static/node_modules/pzvue-button/dist/pz-button.js",
      "type": "js"
    },
    "node_modules/pzvue-select/dist/pz-select": {
      "url": "/static/node_modules/pzvue-select/dist/pz-select.js",
      "type": "js"
    },
    "node_modules/pzvue-input/dist/pz-input": {
      "url": "/static/node_modules/pzvue-input/dist/pz-input.js",
      "type": "js"
    },
    "node_modules/pzvue-form/dist/pz-form": {
      "url": "/static/node_modules/pzvue-form/dist/pz-form.js",
      "type": "js"
    },
    "node_modules/pzvue-formitem/dist/pz-formitem": {
      "url": "/static/node_modules/pzvue-formitem/dist/pz-formitem.js",
      "type": "js"
    },
    "kindeditor/kindeditor-all": {
      "url": "/static/widget/kindeditor/kindeditor-all.js",
      "type": "js"
    },
    "node_modules/kindeditor/kindeditor-all": {
      "url": "/static/node_modules/kindeditor/kindeditor-all.js",
      "type": "js"
    },
    "site/admin/pages/tree/edit.vue": {
      "url": "/static/site/admin/pages/tree/edit.js",
      "type": "js",
      "deps": [
        "node_modules/pzvue-button/dist/pz-button",
        "node_modules/pzvue-select/dist/pz-select",
        "node_modules/pzvue-input/dist/pz-input",
        "node_modules/pzvue-form/dist/pz-form",
        "node_modules/pzvue-formitem/dist/pz-formitem",
        "kindeditor/kindeditor-all",
        "node_modules/kindeditor/kindeditor-all"
      ]
    },
    "node_modules/pzvue-checkbox/dist/pz-checkbox": {
      "url": "/static/node_modules/pzvue-checkbox/dist/pz-checkbox.js",
      "type": "js"
    },
    "site/admin/components/list/list.vue": {
      "url": "/static/site/admin/components/list/list.js",
      "type": "js",
      "deps": [
        "node_modules/pzvue-checkbox/dist/pz-checkbox"
      ]
    },
    "site/admin/pages/news/news.vue": {
      "url": "/static/site/admin/pages/news/news.js",
      "type": "js",
      "deps": [
        "site/admin/components/list/list.vue"
      ]
    },
    "site/admin/pages/news/edit.vue": {
      "url": "/static/site/admin/pages/news/edit.js",
      "type": "js",
      "deps": [
        "node_modules/pzvue-button/dist/pz-button",
        "node_modules/pzvue-select/dist/pz-select",
        "node_modules/pzvue-input/dist/pz-input",
        "node_modules/pzvue-form/dist/pz-form",
        "node_modules/pzvue-formitem/dist/pz-formitem",
        "kindeditor/kindeditor-all",
        "node_modules/kindeditor/kindeditor-all"
      ]
    },
    "site/admin/pages/block/block.vue": {
      "url": "/static/site/admin/pages/block/block.js",
      "type": "js",
      "deps": [
        "site/admin/components/list/list.vue"
      ]
    },
    "site/admin/pages/block/edit.vue": {
      "url": "/static/site/admin/pages/block/edit.js",
      "type": "js",
      "deps": [
        "node_modules/pzvue-button/dist/pz-button",
        "node_modules/pzvue-select/dist/pz-select",
        "node_modules/pzvue-input/dist/pz-input",
        "node_modules/pzvue-form/dist/pz-form",
        "node_modules/pzvue-formitem/dist/pz-formitem",
        "kindeditor/kindeditor-all",
        "node_modules/kindeditor/kindeditor-all"
      ]
    },
    "site/admin/pages/guestbook/guestbook.vue": {
      "url": "/static/site/admin/pages/guestbook/guestbook.js",
      "type": "js",
      "deps": [
        "site/admin/components/list/list.vue"
      ]
    },
    "site/admin/pages/user/user.vue": {
      "url": "/static/site/admin/pages/user/user.js",
      "type": "js",
      "deps": [
        "site/admin/components/list/list.vue"
      ]
    },
    "site/admin/pages/user/edit.vue": {
      "url": "/static/site/admin/pages/user/edit.js",
      "type": "js",
      "deps": [
        "node_modules/pzvue-button/dist/pz-button",
        "node_modules/pzvue-select/dist/pz-select",
        "node_modules/pzvue-input/dist/pz-input",
        "node_modules/pzvue-form/dist/pz-form",
        "node_modules/pzvue-formitem/dist/pz-formitem"
      ]
    }
  },
  "pkg": {}
});</script>
<script type="text/javascript" src="/static/node_modules/vue/dist/vue.js"></script>
<script type="text/javascript" src="/static/node_modules/process/browser.js"></script>
<script type="text/javascript" src="/static/node_modules/babel-polyfill/dist/polyfill.min.js"></script>
<script type="text/javascript" src="/static/node_modules/component-emitter/index.js"></script>
<script type="text/javascript" src="/static/node_modules/superagent/superagent.js"></script>
<script type="text/javascript" src="/static/node_modules/vue-layer/dist/vue-layer.js"></script>
<script type="text/javascript" src="/static/node_modules/jquery/dist/jquery.min.js"></script>
<script type="text/javascript" src="/static/modules/pizzalayer/layer.js"></script>
<script type="text/javascript" src="/static/modules/pizzatools/pizza.tools.js"></script>
<script type="text/javascript" src="/static/site/admin/App.js"></script>
<script type="text/javascript" src="/static/node_modules/vue-router/dist/vue-router.js"></script>
<script type="text/javascript" src="/static/site/admin/pages/index.js"></script>
<script type="text/javascript" src="/static/site/admin/main.js"></script>
<script type="text/javascript">
    require("admin/main");
  </script>
</body>
