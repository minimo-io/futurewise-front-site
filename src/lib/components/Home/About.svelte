<script lang="ts">
	import { m } from '$paraglide/messages';
</script>

<div class="relative">
	<section
		class="fw-home-about z-10 mx-(--fw-app-margin) mb-12 max-w-full pt-10 md:mx-auto md:max-w-[60%]"
	>
		{@html m.aboutText()}
	</section>
	<div
		class="absolute -right-[18%] bottom-[25%] z-0 hidden scale-80 opacity-30 md:-right-[5%] md:block"
	>
		<img src="/bgs/circles.svg" alt="circles" />
	</div>
</div>
