<template>
  <div>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <SignUpModal/>
    <LoginModal/>
      <h1>This is an about page</h1>
  </div>

</template>

<script>


import SignUpModal from "@/components/SignUpModal";
import LoginModal from "@/components/LoginModal";
export default {
  name: 'IntoGardenView',
  components: {SignUpModal, LoginModal},
}
</script>