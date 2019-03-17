const hamburgerButton = document.getElementById('hamburger-button')
const navbarMenu = document.getElementById('navbar-menu')

hamburgerButton.addEventListener('click', () => {
    hamburgerButton.classList.toggle('is-active')
    navbarMenu.classList.toggle('is-active')
})