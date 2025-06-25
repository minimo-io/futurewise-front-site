// export function smoothScroll(node: HTMLElement) {
// 	node.addEventListener('click', (event) => {
// 		event.preventDefault();

// 		const targetId = node.getAttribute('href')?.slice(1); // Remove the #
// 		const targetElement = targetId ? document.getElementById(targetId) : null;

// 		if (targetElement) {
// 			targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
// 		}
// 	});

// 	return {
// 		destroy() {
// 			node.removeEventListener('click', () => {});
// 		}
// 	};
// }

export function smoothScroll(node: HTMLElement, offset = 40) {
	// Store the handler so we can remove it later
	function onClick(event: MouseEvent) {
		event.preventDefault();

		const href = node.getAttribute('href');
		if (!href?.startsWith('#')) return;

		const targetId = href.slice(1);
		const targetEl = document.getElementById(targetId);
		if (!targetEl) return;

		// Calculate top of element relative to document, then subtract offset
		const elementTop = targetEl.getBoundingClientRect().top + window.pageYOffset;
		const scrollToY = Math.max(0, elementTop - offset);

		window.scrollTo({
			top: scrollToY,
			behavior: 'smooth'
		});
	}

	node.addEventListener('click', onClick);

	return {
		// Clean up listener correctly
		destroy() {
			node.removeEventListener('click', onClick);
		}
	};
}
