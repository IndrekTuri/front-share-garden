<template>

  <div class="into-garden">

    <div class="container">
      <img alt="share" src="../assets/share_banner.jpg">

      <div class="row">
        <!-- Dropdown for categories-->
        <DropdownCategory @eventProductsByCategoryIdSuccess="updateCategories" />
<!--      All products button-->
        <div class="col-1">
          <button class="btn-find-all" v-on:click="findAllProducts">Kõik tooted</button>
        </div>

        <!-- Search box for products-->
        <div class="input-group">
          <input type="search" class="form-control" placeholder="Otsi tooteid" v-model="keyword">
          <div class="input-group-append">
            <button class="search-button" type="button" v-on:click="findProductsByKeyword">Otsi</button>
          </div>
        </div>

        <!-- Dropdown for regions-->
        <DropdownRegion @eventProductByRegionIdSuccess="updateRegions"/>

      </div>

      <AlertError :errorMessage="alertError"/>

      <div class="row">


        <div class="col">
          <div class="all-products">
            <ProductGallery :product-infos="productInfos"/>
          </div>
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

export default {
  name: 'IntoGardenView',
  components: {DropdownRegion, DropdownCategory, SignUpModal, LoginModal, ProductGallery, AlertError},
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
    }
  },

  mounted() {
    this.findAllProducts()
  }
}


</script>

<style scoped>

.container {
  outline-style: dotted;
  outline-color: red;
}

img {
  width: 100%;
  margin-top: 115px;
  border-radius: 20px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
  0 5px 5px rgba(0, 0, 0, 0.22);
  outline-style: dotted;
  outline-color: #A1BF37;
}

.row {
  margin-top: 25px;
  outline-style: dotted;
  outline-color: blue;

}

.col-1 {
  margin: 10px;
  width: auto;
  justify-content: center;
  outline-style: dotted;

}

.col {
  margin-top: 15px;
  width: auto;
  flex-direction: column;
  outline-style: dotted;
  outline-color: chocolate;
}

.btn-find-all {
  width: 115%;
  padding: 10px;
  margin: 5px;
  font-size: 14px;
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

.input-group {
  width: 65%;
  margin: auto;
  padding: 10px;
  outline-style: dotted;
  outline-color: violet;
}

input {
  width: 100%;
  padding: 20px;
  border: none;
  outline: none;
  font-size: 14px;
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
  font-size: 18px;
  color: white;
  width: 100px;
  padding: 5px;
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


</style>