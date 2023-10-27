function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    let imgMobile = document.querySelector('.logo');
    
    let formMobile = document.getElementById('formulario');

    const screenWidth = window.innerWidth; // Obtenha a largura da tela

    if (screenWidth <= 900) {
        if (menuMobile.classList.contains('open')) {
            imgMobile.style.display = "block";
            formMobile.style.top = '20%';
            menuMobile.classList.remove('open');
            document.querySelector('.icon').src = "Assets_Netuno/icones/menu_white_36dp.svg";

            if (screenWidth <= 700) {
                formMobile.style.top = "63%"; // Ajuste a altura conforme necessário
            } 

            if(screenWidth <= 600) {
                formMobile.style.top = "55%";
            }
        } else {
            imgMobile.style.display = "none";
            if (screenWidth <= 900 && screenWidth > 700) {
                formMobile.style.top = '40%';
            } 
            
            if (screenWidth <= 700) {
                formMobile.style.top = '85%';
            }
            
            menuMobile.classList.add('open');
            document.querySelector('.icon').src = "Assets_Netuno/icones/menu_white_36dp.svg";
        }
    } 
}