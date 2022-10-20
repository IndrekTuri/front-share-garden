<template>
  <div>
<!--    <AlertError :errorMessage="alertError"/>-->
    <div v-for="category in categories">
      <button type="button" class="btn-category"
              v-on:click="findProductsByCategoryId(category.categoryId)">{{ category.name }}
      </button>
    </div>
  </div>

</template>

<script>
import AlertError from "@/components/Alerts/AlertError";

export default {
  name: "ButtonsCategory",
  components:{AlertError},

  data: function () {
    return {
      alertError: '',
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
      this.alertError = ''
      this.$http.get('/product/category', {
            params: {
              categoryId: categoryId
            }
          }
      ).then(response => {
        this.productInfos = response.data
        this.$emit('eventProductsByCategoryIdSuccess', this.productInfos)
      }).catch(error => {
        this.alertError = error.response.data.detail
      })
    }


  },
  mounted() {
    this.getCategories()
  }
}
</script>

<style scoped>
.btn-category {
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

.btn-category:hover {
  background-color: yellowgreen;
}
</style>