//由于使用了bower，有很多非必须资源。通过set project.files对象指定需要编译的文件夹和引用的资源
// fis.set('project.files', ['page/**', 'map.json', 'modules/**', 'lib']);
fis.set('project.ignore', ['*.bat', '*.rar', 'node_modules/**', 'fis-conf.js', "package.json", "*.sh"]);
fis.set('project.fileType.text', 'es');

fis.set('statics', '/web/static'); //static目录
fis.set('url', '/static');

//FIS modjs模块化方案，您也可以选择amd/commonjs等
fis.hook('commonjs', {
    mod: 'amd',
    extList: ['.js', '.jsx', '.es', '.ts', '.tsx'],
    paths: {
        "jquery": '/node_modules/jquery/dist/jquery.min.js',
        "vue": '/node_modules/vue/dist/vue.js',
        "process/browser": '/node_modules/process/browser.js',
        "kindeditor": '/widget/kindeditor/kindeditor-all.js', //4.1.1
    }
});



/*************************目录规范*****************************/
fis.match("**/*", {
        release: '${statics}/$&'
    })
    .match('/node_modules/**.js', {
        isMod: true,
        useSameNameRequire: true,
        wrap: true,
    })
    .match('/node_modules/kindeditor/**', {
        url: '${url}/$&',
        release: '${statics}/$&',
        // isMod: true,
        // useSameNameRequire: true,
        // wrap: true,
    })
    .match(/^\/site\/([^\/]+)\/(.*)\.(ejs)$/i, {
        isHtmlLike: true,
        release: false
    })
    .match(/^\/(widget|site|vue)\/(.*)\.(es)$/i, {
        parser: fis.plugin('babel-5.x', {
            sourceMaps: false, //启用调试
            // blacklist: ['regenerator'],
            stage: 3 //ES7不同阶段语法提案的转码规则（共有4个阶段）
        }),
        isMod: true,
        id: "$2",
        rExt: 'js'
    })
    //modules下面都是模块化资源
    .match(/^\/modules\/([^\/]+)\/(.*)\.(js)$/i, {
        isMod: true,
        id: '$1', //id支持简写，去掉modules和.js后缀中间的部分
        release: '${statics}/$&',
        url: '${url}/$&',
        // optimizer: fis.plugin('uglify-js')
    })
    .match(/^\/modules\/([^\/]+)\/(.*)\.(es)$/i, {
        parser: fis.plugin('babel-5.x', {
            sourceMaps: true, //启用调试
            // blacklist: ['regenerator'],
            stage: 3 //ES7不同阶段语法提案的转码规则（共有4个阶段）
        }),
        isMod: true,
        id: "$1",
        rExt: 'js'
    })
    //page下面的页面发布时去掉page文件夹
    .match(/^\/views\/(common|master|admin)\/(.*)\.(html)$/i, {
        parser: fis.plugin('swigt'),
        useCache: false,
        release: '/$&',
        rExt: 'php'

    })
    .match(/^\/views\/(vue|home)\/(.*)\.(html)$/i, {
        useCache: false,
        release: '$&',
        rExt: 'php'
    })
    .match(/^\/(widget|site)\/(.*)\.(js)$/i, {
        isMod: true,
        id: '$2',
        url: '${url}/$&'
    })
    .match('*.{js,jsx,ts,tsx,es}', {
        preprocessor: [
            fis.plugin('js-require-css'),
            fis.plugin('js-require-file', {
                useEmbedWhenSizeLessThan: 10 * 1024 // 小于10k用base64
            })
        ]
    })
    .match("/widget/kindeditor-4.1.10/**.js", {
        isMod: false,
        url: '${url}/$&'
    })
    .match('**/*.less', { //编译less
        parser: fis.plugin('less'),
        rExt: '.css',
        // optimizer: fis.plugin('optimizer-clean-css')
    })
    .match('**/*.scss', { //编译less
        parser: fis.plugin('node-sass'),
        rExt: '.css',
        // optimizer: fis.plugin('optimizer-clean-css')
    })
    //less的mixin文件无需发布
    .match(/^(.*)mixin\.less$/i, {
        release: false
    })
    //前端模板,当做类js文件处理，可以识别__inline, __uri等资源定位标识
    .match("**/*.tmpl", {
        isJsLike: true,
        release: false
    }).match("**/*", {
        url: '/static$&'
    })
    //页面模板不用编译缓存
    .match(/.*\.(html|jsp|tpl|vm|htm|asp|aspx|php)$/, {
        useCache: false
    });


fis.match("site/admin/**.vue", {
        isMod: true,
        rExt: 'js',
        useSameNameRequire: true,
        parser: fis.plugin('vue-component', {
            cssScopeFlag: 'vuec'
        })
    })
    // .match("site/admin/**.css", {
    //     release: "css1/$1"
    // })
    .match("site/admin/**.vue:less", {
        rExt: 'css',
        parser: fis.plugin('less')
    })
    .match("site/admin/**.vue:scss", {
        rExt: 'css',
        parser: fis.plugin('node-sass'),
    })
    .match("site/admin/**.vue:js", {
        parser: [fis.plugin('babel-5.x', {
                sourceMaps: true, //启用调试
                // blacklist: ['regenerator'],
                stage: 3 //ES7不同阶段语法提案的转码规则（共有4个阶段）
            }),
            fis.plugin('translate-es3ify', null, 'append')
        ]
    });



//打包与css sprite基础配置
fis.match('::packager', {
    // npm install [-g] fis3-postpackager-loader
    postpackager: fis.plugin('loader', {
        resourceType: 'mod',
        obtainScript: true,
        // allInOne: {
        //     ignore: ["/widget/kindeditor-4.1.10/kindeditor.js", "/widget/kindeditor-4.1.10/lang/zh_CN.js", '/lib/ejs.js'],
        //     includeAsyncs: false //不包含异步依赖
        // },
        useInlineMap: true, // 资源映射表内嵌
    }),
    packager: fis.plugin('map', {
        useTrack: false,
        // 'pkg/base.js': [ '/modules/layer/*.js', '/modules/pizzalayer/*.js', '/modules/pizzatools/*.js'],
        // 'pkg/base-a.js': ['/widget/globle/*.js', '/modules/pizzaui/pizza.ui.js', '/site/common/common.js'],
        // 'pkg/base.css': ['/css/pizza.css', '/css/iconfont.css'],
        // 'pkg/base-a.css': ['/css/amui.css', '/css/iconfont.css']
    }),
    spriter: fis.plugin('csssprites', {
        layout: 'matrix',
        margin: '15'
    })
});
fis.unhook('components')
fis.hook("node_modules", {
    shutup: true,
});
