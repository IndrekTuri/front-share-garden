<template>
  <tbody>
  <tr v-for="product in productInfos" :key="product.productId">
    <td>
    <img v-if="product.imageBase64 == null" src="https://static.thenounproject.com/png/1875006-200.png" width="100" height="100">

    </td>

    <td>{{ product.productName }}</td>
    <td>{{ product.quantity }}</td>
    <td>{{ product.measureUnit }}</td>
    <td>{{ product.regionName}}</td>

    <td>
      <button type="button" class="btn btn-outline-dark"> Add to basket</button>

    </td>

  </tr>


  </tbody>
</template>

<script>
export default {
  name: "ProductTableBody",
  props: {
    productInfos: {}
  }
}
</script>

<style scoped>

</style>