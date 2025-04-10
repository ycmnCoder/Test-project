function showMenu() {
    let backdrop = document.getElementById('backdrop');
    backdrop.classList.remove('hidden')


    let mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.remove('translate-x-full')
}

function hideMenu() {
    let backdrop = document.getElementById('backdrop');
    backdrop.classList.add('hidden')


    let mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.add('translate-x-full')
}