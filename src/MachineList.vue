<template>
	<div>
		<h1>Liste des machines</h1>
		<Machine v-for='machine in machines' :key='machine.id' v-bind:name='machine.name' :status='machine.status' :checkedAt='machine.checkedAt'></Machine>
	</div>

</template>

<script>
import Machine from './Machine.vue';
import axios from 'axios';


export default {
	components: {Machine},
	name: 'listeMachines',
	props:['Liste'],
	data: function() {
		return {
		      machines: [], // au début la liste des machines est vide
		      loading: false,
		      error: null,
		  }
		},
		 // Fetches posts when the component is created.
  	created() {
    axios.get(`https://machine-api-campus.herokuapp.com/api/machines`)
    .then(response => {
      // JSON responses are automatically parsed.
      this.loading =true,
      this.machines = response.data
    })
    .catch(error => {
      this.errors.push(error)
    })
	}
}
	
	
	</script>

	<style>


	</style>