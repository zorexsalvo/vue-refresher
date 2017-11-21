<template>
  <div id="app">
    <div class="container">
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <router-link class="navbar-item" to="/">Home</router-link>
          <router-link class="navbar-item" to="/admin">Admin</router-link>
          <router-link class="navbar-item" to="/cart">Cart</router-link>
        </div>
      </nav>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style lang="css">
  @import "../node_modules/bulma/css/bulma.css";
</style>
