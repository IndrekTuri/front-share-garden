<template>

  <div class="dropdown">
    <select class="form-select" v-model="selectedCategoryId" v-on:change="findProductsByCategoryId"
            aria-label="Categories">
      <option disabled value="" class="title">Kategooriad</option>
      <option v-for="category in categories" :value="category.categoryId">{{ category.name }}</option>
    </select>
  </div>

</template>
<script>
export default {
  name: 'DropdownCategory',

  data: function () {
    return {
      categories: [
        {
          categoryId: 0,
          name: ''
        }
      ],
      selectedCategoryId: '',
      productInfos: {}
    }
  },
  methods: {
    getCategories: function () {
      this.$http.get("/dropdown/category")
          .then(response => {
            this.categories = response.data
          }).catch(error => {
        console.log(error)
      })
    },
    findProductsByCategoryId: function () {
      this.$http.get("/product/category", {
            params: {
              categoryId: this.selectedCategoryId
            }
          }
      ).then(response => {
        this.productInfos = response.data
        this.$emit('eventProductsByCategoryIdSuccess', this.productInfos)
      }).catch(error => {
        console.log(error)
      })
    }
  },
  mounted() {
    this.getCategories()
  }
}


</script>
<style scoped>

.dropdown {
  width: 19%;

  padding: 10px;

}

select {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  color: #7f7d7d;
  background-color: #eeeeee;
  border: none;
  outline: none;
  border-radius: 40px;
  cursor: pointer;
}

select:focus {
  box-shadow: 0 0 0 0.2rem rgba(161, 191, 55, 0.40);

}

option {
  background-color: white;
  color: #7f7d7d;
  border: none;
  outline: none;
  border-radius: 40px;
}

</style>