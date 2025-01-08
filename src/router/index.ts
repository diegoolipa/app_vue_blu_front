import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/auth/Login.vue';
import Register from '../views/auth/Register.vue';
import Acerca from '../views/web/Acerca.vue';
import Inicio from '../views/web/Inicio.vue';
import Perfil from '../views/admin/perfil/Perfil.vue';

const routes = [
  { path: '/', component: Inicio },
  { path: '/auth/acerca', component: Acerca },
  { path: '/auth/register', component: Register },
  { path: '/auth/login', component: Login },
  { path: '/admin/perfil', component: Perfil },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
