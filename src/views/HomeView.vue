<template>
  <div>
    <div>
      <div class="container">
        <img alt="" scr="">
      </div>

        <img alt="Vue logo" src="../assets/logo.png">
        <h1>WELCOME TO HOME PAGE</h1>
        <h1>Homepage vaade</h1>

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
  margin-top: 300px;
  outline-style: dotted;
  height: 300px;
}
</style>
