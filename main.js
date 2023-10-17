;(function (){
    'use strict';

    const $hamburguerMenu = document.querySelector('.hamburguer-menu');
    const $navListContent = document.querySelector('.nav-list-content');

    const openedOrClosed = {
        open: false
    };

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
})();