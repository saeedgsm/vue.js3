import {createRouter,createWebHistory} from 'vue-router';
import HomePage from '@/pages/HomePage.vue';
import IndexUsers from '@/pages/users/UsersIndex.vue';
import ShowUser from "@/pages/users/ShowUser.vue";
import TemplateUser from "@/pages/users/TemplateUser.vue";
import PostAll from "@/pages/posts/PostAll.vue";
import PostShow from "@/pages/posts/PostShow.vue";
import PostCreate from "@/pages/posts/PostCreate.vue";
import PostEdit from "@/pages/posts/PostEdit.vue";
import HomeCalc from "@/pages/calc/HomeCalc.vue";
const routes = [
    {path:"/",name:"homePage",component:HomePage},
    {path:"/calc",name:"homeCalc",component:HomeCalc},
    {path:"/users",name:"users",component:TemplateUser, children:[
            {path:"",name:"users",component:IndexUsers},
            {path:":id",name:"userId",component:ShowUser},
        ]},
    {path:"/posts",name:"posts",component:TemplateUser, children:[
            {path:"",name:"posts",component:PostAll},
            {path:":id",name:"postId",component:PostShow},
            {path:"create",name:"postCreate",component:PostCreate},
            {path:"edit/:id",name:"postEdit",component:PostEdit},
        ]},
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;