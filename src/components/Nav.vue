<template>
  <div>
<!--    <LoginModal/>-->
<!--    <SignUpModal/>-->
    <nav class="navbar navbar-expand navbar-light fixed-top">
      <div class="container">
        <router-link to="/" alt="Jaga" ><img alt="" src="../assets/Jaga_Oma_Aeda_logo.jpg"/></router-link>
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <router-link to="/" class="nav-link">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/intoGarden" class="nav-link">Into Garden</router-link>
            </li>
            <li class="nav-item">
              <a type="button" class="nav-link" data-bs-toggle="modal" data-bs-target="#loginModal">Login</a>
            </li>
            <li class="nav-item">
              <a type="button" class="nav-link" data-bs-toggle="modal" data-bs-target="#signupModal">Sign Up</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import LoginModal from "@/components/LoginModal";
import SignUpModal from "@/components/SignUpModal";
export default {
  name: "Nav.vue",
  components: {SignUpModal, LoginModal}
}
</script>

<style scoped>

.navbar-light {
  background-color: #ffffff;
  box-shadow: 0px 14px 28px rgba(0, 0, 0, 0.25),
  0 5px 5px rgba(0, 0, 0, 0.22);
}

img {
  width: 200px;
  height: 68px;
  float: left;
  margin-left: 20px;
}

</style>