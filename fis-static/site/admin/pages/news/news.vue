<style lang="css">

</style>

<template lang="html">
    <pzlist :docs="datalist" :handle="handle"></pzlist>
</template>

<script>
import pzlist from '../../components/list/list.vue';
import tools from 'pizzatools';

export default {
    data() {
        return {
            datalist: {
                options: {},
                more: [{
                    text: "添加",
                    link: "/news/create",
                }, {
                    text: "审核",
                    cls: "pass"
                }, {
                    text: "删除",
                    cls: "del"
                }],
                rows: [],
                button: [{
                    text: "编辑",
                    link: "/news/edit",
                }, {
                    text: "删除",
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
        this.$on('list-page', this.page);
        //获取数据
        await this.page("", 1, 1, 20);
        //设置方法
        this.handle = {
            "pass": this.pass,
            "del": this.del,
        };
    },
    methods: {
        page: async function(kw,  cp, mp) {
            if (cp == 1) {
                this.datalist.rows = [];
            }
            let doc = await tools.httpAgent("/admin/article/page", "post", {
                cp: cp,
                mp: mp,
                kw: kw,
                nodeid: 1
            });
            let data = doc.msg;
            for (var i = 0, l = data.length; i < l; i++) {
                this.datalist.rows.push({
                    id: data[i].id,
                    nodename: "[" + data[i].nodename + "]",
                    title: data[i].title,
                    link: '/content/' + data[i].id + '?preview=true',
                    button: [{
                        text: (data[i].pass == 0 ? "审核" : "取消审核"),
                        cls: "pass"
                    }],
                });
            }
        },
        pass: async function(id, node) {
            let passState = (node == "取消审核" ? "false" : "true")
            let res = await tools.httpAgent("/admin/article/pass", "post", { //审核
                id: id,
                ispass: passState
            });
            let ids = id.split(',');
            let self = this;
            for (let i = 0, l = ids.length; i < l; i++) {
                this.datalist.rows.find(function(value, index) {
                    if (value.id == ids[i]) {
                        self.datalist.rows[index].button[0].text = (node == "取消审核" ? "审核" : "取消审核");
                        return true;
                    }
                });
            }
        },
        del: async function(id) { //删除
            let res = await tools.httpAgent("/admin/article/remove", "post", {
                id: id
            });
            let ids = id.split(',');
            let self = this;
            for (let i = 0, l = ids.length; i < l; i++) {
                this.datalist.rows.find(function(value, index) {
                    if (value.id == ids[i]) {
                        self.datalist.rows.splice(index, 1);
                        return true;
                    }
                });
            }
        }
    },
    components: {
        pzlist
    }
}
</script>
