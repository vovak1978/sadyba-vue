<template>
<div class="display">
    <div id="carouselExampleCaptions" class="carousel slide img" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="./../assets/IMG_20200711_103427.jpg" class="d-block w-100" >
          <div class="carousel-caption d-none d-md-block">
            <h5>Вигляд збоку</h5>
            </div>
        </div>
        <div class="carousel-item" v-for="(elements,i) in fotoarray" :key="i">
          <img :src='elements.url' class="d-block w-100" >
          <div class="carousel-caption d-none d-md-block">
            <h5>{{elements.name}}</h5>

          </div>
        </div>

      </div>
      <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
</div>
</template>

<script>


export default {
  name: 'Foto',

  data(){
    return {
    fotoarray: [

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

