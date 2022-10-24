<template>

  <div class="into-garden">

    <div class="container">
        <!--Alternative solution with banner-->
        <!--<img alt="share" src="../assets/share_banner.jpg">-->

      <div class="row-1">
        <!-- Dropdown for categories-->
        <DropdownCategory @eventProductsByCategoryIdSuccess="updateCategories"/>
        <!-- Dropdown for regions-->
        <DropdownRegion @eventProductByRegionIdSuccess="updateRegions"/>
        <!-- All products button-->
        <ButtonAllProducts :find-all-products="findAllProducts" onClick="document.location.reload()"/>
      </div>

      <div class="row-2">
        <div class="input-group">
          <input type="search" class="form-control" placeholder="Otsi tooteid" v-model="keyword">
          <div class="input-group-append">
            <button class="search-button" type="button" v-on:click="findProductsByKeyword">Otsi</button>
          </div>
        </div>
      </div>

      <div class="row-3">
        <!--Alert message has to pop up. Will fix all alerts in alert message task-->
        <AlertError :errorMessage="alertError"/>
        <div class="all-products">
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
import ProductGallery from "@/components/Product/ProductGallery";
import AlertError from "@/components/Alerts/AlertError";
import DropdownCategory from "@/components/Product/DropdownCategory";
import DropdownRegion from "@/components/Product/DropdownRegion";
import ButtonAllProducts from "@/components/Product/ButtonAllProducts";
import FieldSearch from "@/components/Product/FieldSearch";

export default {
  name: 'IntoGardenView',
  components: {
    FieldSearch,
    ButtonAllProducts, DropdownRegion, DropdownCategory, SignUpModal, LoginModal, ProductGallery, AlertError
  },
  props: {},

  data: function () {
    return {
      alertError: '',
      keyword: '',
      productInfos:
          [
            {
              productId: 0,
              sellerUserId: 0,
              regionName: '',
              categoryId: 0,
              measureUnit: '',
              productName: '',
              quantity: 0,
              imageBase64: '',
            }]
    }
  },
  methods: {
    findProductsByKeyword: function () {
      this.alertError = ''
      this.$http.get("/product/keyword", {
            params: {
              keyword: this.keyword
            }
          }
      ).then(response => {
        this.productInfos = response.data
      }).catch(error => {
        this.alertError = error.response.data.detail
      })
    },
    findAllProducts: function () {
      this.$http.get("/product/all")
          .then(response => {
            this.productInfos = response.data
          }).catch(error => {
        console.log(error)
      })
    },
    updateCategories: function (productInfos) {
      this.productInfos = productInfos
    },
    updateRegions: function (productInfos) {
      this.productInfos = productInfos
    },
    updateKeywords: function (productInfos) {
      this.productInfos = productInfos;
    },
  },

  mounted() {
    this.findAllProducts()
  }
}

</script>

<style scoped>

img {
  width: 100%;
  margin-top: 115px;
  border-radius: 20px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
  0 5px 5px rgba(0, 0, 0, 0.22);
}

.row-1 {
  margin-top: 115px;
  justify-content: center;
  align-content: center;
  display: flex;
}

.row-2 {
  justify-content: center;
  align-content: center;
  display: flex;
}
.input-group {
  width: 55%;
  padding: 10px;
}

input {
  width: 100%;
  padding: 22px;
  border: none;
  outline: none;
  font-size: 16px;
  background-color: #eee;
  border-radius: 40px;
}

input:focus {
  box-shadow: 0 0 0 0.2rem rgba(161, 191, 55, 0.40);
}

input::placeholder {
  color: #7f7d7d;
}

.search-button {
  text-align: center;
  font-size: 16px;
  color: white;
  width: 100px;
  padding: 10px;
  border: 0;
  outline: none;
  cursor: pointer;
  border-bottom-right-radius: 40px;
  border-top-right-radius: 40px;
}

.search-button {
  background: #A1BF37;
}

.search-button:hover {
  background-color: yellowgreen;
}

.row-3 {
  width: auto;
  flex-direction: column;
}

</style>