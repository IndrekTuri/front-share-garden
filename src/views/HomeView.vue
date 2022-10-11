<template>
  <div>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <LoginModal/>
    <SignUpModal/>
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>WELCOME TO HOME PAGE</h1>
    <h1>Homepage vaade</h1>
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
