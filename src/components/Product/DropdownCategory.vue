<template>

  <div class="dropdown">
    <select class="form-select" v-model="selectedCategoryId" v-on:change="findProductsByCategoryId"
            aria-label="Categories">
      <option disabled value="">--Kategooriad--</option>
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

img {
  width: 100%;
  margin-top: 115px;
  border-radius: 20px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
  0 5px 5px rgba(0, 0, 0, 0.22);
  outline-style: dotted;
  outline-color: #A1BF37;
}

.dropdown {
  width: 15%;
  margin: auto;
  padding: 10px;
  outline-style: dotted;
  outline-color: #7f7d7d;

}

input {
  width: 100%;
  padding: 20px;
  border: none;
  outline: none;
  font-size: 14px;
  margin-top: 10px;
  background-color: #eee;
  border-radius: 40px;
}

input:focus {
  box-shadow: 0 0 0 0.2rem rgba(161, 191, 55, 0.40);
}

input::placeholder {
  color: #7f7d7d;
}


</style>