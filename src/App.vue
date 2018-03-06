<template>
  <div id="app">
    <img src="./assets/logo.jpg">
    <h1>{{ msg }}</h1>
 
    <router-link to='/liste'><button v-on:click='onMachinesListClick'><b>Afficher la liste des machines</b></button></router-link>
    <router-link to='/carte'><button v-on:click='onMapClick'><b>Carte des machines</b></button></router-link>
   <!--  <liste></liste>
    <carte></carte> -->
   <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: "Bienvenue sur l'appli de gestion de parc"
    }
  },
  methods : {
    onMachinesListClick: function(){
    alert("Un utilisateur a cliqué sur la liste des machines")
      },
    onMapClick : function() {
      alert("Un utilisateur a cliqué sur la carte des machines")
    }
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

img {
  width: 200px;
  height: 200px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

button {
  border:  solid;
  border-radius: 50px 10px;
  width: 250px;
  height: 60px;
  background-color: grey;
  border-color:  red;
  font-size: 15px;


}
</style>
