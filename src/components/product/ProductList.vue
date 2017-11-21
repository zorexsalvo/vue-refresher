<template>
    <div>
        <div class="columns">
        <template v-for="product in products">
            <div class="column is-one-third">
                <product-item :product="product"></product-item>
            </div>
        </template>
        </div>
    </div>
</template>

<script>
  import ProductItem from './ProductItem';

  export default {
    name: 'product-list',
    created() {
      if (this.products.length === 0) {
        this.$store.dispatch('allProducts');
      }
    },
    computed: {
      products() {
        // eslint-disable-next-line
        console.log(this.$store.getters);
        return this.$store.getters.allProducts;
      },
    },
    components: {
      'product-item': ProductItem,
    },
  };
</script>
