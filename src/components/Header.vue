<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="success" style="height: 50px" >
      <b-navbar-brand class="brand">Садиба Затишок</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item v-for="(elements, i) in navarray" :key="i">
            <router-link class="nav-link active" :to="elements.path" >{{elements.name}}</router-link>
          </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
    </b-navbar>

  </div>


</template>

<script>
export default {
  name: 'Header',

 data(){
    return {
      navarray: [
        {path:"/", name: 'Дім' },
        {path:"/foto", name: 'Фото' },
        {path:"/eat", name: 'Харчування' },
        {path:"/product", name: 'Продукти' },
        {path:"/recipe", name: 'Рецепти' },
        {path:"/contact", name: 'Контакти'}]
    }
  }
}

</script>

<style>
.brand{
  font-size: 20px;
  color: black;
  font-family: Arial;
}

</style>
