document.addEventListener('DOMContentLoaded', function () {
	const menu = document.querySelector('.mobile-menu')
	const burgerBtn = document.querySelector(
		".header_mobile-icon img[src='./img/icons/burger.svg']"
	)
	const closeBtn = document.querySelector(
		".menu__header-icon img[src='./img/icons/close-menu.svg']"
	)
	const navLinks = document.querySelectorAll('.menu__nav a')
	const logo = document.querySelector('.menu__header-left')
	const menuButtons = document.querySelectorAll('.menu__btn')
	const userIcon = document.querySelector(
		".menu__header-icon img[src='./img/icons/user-menu.svg']"
	)
	const cartIcon = document.querySelector(
		".menu__header-icon img[src='./img/icons/cart-menu.svg']"
	)

	function openMenu() {
		menu.classList.remove('hidden')
		document.body.style.overflow = 'hidden'
	}

	function closeMenu() {
		menu.classList.add('hidden')
		document.body.style.overflow = ''
	}

	burgerBtn.addEventListener('click', openMenu)
	closeBtn.addEventListener('click', closeMenu)

	navLinks.forEach(link => link.addEventListener('click', closeMenu))
	menuButtons.forEach(button => button.addEventListener('click', closeMenu))
	logo.addEventListener('click', closeMenu)
	userIcon.addEventListener('click', closeMenu)
	cartIcon.addEventListener('click', closeMenu)

	document.addEventListener('click', function (event) {
		if (
			!menu.contains(event.target) &&
			!burgerBtn.contains(event.target) &&
			!closeBtn.contains(event.target)
		) {
			closeMenu()
		}
	})
})
