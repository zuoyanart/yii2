<style lang="css">

</style>

<template lang="html">
<div id="main">
    <pztree :docs="datalist" :handle="handle"></pztree>
</div>

</template>

<script>

import pztree from '../../components/tree/tree.vue';
import tools from 'pizzatools';

export default {
    data() {
            return {
                datalist: {
                    options: {},
                    more: [{
                        text: "添加1",
                        link: "/news/create",
                    }, {
                        text: "审核",
                        cls: "pass"
                    }, {
                        text: "删除",
                        cls: "del"
                    }],
                    rows: {},
                    button: [{
                        text: "编辑",
                        link: "/news/edit",
                    }, {
                        text: "添加子节点",
                        cls: "del"
                    }, {
                        text: "评论",
                        link: "/news/comment"
                    }, ],
                },
                handle: {}, //传递方法
            };
        },
        async mounted() {
            //获取数据
            let doc = await tools.httpAgent("/index.php/admin/index/page", "post", {
                pid: 1
            });
            let data = doc.msg;
            let level1 = {};
            for (var i = 0, l = data.length; i < l; i++) {
                level1[data[i].id] = {
                    id: data[i].id,
                    pid: data[i].pid,
                    name: data[i].name,
                    path: data[i].nodepath.split(','),
                    fold: false, //是否展开
                };
            }
            this.datalist.rows = level1;
            this.handle = {
                fold: this.fold,
            }
        },
        methods: {
            fold: async function(id, nodepath) {
                let doc = await tools.httpAgent("/index.php/admin/index/page", "post", {
                    pid: id
                });
                let data = doc.msg;
                if (data.length == 0) {
                    return;
                }
                let level = {};
                for (var i = 0, l = data.length; i < l; i++) {
                    level[data[i].id] = {
                        id: data[i].id,
                        name: data[i].name,
                        pid: data[i].pid,
                        path: (data[i].nodepath).split(','),
                        fold: false, //是否展开
                    };
                }
                let path = (",0" + nodepath + "0,").replace(/,0,/g, "").split(",");
                let key = this.datalist.rows[path[1]];
                console.log(path);
                for (var i = 2, l = path.length; i < l; i++) {
                  key = key.children[path[i]];
                }
                console.log(JSON.stringify(key));
                this.$set(key, "children", level);
            }
        },
        components: {
            pztree
        }
}

</script>
