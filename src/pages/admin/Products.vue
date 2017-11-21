<template>
  <div>
    <section class="section">
      <div class="container">
        <h1 class="title">Product List</h1>
        <product-list></product-list>
      </div>
    </section>
  </div>
</template>

<script>
  import ProductList from '@/components/product/ProductList';

  export default {
    name: 'products',
    components: {
      'product-list': ProductList,
    },
  };
</script>
