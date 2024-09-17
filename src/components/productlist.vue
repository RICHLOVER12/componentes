<template>
    <div>
      <h1>Product List</h1>
      <div v-if="loading">Loading...</div>
      <div v-if="error">{{ error }}</div>
      <div v-if="products.length">
        <div v-for="product in products" :key="product.id" class="product-item">
          <router-link :to="'/product/' + product.id">
            <h3>{{ product.title }}</h3>
          </router-link>
          <img :src="product.image" alt="product image" width="100" />
          <p>{{ product.price }} $</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        products: [],
        loading: true,
        error: null,
      };
    },
    created() {
      fetch('https://fakestoreapi.com/products')
        .then((res) => res.json())
        .then((data) => {
          this.products = data;
          this.loading = false;
        })
        .catch((err) => {
          this.error = 'Failed to load products';
          this.loading = false;
        });
    },
  };
  </script>
  
  <style scoped>
  .product-item {
    margin-bottom: 20px;
  }
  </style>
  