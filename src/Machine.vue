<template>
	<div>
	<h1>Nom de la machine : {{name}}</h1>
	<h3 v-if='status===true' v-bind:class={ok:status} >Statut de la machine : Status OK</h3>
	<h3 v-else v-bind:class={ko:!status}>Statut de la machine : Status KO</h3>
	<h5>Modifiée le : {{checkedAt}}</h5>
	</div>
</template>

<script>
	export default {
		name: 'Machine',
		props: ['name', 'status', 'checkedAt'],
	}
</script>

<style scoped>
	.ok {
		color: green;
	}

	.ko {
		color: red;
	}

	div {
	  border: 2px solid black;
	  border-radius: 10px;
       margin: auto;
       width: 60%;
       margin-bottom: 15px;
}
</style>