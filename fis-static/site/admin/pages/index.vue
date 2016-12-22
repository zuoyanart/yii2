<style lang="scss">
   @import "../assets/sass/index.scss";
</style>

<template lang="html">

<div id="main">
    <ul class="indexlist" id="indexlist">
        <li class="li1"><router-link to="/news" ><i class="icon-article"></i>文章管理</router-link></li>
        <li class="li2"><a href="#"><i class="icon-chat"></i><span class="tip">5</span>统计图表</a></li>
        <li class="li3"><a href="#"><i class="icon-setting"></i>系统设置</a></li>
        <li class="li4"><a href="#"><i class="icon-noti"></i><span class="tip">320</span>系统通知</a></li>
    </ul>
    <div style="margin:20px;line-height:30px;">
        <h2>关于</h2> 当前版本号：1.5.4
        <br/> 开发者: <a href="#">左盐</a>
        <br/> E-mail: <a href="mailto:huabinglan@163.com">huabinglan@163.com</a>
        <br/> github: <a href="http://github.com/zuoyanart" target="_blank">http://github.com/zuoyanart</a>
        <br/> blog: <a href="http://www.zuoyan.space" target="_blank">www.zuoyan.space</a>
        <br/> ui框架： <a href="http://ui.zuoyan.space" target="_blank">Pizza UI</a>
    </div>
</div>

</template>

<script>

export default {}

</script>
