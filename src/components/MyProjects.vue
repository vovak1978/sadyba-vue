<template>
  <div>
    <div v-if="errormessage">
      <p>"Виправте наступні помилки"</p>
      <ul>
        <li>{{errormessage}}</li>
      </ul>

    </div>
    <div class="container">
      <input type="text" v-model="message" >

      <button v-on:click="addlist" v-if="todoarray.length == 10 ?show = false :show=true">Add new todo</button> <br>
    </div>
    <div class="container">
      <ul>
        <li v-for="(element, index) in todoarray" :key="index">{{element}} <button v-on:click="remove(index)" > Remove </button> </li>
      </ul>
    </div>

  </div>
</template>

<script>
export default{
  name: 'MyProjects',

  data() {
    return {
      message: '',
      todoarray: [],
      errormessage: ''
    }
  },
  methods: {
    addlist: function() {
      this.errormessage = ''

      if (! this.message) {
        this.errormessage = 'Поле не може бути пусте';
        console.log(this.errormessage)
      }
      else{
        this.todoarray.push(this.message);
        this.message = ''
      }
    },

    remove: function(index) {
      this.todoarray.splice(index,1)
    }
  }
}
</script>

<style>
.container{
  display: flex;
  justify-content: center;
}
</style>
