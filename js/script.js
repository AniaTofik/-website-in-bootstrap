document.addEventListener('DOMContentLoaded', function () {
	const nav = document.querySelector('.navbar');
	const navbarCollapse = document.querySelector('.navbar-collapse');

	function addShadow() {
		if (window.scrollY >= 223) {
			nav.classList.add('shadow-bg');
		} else {
			nav.classList.remove('shadow-bg');
		}
	}
	addShadow();

	const homeLink = document.querySelector(
		'.navbar-nav .nav-link[href="#home"]'
	);

	const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
	navLinks.forEach((link) => {
		link.addEventListener('click', function () {
			navLinks.forEach((link) => {
				link.classList.remove('active');
			});
			this.classList.add('active');
			if (this !== homeLink) {
				homeLink.classList.remove('active');
			}
		});
	});

	window.addEventListener('scroll', addShadow);
});
