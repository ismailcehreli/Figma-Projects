const menuCollapse = document.querySelector('.menu_collapse');

const linksContainer = document.querySelector('.navbar_links_container');

const secondLogo = document.querySelector('.navbar_second_logo');

if(menuCollapse && linksContainer){
menuCollapse.addEventListener('click', () => {
    linksContainer.classList.toggle('active');

if(linksContainer.classList.contains('active')){
    menuCollapse.src = './assets/images/mobile_header_menu_on.svg';  
    secondLogo.src = './assets/images/mobile_close_the_door.svg';   
}else{ 
    menuCollapse.src = './assets/images/mobile_header_menu_off.svg'; 
    secondLogo.src = './assets/images/hire_me.svg';  
}

});
}
