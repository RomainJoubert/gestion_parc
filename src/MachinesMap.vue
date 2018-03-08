<template>
	<div>
		<h1>Carte des machines</h1>
		<gmap-map class="maps"
		:center="{lat:45.1885, lng:5.7245}"
		:zoom="3">

		<div>
			
			<gmap-marker
			:key="machine.id"
			v-for="machine in machines"
			:position="{lat:Number(machine.latitude), lng:Number(machine.longitude)}"
			:clickable="true"
			:draggable="true"
		
			></gmap-marker>
	</div>
	

</gmap-map>
</div>
</template>

<script>
import axios from 'axios';

export default {
		name:'machineMap',
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
.maps{
	width: 80%; 
	height: 800px; 
	margin: auto;
	border: solid 5px;
	border-radius: 10px 10px;
}
</style>