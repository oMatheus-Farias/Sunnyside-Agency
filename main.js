;(function (){
    'use strict';

    const $hamburguerMenu = document.querySelector('.hamburguer-menu');
    const $navListContent = document.querySelector('.nav-list-content');
    const $main = document.querySelector('.main');
    const $iconsSocialMedia = Array.from(document.querySelectorAll('.footer-box-social-media path'));
    const $linksSocialMedia = Array.from(document.querySelectorAll('.footer-box-social-media a'));

    const openedOrClosed = {
        open: false
    };

    window.addEventListener('resize', displayMobileOrTablet);
    window.addEventListener('DOMContentLoaded', displayMobileOrTablet);

    function displayMobileOrTablet(){
        
        if(this.innerWidth < 800){
            function stateMenu(){
                openedOrClosed.open ? $navListContent.style.transform = 'translateY(0em)' : $navListContent.style.transform = 'translateY(-38em)';
            };
            
            $hamburguerMenu.addEventListener('click', actionMenu);
        
            function actionMenu(){
                openedOrClosed.open = !openedOrClosed.open;
                stateMenu();
            };

            $main.addEventListener('click', () => {
                openedOrClosed.open ? actionMenu() : "";
            });
        };
    };

    const hoverEvent = () =>{
        $linksSocialMedia.forEach((icon, index) => {
            icon.addEventListener('mouseover', () => {

                $iconsSocialMedia[index].getAttribute('fill') === "#2C7566" ? $iconsSocialMedia[index].setAttribute('fill', '#FFF') : "";
            });

            icon.addEventListener('mouseout', () => {
                
                $iconsSocialMedia[index].getAttribute('fill') === "#FFF" ? $iconsSocialMedia[index].setAttribute('fill', '#2C7566') : "";
            });
        });
    };

    hoverEvent();    
})();