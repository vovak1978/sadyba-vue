<template>
<div>
  <div>
    <h2 class="h2"> Для замовлення харчування натисніть кнопку</h2>

      <router-link to="/check">
        <button type="button" class="btn btn-primary btn-lg btn-block">Вибір меню</button>
      </router-link>
  </div>
  <div class="container">
    <div v-for="(element, i) in menu" :key='i'>
      <div > <h1>{{element.name}}</h1> <br>
      <p>{{element.description}}</p>
      <button @click="showingridients(element.name)" >Показати інгридієнти</button>
        <ul>
          <li v-for="(element, index) in ingridient" :key="index"> {{element.ingridientname}}</li>
        </ul>
      </div>
      <img :src="element.imgsrc">
      </div>
    </div>
  </div>

</template>

<script>


export default {
  name: 'Eat',
  data(){
    return{
      ingridient:{},
       menu:[
        {name: 'бограч', description: 'Bogracs – на угорській мові означає «казан». Отже цю закарпатську страву готують в казані. Практично мова йде про закарпатський варіант всесвітньовідомої угорської страви – гуляш. Гостру суміш яловичини, паприки, грибів, цибулі, часника та приправ, в тому числі пекучого перцю, в Закарпатті та Угорщині готують з давніх давен. Існує легенда, згідно з якою, пекучий перець в цю страву почали додавати під час угорсько-турецьких війн. Щоб «ворог подавився». Так жартують угорці, яких в Закарпатті і сьогодні немало.', imgsrc: require('./../assets/bograch.jpg')},
        {name: 'банош', description: 'Банош являє собою автентичну гуцульську страву, яку місцеве населення готувало вже декілька століть. Ця страва готується із свіжої овечої сметани та кукурузного борошна, шляхом постійного помішування цих двох інгридієнтів на вогні. Класичний банош готується в чавунній посуді. Крім того, гуцульська традиція вимагала, щоб цим займались виключно чоловіки. І це не дивно. Де ж Ви знайдете жінок на полонині? Примачується справжній банош овечою бринзою. Хоча є варіанти зі шкварками чи грибною піджаркою.', imgsrc: require('./../assets/Banosh.jpg')}
      ]
    }
  },


  computed:{
    dishes(){
      return this.$store.getters.dishes
    }
   },
  methods: {
    showingridients(name){
      Object.values(this.dishes).forEach(value => {
    if (value.name === name ){
      // this.name = value.ingridients.ingridientname
        this.ingridient = value.ingridients
      console.log(this.ingridient)
    }
      })
    }
  }
}
</script>

<style>
.h2{
  text-align: center;
}
</style>
