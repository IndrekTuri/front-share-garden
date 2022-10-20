<template>

  <div class="home">
    <div class="container">
      <img alt="veggies" src="../assets/veggies_banner.png">

      <div class="row">
        <ButtonsCategory @eventProductsByCategoryIdSuccess="updateCategories" class="category-btn"/>
      </div>

      <div class="row">
        <div class="last-five">
          <p>Hiljuti lisatud tooted:</p>
          <ProductGallery :product-infos="productInfos"/>
        </div>
      </div>
    </div>
    <LoginModal/>
    <SignUpModal/>
  </div>

</template>

<script>

import LoginModal from "@/components/LoginModal";
import SignUpModal from "@/components/SignUpModal";
import ButtonsCategory from "@/components/Product/ButtonsCategory";
import ProductGallery from "@/components/Product/ProductGallery";


export default {
  name: 'HomeView',
  components: {ButtonsCategory, LoginModal, SignUpModal,ProductGallery},

  data: function () {
    return {
      productInfos:
          [
            {
              productId: 0,
              sellerUserId: 0,
              regionName: '',
              categoryId: 0,
              measureUnit: '',
              productName: '',
              quantity: 0,
              imageBase64: '',
            }]
    }
  },
  methods: {
    findRecentProducts: function () {
      this.$http.get("/product/recent")
          .then(response => {
            this.productInfos = response.data
          }).catch(error => {
        console.log(error)
      })
    },

    updateCategories: function (productInfos) {
      this.productInfos = productInfos
    }
  },
  mounted() {
    this.findRecentProducts()
  }
}
</script>

<style scoped>

img {
  width: 100%;
  margin-top: 115px;
  border-radius: 20px;
  box-shadow: 1px 14px 80px rgba(34, 35, 58, 0.15);
}

.row .category-btn {
  margin-top: 15px;
  justify-content: center;
  display: flex;
}

p{
  font-size: 20px;
  margin: 10px 25px 5px;
  float: left;
}
</style>

