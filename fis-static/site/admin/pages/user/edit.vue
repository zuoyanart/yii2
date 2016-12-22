<style lang="css">



</style>

<template lang="html">

<div id="main">
    <div class="menu">
        <a href="javascript:history.back();">返回</a>
    </div>
    <pz-form ref="form">
        <pz-formitem label="用户名" :validate="rules.username">
            <pzinput v-model="form.username" placeholder=""></pzinput>
        </pz-formitem>
        <pz-formitem label="昵称" :validate="rules.nickname">
            <pzinput v-model="form.nickname" placeholder=""></pzinput>
        </pz-formitem>
        <pz-formitem label="密码" :validate="rules.password">
            <pzinput v-model="form.password" placeholder=""></pzinput>
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
import tools from 'pizzatools';

export default {
    data() {
            return {
                form: {
                    username: '',
                    nickname: '',
                    password: '',
                },
                rules: {
                    username: {
                        min: 1,
                        max: 10,
                        message: "请填写1-10位的用户名"
                    },
                    nickname: {
                        min: 1,
                        max: 10,
                        message: "请填写1-10位的昵称"
                    },
                    password: {
                        required: false,
                        min: 6,
                        max: 20,
                        message: "请填写6-20位的密码"
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
                if (ischeck) { //通过验证
                    let id = this.$route.params.id;
                    let op = id ? "update" : "create";
                    this.form.id = id;
                    await tools.httpAgent("/admin/user/" + op, "post", this.form);
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
            //获取block
            let id = this.$route.params.id;
            if (id) {
                let article = await tools.httpAgent("/admin/user/get", "post", {
                    id: id
                });
                this.form = article.msg;
            }
        },
}

</script>
