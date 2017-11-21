<template>
  <div>
    <div class="card">
      <div class="card-image">
        <figure class="image is-128x128">
            <img :src="product.image" :alt="product.name">
        </figure>
      </div>
      <div class="card-content">
          <div class="media">
              <div class="media-content">
                  <p class="title is-4">{{product.name}}</p>
              </div>
          </div>
      </div>
      <div class="card-content">
          {{product.description}}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'product-item',
    props: ['product'],
  };
</script>
