import Vue from 'vue'
import App from './App.vue'
import Liste from'./MachineList.vue'
import Carte from'./MachinesMap.vue'
import VueRouter from 'vue-router'

Vue.component('liste', Liste) //en premier le nom que je définis et que j'appellerai dans ma balise, en 2ème le nom de la props
Vue.component('carte', Carte)
Vue.use(VueRouter)

const routes = [
{path: '/liste', component: Liste},
{path: '/carte', component: Carte}
]

const router = new VueRouter({
	routes
});

new Vue({
  el: '#app',
  render: h => h(App),
  router
})


