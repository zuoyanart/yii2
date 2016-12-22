import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import layer from 'vue-layer';

Vue.use(VueRouter);
Vue.prototype.$layer = layer;

const tree = resolve => require(['./pages/tree/tree.vue'], resolve);
const treeedit = resolve => require(['./pages/tree/edit.vue'], resolve);
const news = resolve => require(['./pages/news/news.vue'], resolve); //实现懒加载
const newsedit = resolve => require(['./pages/news/edit.vue'], resolve);
const block = resolve => require(['./pages/block/block.vue'], resolve);
const blockedit = resolve => require(['./pages/block/edit.vue'], resolve);
const guestbook = resolve => require(['./pages/guestbook/guestbook.vue'], resolve);
const guestbookEdit = resolve => require(['./pages/guestbook/edit.vue'], resolve);
const user = resolve => require(['./pages/user/user.vue'], resolve);
const useredit = resolve => require(['./pages/user/edit.vue'], resolve);

const routes = [{
    path: '/',
    component: require("./pages/index.vue")
}, {
    path: '/news',
    component: news,
}, {
    path: "/news/edit/:id",
    component: newsedit
}, {
    path: "/news/create",
    component: newsedit
}, {
    path: "/block",
    component: block
}, {
    path: "/block/edit/:id",
    component: blockedit
}, {
    path: "/block/edit",
    component: blockedit
}, {
    path: "/guestbook",
    component: guestbook
}, {
    path: "/user",
    component: user
}, {
    path: "/user/edit/:id",
    component: useredit
}, {
    path: "/user/edit",
    component: useredit
}, {
    path: "/tree",
    component: tree
}, {
    path: "/tree/add/:id",
    component: treeedit
}, {
    path: "/tree/edit/:id",
    component: treeedit
}, ];


const router = new VueRouter({
    routes
});

const app = new Vue({
    el: '#app',
    render: h => h(App),
    router //使用路由器
});
