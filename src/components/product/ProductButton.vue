<template>
    <div>
        <button class="button" v-if="isAdding" @click="addToCart">Add to Cart</button>
        <button v-else class="button" @click="removeFromCart(product.id)">Remove from Cart</button>
    </div>
</template>

<script>
  import {
    ADD_TO_CART,
    REMOVE_FROM_CART
  } from '../../store/mutation-types'

  export default {
    props: ['product'],
    data() {
      return {
        cart: this.$store.state.cart
      },
    },
    computed: {
      isAdding() {
        return this.cart.indexOf(this.product) < 0
      },
    },
    methods: {
      addToCart () {
        this.$store.commit(ADD_TO_CART, this.product);
      },
      removeFromCart (id) {
        this.$store.comti(REMOVE_FROM_CART, id);
      },
    },
  }
</script>
