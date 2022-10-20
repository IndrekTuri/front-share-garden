<template>

  <div class="into-garden">
    <div class="container">
      <img alt="share" src="../assets/share_banner.jpg">

      <div class="row">
        <ButtonsCategory/>
      </div>

      <div class="row">
        <div class="last-five">
          <p>Hiljuti lisatud tooted:</p>
          <ProductGallery :product-infos="productInfos"/>
        </div>
      </div>
    </div>

    <SignUpModal/>
    <LoginModal/>
  </div>

</template>

<script>


import SignUpModal from "@/components/SignUpModal";
import LoginModal from "@/components/LoginModal";
import ButtonsCategory from "@/components/Product/ButtonsCategory";

export default {
  name: 'IntoGardenView',
  components: {ButtonsCategory, SignUpModal, LoginModal},
  props: {}
}
</script>

<style scoped>
.into-garden img {
  width: 100%;
  margin-top: 115px;
  border-radius: 20px;
  box-shadow: 1px 14px 80px rgba(34, 35, 58, 0.15);
}

</style>