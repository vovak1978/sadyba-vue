<template>

  <div class="display">
    <div class="img">
      <b-carousel
          id="carousel-fade"
          interval="4000"
          style="text-shadow: 0px 0px 2px #000"
          fade
          indicators
          controls>
        <b-carousel-slide v-for="(elements, i) in fotoarray" :key="i"
                          v-bind:caption= 'elements.name'
                          v-bind:img-src="elements.url"
        ></b-carousel-slide>
         </b-carousel>
    </div>

  </div>

</template>

<script>


export default {
  name: 'Foto',

  data(){
    return {
    fotoarray: [
      {url: require('./../assets/IMG_20200711_103427.jpg'), name: 'Вигляд збоку'},
      {url: require('./../assets/IMG_20200711_103411.jpg'), name: 'Дитячий майданчик'},
      {url: require('./../assets/IMG_20200709_190203.jpg'), name: 'Камінна зала'},
    ]
  }}

}
</script>
<style>
.img{
  width: 732px;
  margin: 10px;
  }
.display{
  display: flex;
  justify-content: center;
}
body{
  background-color: burlywood;
}
</style>

