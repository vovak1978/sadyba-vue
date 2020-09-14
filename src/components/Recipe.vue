<template>
    <div>
      <div>
        <h3> Форма додавання страв та інгредієнтів</h3>
        <input type="text" v-model="dish.name" > <label>Введіть назву рецепту</label>
        <button @click="newrecipe">Зберегти</button> <br>

        <label>Виберіть продукт</label>
        <select v-model="newingridient.ingridientname">
          <option v-for="(product, i) in products" :key="i" v-bind:value="product.name" >
            {{product.name}}
          </option>
        </select>
        <label>Введіть кількість грам</label> <input type="number" v-model="newingridient.quantitygr">
        <button @click="addingredient">Додати</button>
      </div>

    <div>
      <table v-show="seen">
        <tr>
          <th>Назва інгредієнту</th>
          <th>Кількість</th>
          <th>Ціна</th>
          <th>Валюта</th>
        </tr>
        <tr v-for="(element, i) in dish.ingridients" :key="i">
          <th>{{element.ingridientname}}</th>
          <th>{{element.quantitygr}}</th>
          <th>{{element.price}}</th>
          <th>грн</th>
        </tr>
        <tr>Загальна собівартість {{this.dish.totalsum}} грн </tr>
      </table>
    </div>
    </div>
</template>

<script>
export default {
  name: 'Recipe',

  data() {
    return {
      dish: {
        name: '',
        ingridients: [],
        totalsum: 0,
        sumForPay: 0
      },
      newingridient: {
        ingridientname: '',
        quantitygr: 0,
        price: 0}
    ,
      seen: true
    }
  },
  computed: {
    products() {
      return this.$store.getters.products}
    },

   methods: {
    newrecipe() {
      this.$store.dispatch('newDish', this.dish);
      console.log(this.dish)
      this.seen = !this.seen;


    },
     addingredient(){
    Object.values(this.products).forEach(value => {
    if (value.name == this.newingridient.ingridientname){
      this.newingridient.price = value.pricepergr * this.newingridient.quantitygr;
      this.dish.ingridients.push(Object.assign({}, this.newingridient));
      this.dish.totalsum = this.dish.totalsum + this.newingridient.price;
      this.dish.sumForPay = this.dish.totalsum * 4.5;
      this.newingridient = {}
    }
    })
}
   }
}
</script>