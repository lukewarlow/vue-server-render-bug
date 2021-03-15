<template>
    <div>
		<img src="/img/generic-logo.svg"/>

		<router-link to="/other">
			<img src="/img/code.svg"/>
		</router-link>
    </div>
</template>

<script lang="ts">
	import {defineComponent} from 'vue';

	export default defineComponent({
		name: 'Home',
	});
</script>
