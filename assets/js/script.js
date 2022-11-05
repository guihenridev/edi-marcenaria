function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    const iconMenu = document.querySelector('.icon');
    menuMobile.classList.toggle('open');
    iconMenu.classList.toggle('fa-bars');
    iconMenu.classList.toggle('fa-xmark');
}


