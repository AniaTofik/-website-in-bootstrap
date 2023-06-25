document.addEventListener('DOMContentLoaded', function () {
	const nav = document.querySelector('.navbar');
	const navLinks = document.querySelectorAll('.nav-link');
	const navbarCollapse = document.querySelector('.navbar-collapse');

	function addShadow() {
		if (window.scrollY >= 223) {
			nav.classList.add('shadow-bg');
		} else {
			nav.classList.remove('shadow-bg');
		}
	}
	addShadow();

	navLinks.forEach((navLink) =>
		navLink.addEventListener('click', () => {
			navbarCollapse.classList.remove('show');
		})
	);

	window.addEventListener('scroll', addShadow);
});
