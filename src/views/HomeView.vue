<template>
  <div>
    <div class="container">
      <img alt="veggies" src="../assets/veggies_banner.png">

      <div class="row">
        <ButtonsCategory @eventProductsByCategoryIdSuccess="updateCategories" class="category-btn"/>
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

export default {
  name: 'HomeView',
  components: {ButtonsCategory, LoginModal, SignUpModal},
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
    updateCategories: function (productInfos) {
      this.productInfos = productInfos
    }
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
  display: flex;


}
</style>

