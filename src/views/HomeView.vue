<template>
  <div class="home">
    <div class="container">
      <img alt="veggies" src="../assets/veggies_banner.png">

      <div class="row">
        <ButtonsCategory @eventProductsByCategoryIdSuccess="updateCategories" class="category-btn"/>
      </div>

      <div class="row">
        <div class="last-five">
          Siia tuleb viis viimast toodet

<!--          <ProductTableBody :product-infos="productInfos"/>-->
          <ProductTableTest :product-infos="productInfos"/>
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
// import ProductTableBody from "@/components/Product/ProductTableBody";
import ProductTableTest from "@/components/Product/ProductTableTest";

export default {
  name: 'HomeView',
  components: {ProductTableTest, ButtonsCategory, LoginModal, SignUpModal},

  data: function () {
    return {
      ProductInfos:
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
  margin-top: 25px;
  justify-content: center;
  height: auto;
  width: 100%;
  display: flex;
  /*outline-style: dotted;*/
}

.row .last-five {
  margin-top: 25px;
  height: auto;
  outline-style: dotted;
  outline-color: red;
}

.last-five {
  outline-style: dotted;
  outline-color: #167bff;
  display: table-cell;
}
</style>

