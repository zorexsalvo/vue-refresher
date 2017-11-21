<template>
  <div>
    <section class="section">
      <div class="container">
        <h1 class="title">This is Admin/New</h1>
      </div>
    </section>

    <product-form @save-product="addProduct" :model="model" :manufacturers="manufacturers"></product-form>

  </div>
</template>

<script>
  import ProductForm from '@/components/product/ProductForm';

  export default {
    name: 'new',
    data() {
      return {
        model: {},
        manufacturers: [
          {
            _id: 'sam',
            name: 'Samsung',
          },
          {
            _id: 'apple',
            name: 'Apple',
          },
        ],
      };
    },
    methods: {
      addProduct(model) {
        /* eslint-disable no-console */
        console.log('model', model);
        /* eslint-enable no-console */
      },
    },
    components: {
      'product-form': ProductForm,
    },
  };
</script>
