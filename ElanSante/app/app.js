const loader = document.querySelector('.loader');

window.addEventListener('load', () =>{
    /* $("#loader-logo").css({'opacity' : '1.'}); */
    loader.classList.add('shade-out');
    loader.classList.add('index-out');
    $("body").css({'overflow' : 'visible'});
})

const menu = document.querySelector('#mobile-menu');
const menuLink = document.querySelector('.navbar__menu');
const catalogContainer = document.querySelector('.mtCatalog__container');
const mainTop = document.querySelector('.main__top');

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLink.classList.toggle('active');
    catalogContainer.classList.toggle('position');
    mainTop.classList.toggle('height');
});

let addOrRemoveLogo = false;
window.addEventListener('resize', function(event) {
    updateWidthResponse();
}, true);

function updateWidthResponse(){
    let li = '<li class="navbar__item" id="navbar__linkLogoContainer"></li>';
    let logoLink = '<a href="index.html" class="navbar__links" id="navbar__linkLogo">'
                   +'<img id="navbar__logo" src="src/images/logo_elan_sante.png" alt="logo"> &nbsp;&nbsp;'
                   +'Élan Santé</a>';
    let profilButton = '<a href="portail.html" class="button" id="navbar__profilButton">'
                   +'<button class="btn-hover color-1">Mon profil</button></a>';

    if ($(window).width() < 960) {
        if(addOrRemoveLogo == false){
            addOrRemoveLogo = true;
            $("#navbar__linkLogoContainer").remove();
            $("#navbar__profilButton").remove();
            $(".navbar__btn").append(profilButton);
            $(".navbar__container").prepend(logoLink);
            $("#navbar__linkLogo").css({"position" : "absolute", "top" : "0", "margin" : "0 auto", "width" : "200px", "height" : "fit-content"});
        }
     }
     else {
        if(addOrRemoveLogo == true){
            addOrRemoveLogo = false;
            $(".navbar__menu").prepend(li);
            $("#navbar__linkLogo").remove();
            $("#navbar__linkLogoContainer").append(logoLink);
            $("#navbar__profilButton").remove();
            $(".navbar__container").append(profilButton);
        }
    }
}

$(document).ready(function(){
    updateWidthResponse();
    for(let i = 1; i < 5; i++){
        $("#mtCatalog__RawID"+i).mouseenter(function(){

            /* $("#mtCatalog__ImgID"+i).animate({
               width : '0',
               opacity : '0'
            },"slow"); 

            $("#mtCatalog__RawID"+i).children("div").animate({
                width : '100%'
             },"fast"); */

             document.querySelector("#mtCatalog__ImgID"+i).classList.toggle('is-active');
 
             document.querySelector("#mtCatalog__RawID"+i).children[0].classList.toggle('is-active');
             //document.querySelector("#mtCatalog__RawID"+i).children[1].classList.toggle('is-active');
        });

        $("#mtCatalog__RawID"+i).mouseleave(function(){
            /* $("#mtCatalog__ImgID"+i).animate({
               width : '45%',
               opacity : '1'
            },"slow");
            $("#mtCatalog__RawID"+i).children("div").animate({
                width : '70%'
            },"slow"); */
            document.querySelector("#mtCatalog__ImgID"+i).classList.toggle('is-active');
 
            document.querySelector("#mtCatalog__RawID"+i).children[0].classList.toggle('is-active');
            //document.querySelector("#mtCatalog__RawID"+i).children[1].classList.toggle('is-active');
        });

        $("#conn__leftShadow").click(function(){
            $("#conn__rightShadow").css({"box-shadow" : "-5px 5px 20px rgba(0, 0, 0, .8) inset"});
            $("#conn__leftShadow").css({"box-shadow" : "none"});
            $("#conn__leftShadow").children().css({"text-decoration" : "underline", "text-decoration-color" : "#fff"});
            $("#conn__rightShadow").children().css({"text-decoration" : "none"});
            $("#portail__form").empty();
            $("#portail__form").append('<input type="text" name="uid" placeHolder="E-mail ou pseudonyme...">');
            $("#portail__form").append('<input type="password" name="pwd" placeHolder="Mot de passe...">');
            $("#portail__form").append('<button class="btn-hover color-1">Se connecter</button>');
        })
        $("#conn__rightShadow").click(function(){
            $("#conn__leftShadow").css({"box-shadow" : "-5px 5px 20px rgba(0, 0, 0, .8) inset"});
            $("#conn__rightShadow").css({"box-shadow" : "none"});
            $("#conn__rightShadow").children().css({"text-decoration" : "underline", "text-decoration-color" : "#fff"});
            $("#conn__leftShadow").children().css({"text-decoration" : "none"});
            $("#portail__form").empty();
            $("#portail__form").append('<input type="text" name="firstName" placeHolder="Prénom...">');
            $("#portail__form").append('<input type="text" name="lastName" placeHolder="Nom...">');
            $("#portail__form").append('<input type="text" name="email" placeHolder="E-mail...">');
            $("#portail__form").append('<input type="text" name="uid" placeHolder="Pseudonyme...">');
            $("#portail__form").append('<input type="password" name="pwd" placeHolder="Mot de passe...">');
            $("#portail__form").append('<input type="password" name="pwdRepeat" placeHolder="Répéter mot de passe...">');
            $("#portail__form").append("<button class='btn-hover color-1'>S'inscrire</button>");       
        })
    }

});