import Vue from 'vue'
// import VueRouter from 'vue-router'
import App from './App.vue'
import Liste from'./MachineList.vue'
import Carte from'./MachinesMap.vue'

// Vue.use(vueRouter)
Vue.component('liste', Liste) //en premier le nom que je définis et que j'appellerai dans ma balise, en 2ème le nom de la props
Vue.component('carte', Carte)

new Vue({
  el: '#app',
  render: h => h(App)
})


