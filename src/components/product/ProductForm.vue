<template>
    <form @submit.prevent="saveProduct">
      <div class="container">
        <div class="field">
          <label class="label">Name</label>
          <div class="control">
            <input class="input" type="text" placeholder="Name" v-model="model.name" v-validate="'required'" name="name"/>
            <Span class="tag is-light" v-show="errors.has('name')">{{errors.first('name')}}</span>
          </div>
        </div>

        <div class="field">
          <label class="label">Price</label>
          <div class="control">
            <input class="input" type="number" placeholder="Price" v-model="model.price" v-validate="'required'" name="price"/>
            <Span class="tag is-light" v-show="errors.has('price')">{{errors.first('price')}}</span>
          </div>
        </div>

        <div class="field">
          <label class="label">Manufacturer</label>
          <div class="control">
            <div class="select">
                <select>
                  <template v-for="manufacturer in manufacturers">
                    <option :value="manufacturer._id" :selected="manufacturer._id == (model.manufacturer && model.manufacturer._id)">{{manufacturer.name}}</option>
                  </template>
                </select>
            </div>
          </div>
        </div>

        <div class="field">
          <label class="label">Image</label>
          <div class="control">
            <input class="input" type="url" placeholder="Image" v-model="model.image" v-validate="'required|url'" name="image"/>
            <Span class="tag is-light" v-show="errors.has('image')">{{errors.first('image')}}</span>
          </div>
        </div>

        <div class="field">
          <label class="label">Description</label>
          <div class="control">
            <input class="input" type="text" placeholder="Description" v-model="model.description" v-validate="'required'" name="description"/>
            <Span class="tag is-light" v-show="errors.has('description')">{{errors.first('description')}}</span>
          </div>
        </div>

        <div class="control">
          <button v-if="isEditing" class="button is-primary" type="submit">Update Product</button>
          <button v-else class="button is-primary" type="submit">Add Product</button>
        </div>
      </div>
    </form>

</template>

<script>
  export default {
    props: ['model', 'manufacturers', 'isEditing'],
    methods: {
      saveProduct() {
        this.$emit('save-product', this.model);
      },
    },
  };
</script>
