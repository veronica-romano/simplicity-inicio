const botaoMenu = document.querySelector(".icone");

const menu = document.querySelector(".menu");

botaoMenu.addEventListener('click', function(event){
    event.preventDefaul();
    menu.classList.toggle("menu-aberto");
    if(menu.classList.contains("menu-aberto")){
            botaoMenu.innerHTML = "Fechar &times;";
    } else{
        botaoMenu.innerHTML = "Menu &equiv;";
    }
});