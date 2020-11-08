<template>
  <div class="backgrond">
    <Header/>
<router-view></router-view>

  </div>
</template>

<script>


import Header from "@/components/Header";



export default {
  name: 'App',
  components: {
    Header
  },
  created() {
    this.$store.dispatch('getProducts')
    this.$store.dispatch('getDishes')
  },


}
</script>

<style>
.backgrond{
  min-height: 100vh;
  background-color: chocolate;

}

</style>
