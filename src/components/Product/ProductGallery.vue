<template>
  <div class="gallery">
    <div class="content" v-for="product in productInfos" :key="product.productId">

      <img alt="" v-if="product.imageBase64 == null" src="https://static.thenounproject.com/png/1875006-200.png">
      <h3>{{ product.productName }}</h3>
      <p> {{ product.quantity }} {{ product.measureUnit }}</p>
      <h6>{{ product.regionName }}</h6>
      <button type="button" class="add-basket"> Lisa korvi</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductGallery",
  props: {
    productInfos: {}
  }
}
</script>

<style scoped>

h3 {
  text-align: center;
  font-size: 20px;
  margin: 0;
  padding-top: 10px;
}

a {
  text-decoration: none;
}

.gallery {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  align-items: center;

}

.content {
  width: 17%;
  margin: 15px;
  box-sizing: border-box;
  float: left;
  text-align: center;
  border-radius: 20px;
  cursor: pointer;
  padding-top: 20px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
  0 10px 10px rgba(0, 0, 0, 0.22);
  transition: .4s;
  background: white;

}

.content:hover {
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16),
  0 3px 6px rgba(0, 0, 0, 0.23);
  transform: translate(0px, -8px);
}

img {
  width: 100px;
  height: 100px;
  text-align: center;
  margin: 0 auto;
  display: block;

}

p {
  text-align: center;
  color: #b2bec3;
  padding-top: 8px;
}

h6 {
  font-size: 18px;
  text-align: center;
  color: #222f3e;
  margin: 0;
}

button {
  text-align: center;
  font-size: 18px;
  color: white;
  width: 100%;
  padding: 10px;
  border: 0;
  outline: none;
  cursor: pointer;
  margin-top: 10px;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
}

.add-basket{
  background: chocolate;
}

@media(max-width: 1000px){
  .content {
    width: 45%;
  }
}
@media(max-width: 750px){
  .content {
    width: 100%;
  }
}

</style>