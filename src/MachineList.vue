<template>
	<div>
		<h1>Liste des machines</h1>
		<Machine v-bind:name='name' :status='status' :checkedAt='checkedAt'></Machine>
	</div>

</template>

<script>
import Machine from './Machine.vue';

	export default {
		components: {Machine},
		name: 'listeMachines',
		props:['Liste'],
		data(){
			return {

		name: 'What else?',
		status: false,
		checkedAt: new Date().toLocaleString(),
		}
	}
	}
</script>