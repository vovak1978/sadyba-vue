<template>
    <div>
      <GmapMap
          :center="center"
          :zoom="11"
           style="width: auto; height: 470px">
        <GmapInfoWindow
        :options ='infoOptions'
        :position="infoWindowPos"
        :opened="infoWinOpen">
          <div v-html="infoContent"></div>
          </GmapInfoWindow>
        <GmapMarker v-for="(element, i) in markers" :key="i"
            :position="element.position"
            :label = 'element.label'
            @mouseover="showInfo(element)"
            @mouseout="infoWinOpen=false"
        />
      </GmapMap>
      <footer>
      <div>
        <table width="100%">
          <tr class="columns">
            <th>Адреса</th>
            <th>Телефон</th>
            <th>Фото</th>
          </tr>
          <tr>
            <th>
              <div>c.Орів вул. Шевченка 111 <br>
              GPS координати: 49.177898 23.556527</div>
            </th>
            <th>+380503375818 - Володимир</th>
            <th><img src="./../assets/portfolio.jpg" class="image"></th>
          </tr>
        </table>
      </div>
      </footer>

         </div>

</template>

<script>
 export default {
   name: 'Contact',
   data() {
     return {
       infoOptions: {
         pixelOffset: {
           width: 0,
           height: -35
         }
       },
       infoWindowPos: null,
       infoWinOpen: false,
       infoContent: '',
       center: {
         lat: 49.14,
         lng: 23.559
       },
       markers: [
         {
           position: {
             lat: 49.178,
             lng: 23.557
           },
           label: "A",
           infoText: 'Садиба Затишок',
           url: require('./../assets/IMG_20200817_094411_280.jpg')
         },
         {
           position: {
             lat: 49.191,
             lng: 23.407
           },
           label: "B",
           infoText: 'Фортеця Тустань',
           url: require('./../assets/tustan.jpg')
         },
         {
           position: {
             lat: 49.085,
             lng: 23.473
           },
           label: "C",
           infoText: 'Водоспад Гуркало',
           url: require('./../assets/gurkalo.jpg')
         }]
     }
   },
   methods: {
     showInfo: function (element) {
       this.infoWindowPos = element.position;
       this.infoWinOpen = true;
       this.infoContent = this.getInfo(element);
     },

     getInfo: function (element) {
       return (
           `<div class="sizeWindow" >
        <div>
        <img src="${element.url}" style="width: 240px; height: auto">
        </div>
        <div>
        <p class="fontInfo">${element.infoText}</p>
</div>
</div>`
       )
     }
   }
 }

</script>

<style scoped>
.sizeWindow {
  height: 200px;
  width: 300px;
}
.fontInfo {
  font-size: large;
  font-family: Arial;
  }
.columns {
  background-color: lightgrey;
  color: chocolate;
  font-size: x-large;
  width: 33%;
}
.image {
  height: 70px;
  width: auto;
}

</style>