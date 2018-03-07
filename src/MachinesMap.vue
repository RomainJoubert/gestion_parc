<template>
	<div>
		<h1>Carte des machines</h1>
		<gmap-map class="maps"
		:center="{lat:45.1885, lng:5.7245}"
		:zoom="12">

		<div>
			
			<gmap-marker
			:key="marker.id"
			v-for="marker in markers"
			:position="marker.position"
			:clickable="true"
			:draggable="true"
		
			></gmap-marker>
	</div>
	

</gmap-map>
</div>
</template>

<script>

export default {
		name:'machineMap',
	data (){

		return {
			
			markers: [{
				id:1,
				position: {lat: 44.816667, lng: 5.75}
			}, 
			{
				id:2,
				position: {lat: 45.1333, lng: 5.7167}
			}]
		}
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