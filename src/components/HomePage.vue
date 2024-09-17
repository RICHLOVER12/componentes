<template>
    <div class="container mt-5">
      <div class="row">
        <div v-if="loading" class="text-center">
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
        <div class="col-md-4" v-for="product in products" :key="product.id">
          <div class="card mb-4 shadow-sm">
            <img :src="product.image" class="card-img-top" alt="Product Image">
            <div class="card-body">
              <h5 class="card-title">{{ product.title }}</h5>
              <p class="card-text">{{ truncateDescription(product.description) }}</p>
              <div class="d-flex justify-content-between align-items-center">
                <span class="text-muted">${{ product.price }}</span>
                <router-link :to="{ name: 'ProductDetail', params: { id: product.id } }" class="btn btn-primary">
                  Ver Detalles
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'HomePage',
    data() {
      return {
        products: [],
        loading: true
      };
    },
    methods: {
      async fetchProducts() {
        try {
          const response = await axios.get('https://fakestoreapi.com/products');
          this.products = response.data;
        } catch (error) {
          console.error(error);
        } finally {
          this.loading = false;
        }
      },
      truncateDescription(description) {
        return description.length > 100 ? description.substring(0, 100) + '...' : description;
      }
    },
    mounted() {
      this.fetchProducts();
    }
  };
  </script>
  
  <style scoped>
  .card {
    transition: transform 0.2s;
  }
  .card:hover {
    transform: scale(1.05);
  }
  </style>
  