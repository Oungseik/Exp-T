<script lang="ts">
	import type { InputProps } from '$lib/types';
	export let inputProps: InputProps;
</script>

<div class="flex flex-col relative mt-6">
	<input
		class="bg-gray-600 p-2 rounded-lg focus:ring-1 focus:ring-gray-400 focus-visible:outline-none "
		type={inputProps.type}
		name={inputProps.name}
		id={inputProps.id}
		placeholder={inputProps.title}
	/>
	<slot />
</div>
