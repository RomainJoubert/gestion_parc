<template>
	<div>
		<h1>Carte des machines</h1>
		<gmap-map class="maps"
  :center="{lat:45.1885, lng:5.7245}"
  :zoom="12">
</gmap-map>
	</div>
</template>

<script>
	export default {
		name:'machineMap',
		props:['Carte']
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