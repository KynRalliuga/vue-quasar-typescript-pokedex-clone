import { RouteRecordRaw } from 'vue-router';
import MainLayout from 'layouts/MainLayout.vue';
import PokemonLayout from 'layouts/PokemonLayout.vue';
import Pokemon from 'pages/Pokemon.vue';
import Index from 'pages/Index.vue';
import Error404 from 'pages/Error404.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => MainLayout,
    children: [{ path: '', component: () => Index }],
  },

  {
    path: '/pokemon',
    component: () => PokemonLayout,
    children: [{ path: '', component: () => Pokemon }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => Error404,
  },
];

export default routes;
