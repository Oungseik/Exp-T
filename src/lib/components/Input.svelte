<script lang="ts">
	import type { InputProps } from "$lib/types";
	export let inputProps: InputProps;
</script>

<div class="flex flex-col relative mt-8">
	<input
		class="peer bg-transparent border-b border-b-gray-400 focus-visible:outline-none placeholder-transparent"
		type={inputProps.type}
		name={inputProps.name}
		value={inputProps.value}
		id={inputProps.id}
		placeholder={inputProps.title}
		required={inputProps.required}
	/>
	<label
		class="absolute text-slate-400 peer-placeholder-shown:top-0 peer-placeholder-shown:text-base text-sm -top-5 transition-[top] duration-300"
		for={inputProps.id}>{inputProps.title}</label
	>
</div>
