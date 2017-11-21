<template>
  <div>
    <div class="container">
      <div class="tabs is-right">
        <ul>
          <li v-bind:class="{ 'is-active': $route.name === 'Products' }"><router-link to="/admin">View Products</router-link></li>
          <li v-bind:class="{ 'is-active': $route.name === 'New' }"><router-link to="/admin/new">New Products</router-link></li>
        </ul>
      </div>
    </div>
    <router-view></router-view>
  </div>

</template>

<script>
  export default {
    name: 'admin',
    data() {
      return {
        msg: 'Welcome to Your Admin Page',
      };
    },
    methods: {
    },
  };
</script>
