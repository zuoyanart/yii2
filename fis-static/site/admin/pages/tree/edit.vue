<style lang="css">



</style>

<template lang="html">

<div id="main">
    <div class="menu">
        <a href="javascript:history.back();">返回</a>
    </div>
    <pz-form ref="form">
        <pz-formitem label="标题" :validate="rules.name">
            <pzinput v-model="form.name" placeholder="请输入节点名称"></pzinput>
        </pz-formitem>
        <pz-formitem label="连接地址" :validate="rules.link">
            <pzinput v-model="form.link" placeholder="请输入节点名称"></pzinput>
        </pz-formitem>
        <pz-formitem label="正文类型" :validate="rules.article_type">
            <pzselect :options="articleTypeOption"></pzselect>
        </pz-formitem>
        <pz-formitem label="SEO keyword" :validate="rules.keyword">
            <pzinput v-model="form.keyword" placeholder="请输入keyword"></pzinput>
        </pz-formitem>
        <pz-formitem label="SEO description" :validate="rules.seodes">
            <textarea v-model="form.seodes" placeholder="请输入description"></textarea>
        </pz-formitem>
        <pz-formitem label="正文" :validate="rules.brief">
            <textarea id="brief" v-model="form.brief" style="height:500px;"></textarea>
        </pz-formitem>
        <pz-formitem>
            <pzbutton @click.native="submitHandle">提交</pzbutton>
        </pz-formitem>
    </pz-form>
</div>

</template>

<script>

import pzbutton from 'pzvue-button';
import pzselect from 'pzvue-select';
import pzinput from 'pzvue-input';
import pzform from 'pzvue-form';
import pzformitem from 'pzvue-formitem';
import kindeditor from "kindeditor";
import tools from 'pizzatools';

export default {
    data() {
            return {
                form: {
                  "link":""
                },
                articleTypeOption: [{
                    text: '普通',
                    value: ""
                }, {
                    text: '组图',
                    value: "photo"
                },{
                  text:"视频",
                  value:"video"
                }],
                rules: {
                    name: {
                        min: 1,
                        max: 48,
                        message: "请填写1-48位的标题"
                    },
                    link: {
                        required: false,
                        min: 1,
                        max: 300,
                        message: "请填写1-20位的名称"
                    },
                    keyword: {
                      required: false,
                      min: 1,
                      max: 30,
                      message: "请填写1-30位的名称"
                    },
                    seodes: {
                      required: false,
                      min: 1,
                      max: 30,
                      message: "请填写1-30位的名称"
                    },
                    brief: {
                      required: false,
                      min: 1,
                      max: 30,
                      message: "请填写1-30位的名称"
                    }
                }
            }
        },
        components: {
            pzbutton,
            pzinput,
            pzselect,
            "pz-form": pzform,
            "pz-formitem": pzformitem,
        },
        methods: {
            submitHandle: async function() {
                let ischeck = await this.$refs.form.validate();
                if (ischeck || true) { //通过验证
                  let url = document.location.href;
                    let id = this.$route.params.id;
                    let op = (url.indexOf("/tree/add/") == -1) ? "update" : "create";
                    this.form.brief = escape(editor.html());
                    this.form.pid = id;
                    await tools.httpAgent("/admin/tree/" + op, "post", this.form);
                    history.back();
                } else {
                    console.log("数据验证失败");
                    let id = this.$layer.alert("this is demo", {
                        title: "警告"
                    });
                }
            },
        },
        async mounted() {
            window.editor = KindEditor.create('#brief', {
                uploadJson: '/admin/upfile/local',
                allowFileManager: false
            });
            //获取
            let url = document.location.href;
            let id = this.$route.params.id;
            if (url.indexOf("/tree/add/") == -1) {
                let article = await tools.httpAgent("/admin/tree/get", "post", {
                    id: id
                });
                this.form = article.msg;
                editor.html(article.msg.brief);
            }
        },
}

</script>
