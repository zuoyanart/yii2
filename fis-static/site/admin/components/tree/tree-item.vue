<style lang="css">



</style>

<template lang="html">

<div>
    <li @click="click" :id="items.id" :path="items.path">
        <b class="indent" v-for="a in (items.path.length-3)"></b>
        <i class="icon-add"></i>
        <em>{{items.name}}</em>
        <span>
          <router-link :to="'/tree/edit/'+items.id">编辑</router-link>
          <router-link :to="'/tree/add/'+items.id">添加子节点</router-link>
          <i class="ishide">隐藏</i>
      </span>
    </li>
    <treeitem v-for="doc in items.children" :items="doc" :handle="handle"></treeitem>
</div>

</template>

<script>

export default {
    name: "treeitem",
    props: {
        items: {
            type: Object,
            default: function() {
                return {};
            }
        },
        handle: {
            type: Object,
            default: function() {
                return {};
            }
        }
    },
    methods: {
        click: function(event) {
            let target = event.target;
            if (target.tagName != "I") {
                return;
            }
            let parent = target.parentNode;
            let id = parent.getAttribute("id");
            let path = parent.getAttribute("path");
            target.className = "icon-sub";
            this.handle["fold"](id, path);
        }
    }
}

</script>
