<script lang="ts">
	import { localizeHref } from '$paraglide/runtime';
	import PillFlower from './PillFlower.svelte';
</script>

<!-- Dashboard images -->
<div class="mt-16 mb-10 flex flex-col justify-center md:mt-10 md:mb-20">
	<div class="relative -top-2 z-20 mx-auto">
		<PillFlower title="Dashboards" />
	</div>
	<div class="relative mt-5">
		<div class="absolute bottom-0 left-0">&nbsp;</div>
		<a href={localizeHref('/login')} class="dashboard-link">
			<img
				src="/pulse-dashboard-2.png"
				alt="pulse-dashboard"
				class="dashboard-img relative -top-[40px] z-10 mx-auto w-full scale-105 md:w-[85%] md:scale-110"
			/>
		</a>
	</div>
</div>

<style>
	.dashboard-link {
		display: block;
		perspective: 1000px;
	}

	.dashboard-link .dashboard-img {
		transform: rotateY(15deg);
		transition: transform 0.7s ease-out;
	}

	.dashboard-link:hover .dashboard-img {
		transform: rotateY(0deg) scale(1);
	}

	@media (min-width: 768px) {
		.dashboard-link .dashboard-img {
			transform: rotateY(15deg) scale(1);
		}

		.dashboard-link:hover .dashboard-img {
			transform: rotateY(0deg) scale(1);
		}
	}
</style>
