<template>
    <div>
		<picture>
			<source media="(prefers-color-scheme: dark)" type="image/svg+xml" srcset="/img/generic-logo-white.svg"/>
			<img src="/img/generic-logo-black.svg"/>
		</picture>

		<router-link to="/other">
			<picture>
				<source media="(prefers-color-scheme: dark)" type="image/svg+xml" srcset="/img/code-white.svg"/>
				<img src="/img/code-black.svg"/>
			</picture>
		</router-link>
    </div>
</template>

<script lang="ts">
	import {defineComponent} from 'vue';

	export default defineComponent({
		name: 'Home',
	});
</script>

<style>
	:root {
		color-scheme: light dark;
	}
</style>
