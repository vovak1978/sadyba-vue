<template>

  <nav class="navbar navbar-dark bg-primary">
    <a class="brand" > САДИБА ЗАТИШОК </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item" v-for="(elements, i) in navarray" :key="i">
          <router-link class="nav-link active" :to="elements.path" >{{elements.name}}</router-link>
        </li>
      </ul>
    </div>
  </nav>

</template>

<script>
export default {
  name: 'Header',

 data(){
    return {
      navarray: [
        {path:"/", name: 'Home' },
        {path:"/foto", name: 'Foto' },
        {path:"/eat", name: 'Eat' },
        {path:"/product", name: 'Product' },
        {path:"/recipe", name: 'Recipe' },
        {path:"/myprojects", name: 'MyProjects' }]
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
