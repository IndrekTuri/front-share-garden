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
  components: {ButtonsCategory, LoginModal, SignUpModal, ProductGallery},

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
/*.container {*/
/*  outline-style: dotted;*/
/*  outline-color: red;*/
/*}*/

img {
  width: 100%;
  margin-top: 115px;
  border-radius: 20px;
  box-shadow: 0px 14px 28px rgba(0, 0, 0, 0.25),
  0 5px 5px rgba(0, 0, 0, 0.22);
  /*outline-style: dotted;*/
  /*outline-color: blue;*/
}

.row .category-btn {
  margin-top: 25px;
  justify-content: center;
  align-content: center;
  display: flex;
  /*outline-style: dotted;*/
  /*outline-color: green;*/
}

p {
  font-size: 20px;
  margin: 10px 50px 5px;
  float: left;
  /*outline-style: dotted;*/
  /*outline-color: darkviolet;*/
}
</style>

