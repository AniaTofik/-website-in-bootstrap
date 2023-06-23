document.addEventListener('DOMContentLoaded', function () {
	const nav = document.querySelector('.navbar');

	function addShadow() {
		if (window.scrollY >= 223) {
			nav.classList.add('shadow-bg');
		} else {
			nav.classList.remove('shadow-bg');
		}
	}
	addShadow();

	window.addEventListener('scroll', addShadow);
});
