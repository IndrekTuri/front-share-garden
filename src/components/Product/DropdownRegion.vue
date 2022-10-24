<template>

  <div class="dropdown">
    <select class="form-select" v-model="selectedRegionId" v-on:change="findProductsByRegionId">
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

.dropdown {
  width: 19%;
  padding: 10px;;
}

select {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  color: #7f7d7d;
  background-color: #eeeeee;
  border: none;
  outline: none;
  border-radius: 40px;
  cursor: pointer;
}

select:focus {
  box-shadow: 0 0 0 0.2rem rgba(161, 191, 55, 0.40);

}

option {
  background-color: white;
  color: #7f7d7d;
  border: none;
  outline: none;
  border-radius: 40px;
}

</style>