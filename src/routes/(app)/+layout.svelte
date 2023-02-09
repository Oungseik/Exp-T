<script>
	import profilePic from '$lib/images/profile.png';
</script>

<header class="bg-gray-800 p-4 text-gray-200 drop-shadow-md flex items-center justify-between">
	<h1 class="font-bold font-unbounded text-2xl">Exp-T</h1>

	<button class="w-9 h-9 rounded-full">
		<img src={profilePic} alt="profile picture" />
	</button>
</header>

<slot />
