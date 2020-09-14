<template>
  <div>
    <label>Виберіть страву</label>
    <select v-model="checkrow.dish">
      <option v-for="(element, i) in dishes" :key="i">
        {{element.name}}
      </option>
    </select>
    <label>Виберіть к-ть порцій</label>
    <select v-model = "checkrow.quantityofportion">
      <option v-for="(element, i) in quantityPortion" :key="i">{{element}}</option>
    </select>
    <button @click="totalCheck">Додати</button>
    <table>
      <tr>
        <th> Назва страви </th>
        <th> Ціна страви </th>
        <th> К-ть порцій </th>
        <th> Сума </th>
        </tr>
      <tr v-for="(number, i) in check" :key="i">
        <th>{{number.dish}}</th>
        <th>{{number.sum | round }}</th>
        <th>{{number.quantityofportion}}</th>
        <th>{{number.totalsum | round}}</th>
        <th> <button @click="remove(i)">Видалити</button> </th>
      </tr>
    </table>
  <p>Сума до сплати {{sumPay | round}}</p>
  </div>
</template>

<script>

export default {
  name: 'Check',
  data(){
    return{
      quantityPortion:[1,2,3,4,5,6,7],
      checkrow: {},
      dish: '',
      sum: 0,
      quantityofportion: 0,
      totalsum: 0,
      sumForPay: '0'

    }
  },
  filters: {
    round:
      function round(value) {
       if (value > 0) {
        const fixed = value.toFixed(2);
        return fixed;}

    }

},
  computed: {
    dishes() {
      return this.$store.getters.dishes
    },
    check() {
      return this.$store.getters.check
          },
    sumPay: function () {
            const sumPay = this.check.reduce((acu,cur) => {
          return acu + cur.totalsum;
        },0)
      return sumPay;
    }

  },
  methods:{
    totalCheck(){
        Object.values(this.dishes).forEach(value => {
        if (value.name == this.checkrow.dish) {
          this.checkrow.totalsum = this.checkrow.quantityofportion * value.sumForPay;
          this.checkrow.sum = value.sumForPay;
          this.$store.dispatch('newcheckrow', this.checkrow)

        }
      })
        this.checkrow = {}
    },
    remove(i){
      this.check.splice(i, 1)
    }
  }
}
</script>