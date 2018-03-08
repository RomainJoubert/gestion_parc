import Vue from 'vue'
import App from './App.vue'
import listeMachines from'./MachineList.vue'
import machineMap from'./MachinesMap.vue'
import VueRouter from 'vue-router'
import Machine from './Machine.vue'
import * as VueGoogleMaps from 'vue2-google-maps'
require('./google.js');

Vue.use(VueGoogleMaps, {
  load: {
    key: mykey,
    libraries: 'places', // This is required if you use the Autocomplete plugin
  }
})

Vue.component('liste', listeMachines) //en premier le nom que je définis et que j'appellerai dans ma balise, en 2ème le nom de la props
Vue.component('carte', machineMap)
Vue.use(VueRouter)

const routes = [
{path: '/machines', component: listeMachines},
{path: '/map', component: machineMap},
{path: '/machine', component: Machine}
]

const router = new VueRouter({
	routes
});

new Vue({
  el: '#app',
  render: h => h(App),
  router
})


