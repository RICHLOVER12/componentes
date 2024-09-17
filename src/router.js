import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './components/HomePage.vue'; // Actualiza el nombre del componente
import ProductDetailPage from './components/ProductDetail.vue'; // Actualiza el nombre del componente

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/product/:id',
    name: 'ProductDetail',
    component: ProductDetailPage,
    props: true
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
