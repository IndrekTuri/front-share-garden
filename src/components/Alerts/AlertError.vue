<template>
  <div class="container">
    <div v-if="errorMessage.length > 0" class="alert alert-danger" role="alert">
      {{ errorMessage }}
    </div>

  </div>
</template>

<script>
export default {
  name: "AlertError",
  props: {
    errorMessage: ''
  }
}
</script>

<style scoped>

.alert {
  font-size: 14px;
  color: red;
  background: none;
  border: none;
  padding: 0 0 0 0;
  margin-bottom: -15px;
  transition: .3s;
  animation: buttons .3s linear;
}

@keyframes buttons {
  0% {
    transform: scale(0, 1);
  }
  50% {
    transform: scale(0, 5);
  }
  100% {
    transform: scale(1);
  }
}


</style>