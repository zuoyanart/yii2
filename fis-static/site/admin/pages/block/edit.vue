<style lang="css">

</style>

<template lang="html">

<div id="main">
    <div class="menu">
        <a href="javascript:history.back();">返回</a>
    </div>
    <pz-form ref="form">
        <pz-formitem label="标题" :validate="rules.title">
            <pzinput v-model="form.title" placeholder="请输入活文章标题"></pzinput>
        </pz-formitem>
        <pz-formitem label="正文" :validate="rules.content">
            <textarea id="content" v-model="form.content" style="height:500px;"></textarea>
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
                    title: '',
                    content: "",
                },
                rules: {
                    title: {
                        min: 1,
                        max: 48,
                        message: "请填写1-48位的标题"
                    },
                    content: {
                        required: false,
                        min: 1,
                        max: 300,
                        message: "请填写1-20位的名称"
                    },
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
                    let id = this.$route.params.id;
                    let op = id ? "update" : "create";
                    this.form.content = escape(editor.html());
                    await tools.httpAgent("/admin/block/" + op, "post", this.form);
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
            window.editor = KindEditor.create('#content', {
                uploadJson: '/admin/upfile/local',
                allowFileManager: false
            });
            KindEditor('#timgup').click(function() {
                editor.loadPlugin('image', function() {
                    editor.plugin.imageDialog({
                        imageUrl: KindEditor('#timg').val(),
                        clickFn: function(url, title, width, height, border, align) {
                            KindEditor('#timg').val(url);
                            editor.hideDialog();
                        }
                    });
                });
            });
            //获取block
            let id = this.$route.params.id;
            if (id) {
                let article = await tools.httpAgent("/admin/block/get", "post", {
                    id: id
                });
                this.form = article.msg;
                this.nodeDefault = article.msg.nodeid;
                editor.html(article.msg.content);
            }
        },
}

</script>
