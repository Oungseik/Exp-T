<script lang="ts">
	import Input from '$lib/components/Input.svelte';
	import type { InputProps } from '$lib/types';

	const inputsProps: InputProps[] = [
		{
			title: 'Email',
			type: 'email',
			id: 'email',
			name: 'email'
		},
		{
			title: 'Password',
			type: 'password',
			id: 'password',
			name: 'password'
		}
	];
</script>

<form method="POST" class="border-2 border-gray-600 mt-16 mx-2 px-6 py-8 rounded-lg">
	<legend class="text-2xl font-[500]">Login</legend>
	{#each inputsProps as inputProps (inputProps.id)}
		<Input {inputProps} />
	{/each}
	<p class="text-sm text-right mt-2">
		Not already have account? <a
			class="text-cyan-300 underline underline-offset-2 transition hover:text-cyan-400"
			href="/signup">Sign up here.</a
		>
	</p>
	<button class="block ml-auto bg-cyan-600 mt-4 px-3 py-1 rounded-lg">Login</button>
</form>
