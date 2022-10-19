<template>
  <div>
    <div v-for="category in categories">
      <button type="button" class="btn btn-success"
              v-on:click="findProductsByCategoryId(category.categoryId)">{{ category.name }}
      </button>
    </div>
  </div>

</template>

<script>
export default {
  name: "ButtonsCategory",
  data: function () {
    return {
      categories: [
        {
          categoryId: 0,
          name: ''
        }
      ],
      productInfos: {}
    }
  },
  methods: {
    getCategories: function () {
      this.$http.get('/dropdown/category')
          .then(response => {
            this.categories = response.data
          }).catch(error => {
        console.log(error)
      })
    },
    findProductsByCategoryId: function (categoryId) {
      this.$http.get('/product/category', {
            params: {
              categoryId: categoryId
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
.btn {
  width: 115px;
  padding: 10px;
  margin: 5px;
  font-size: 14px;
  color: #ffffff;
  background-color: #A1BF37;
  border: none;
  outline: none;
  border-radius: 40px;
  cursor: pointer;
}

.btn:hover {
  background-color: yellowgreen;
}
</style>