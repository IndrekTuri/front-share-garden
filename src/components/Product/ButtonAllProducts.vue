<template>
  <div class="all-products">
    <!-- All products button-->
    <button class="btn-find-all" v-on:click="findAllProducts">Kõik tooted</button>
  </div>
</template>

<script>
export default {
  name: 'ButtonAllProducts',
  props: {
    findAllProducts: {}
  }
}
</script>

<style scoped>

.all-products {
  width: 17%;
  padding: 10px;

}
.btn-find-all {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  color: #ffffff;
  background-color: #A1BF37;
  border: none;
  outline: none;
  border-radius: 40px;
  cursor: pointer;
}

.btn-find-all:hover {
  background-color: yellowgreen;
}

</style>