import Vue from "vue";
import Router from "vue-router";
import App from "@/App.vue";
import HeroList from '@/components/heroList.vue';
import Weapon from '@/components/weapon.vue';
import Outfit from '@/components/outfit.vue';
import Add from '@/components/add.vue';
import Edit from '@/components/edit.vue'


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: App
    },
    {
      path: "/weapon",
      component: Weapon
    },
    {
      path: "/outfit",
      component: Outfit
    },
    {
      path:'/heroList',
      component:HeroList
    },
    {
      path:'/add',
      component:Add
    },
    {
      path:'/edit/:id',
      component:Edit
    }
  ],
});


