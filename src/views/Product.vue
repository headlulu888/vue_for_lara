<template>
  <div class="about">
    <h1>This is an product page</h1>

    <table>
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Description</th>
      </tr>
      <tr v-for="product in products">
        <th>{{product.id}}</th>
        <th>{{product.name}}</th>
        <th>{{product.desc}}</th>
      </tr>
    </table>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: 'Product',
    data: () => {
      return {
        products: []
      }
    },
    mounted() {
      console.log('Product is mounted');

      axios.get('http://127.0.0.1:8000/api/products?per_page=10').then(response => {
        this.products = response.data.data
      });
    }
  }
</script>

<style>
  table {
    width: 100%;
  }
  th {
    border: 1px solid black;
  }
</style>