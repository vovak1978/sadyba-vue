<template>
  <div>
    <h2>Форма роботи з масивом продуктів</h2>
    <label>Введіть назву продукту</label> <input type="text" v-model="name" >
    <label>Введіть ціну за кг </label> <input type="text" v-model="priceperkg" >
    <button @click="newproduct">Зберегти</button> <br>
    <button @click="changeshow">{{buttontext}}</button>
    <div v-show="seen">
      <table>
        <tr>
          <th>Назва продукту</th>
          <th>Ціна за 1грам </th>
          <th>Валюта</th>
        </tr>
        <tr v-for="(product, index) in products" :key="index">
        <th>{{product.name}}</th>
        <th>{{product.pricepergr}}</th>
        <th>грн</th>
        </tr>
      </table>
        </div>
  </div>

</template>

<script>

export default {
  name: 'Product',

  data() {
    return {
     product: {},
      name: '',
      pricepergr: '',
      priceperkg: '',
      seen: false,
      buttontext: 'Показати список продуктів',

    }
  },

  computed: {
    products() {
      return this.$store.getters.products;
      },
     },
  methods: {
    newproduct (){
          this.product.pricepergr = this.priceperkg / 1000;
          this.product.name = this.name;
       this.$store.dispatch('newProducts', this.product);
       this.name = '';
       this.priceperkg = '';
        },
    changeshow() {
      this.seen = !this.seen;
      this.seen === true ?this.buttontext = 'Сховати' :this.buttontext = 'Показати список продуктів';
    }
  }
}
</script>