<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
            {{msg}}
        </h1>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'cart',
    data() {
      return {
        msg: 'Welcome to Your Cart Page',
      };
    },
  };
</script>
