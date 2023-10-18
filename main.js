;(function (){
    'use strict';

    const $hamburguerMenu = document.querySelector('.hamburguer-menu');
    const $navListContent = document.querySelector('.nav-list-content');

    const openedOrClosed = {
        open: false
    };

    window.addEventListener('resize', displayMobileOrTablet);
    window.addEventListener('DOMContentLoaded', displayMobileOrTablet);

    function displayMobileOrTablet(){
        
        if(this.innerWidth < 1000){
            function stateMenu(){
                openedOrClosed.open ? $navListContent.style.transform = 'translateY(0em)' : $navListContent.style.transform = 'translateY(-38em)';
            };
            
            $hamburguerMenu.addEventListener('click', actionMenu);
        
            function actionMenu(){
                openedOrClosed.open = !openedOrClosed.open;
                stateMenu();
            };

            // teste.addEventListener('click', () => {
            //     openedOrClosed.open ? actionMenu() : "";
            // })
        };
    };

    
})();