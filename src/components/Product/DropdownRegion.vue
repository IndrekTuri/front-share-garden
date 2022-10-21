<template>

  <div class="dropdown">
    <select class="form-select" v-model="selectedRegionId" v-on:change="findProductsByRegionId"
            aria-label="categories">
      <option disabled value="">Maakonnad</option>
      <option v-for="region in regions" :value="region.regionId">{{ region.name }}</option>
    </select>
  </div>

</template>

<script>
export default {
  name: 'DropdownRegion',

  data: function () {
    return {
      regions: [
        {
          regionId: 0,
          name: ''
        }
      ],
      selectedRegionId: '',
      productInfos: {}
    }
  },
  methods: {
    getRegions: function () {
      this.$http.get("/dropdown/region")
          .then(response => {
            this.regions = response.data
          }).catch(error => {
        console.log(error)
      })
    },
    findProductsByRegionId: function () {
      this.$http.get("/product/region", {
            params: {
              regionId: this.selectedRegionId
            }
          }
      ).then(response => {
        this.productInfos = response.data
        this.$emit('eventProductByRegionIdSuccess', this.productInfos)
      }).catch(error => {
        console.log(error)
      })
    }
  },
  mounted() {
    this.getRegions()
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
  outline-style: dotted;
  outline-color: #A1BF37;
}

.dropdown {

  width: 15%;
  margin: auto;
  padding: 10px;
  outline-style: dotted;
  outline-color: #7f7d7d;

}
select {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  color: white;
  background-color: #A1BF37;
  border: none;
  outline: none;
  border-radius: 40px;
  cursor: pointer;



}
option {
  background-color: white;
  color: #7f7d7d;
  border: none;
  outline: none;
  border-radius: 40px;

}
option:hover {
  background-color: #A1BF37;
}

input {
  width: 100%;
  padding: 20px;
  border: none;
  outline: none;
  font-size: 14px;
  margin-top: 10px;
  background-color: #eee;
  border-radius: 40px;
}

input:focus {
  box-shadow: 0 0 0 0.2rem rgba(161, 191, 55, 0.40);
}

input::placeholder {
  color: #7f7d7d;
}


</style>