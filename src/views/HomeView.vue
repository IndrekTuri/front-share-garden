<template>
  <div>
    <div class="container">
      <img alt="veggies" src="../assets/veggies_banner.png">
    </div>

    <LoginModal/>
    <SignUpModal/>
  </div>
</template>

<script>

import LoginModal from "@/components/LoginModal";
import SignUpModal from "@/components/SignUpModal";

export default {
  name: 'HomeView',
  components: {LoginModal, SignUpModal},
}
</script>

<style scoped>

img {
  width: 100%;
  margin-top: 125px;
  border-radius: 20px;
  box-shadow: 1px 14px 80px rgba(34, 35, 58, 0.15);
}
</style>

