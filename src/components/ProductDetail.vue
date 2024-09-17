<!-- src/components/ProductDetail.vue -->
<template>
    <div class="container mt-5">
      <div v-if="loading" class="text-center">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
      <div v-else class="card">
        <img :src="product.image" class="card-img-top" alt="Product Image">
        <div class="card-body">
          <h5 class="card-title">{{ product.title }}</h5>
          <p class="card-text">{{ product.description }}</p>
          <p class="text-muted">Precio: ${{ product.price }}</p>
          <router-link to="/" class="btn btn-secondary">Volver</router-link>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'ProductDetail',
    props: ['id'],
    data() {
      return {
        product: null,
        loading: true
      };
    },
    methods: {
      async fetchProduct() {
        try {
          const response = await axios.get(`https://fakestoreapi.com/products/${this.id}`);
          this.product = response.data;
        } catch (error) {
          console.error(error);
        } finally {
          this.loading = false;
        }
      }
    },
    mounted() {
      this.fetchProduct();
    }
  };
  </script>
  
  <style scoped>
  .card {
    max-width: 600px;
    margin: 0 auto;
  }
  </style>
  