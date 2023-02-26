<script lang="ts">
	import clsx from "clsx";

	export let className: string | null = null;
	export let message: string | null = null;
	export let error: boolean = false;
</script>

<div
	class={clsx(
		" min-w-[280px] fixed left-1/2 -translate-x-1/2 px-4 py-2 rounded-md bg-gray-600 animate-sideDown",
		error && "border-2 border-red-300",
		className
	)}
>
	<p class={clsx("flex items-center gap-x-2", error && "text-gray-100")}>
		{#if error}
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="w-6 h-6 text-pink-300 font-bold"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
				/>
			</svg>
		{/if}
		<span class="capitalize flex-grow">
			{message}
		</span>
	</p>
</div>
