window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
  const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)

  // Cambiar tamaño
  if (document.body.scrollTop > vw*0.1 || document.documentElement.scrollTop > vw*0.1) {
    // Logo
    document.getElementById("logo").style.height = "8.25vh";
    document.getElementById("logo").style.left = "calc(50vw - (8.25vh/2))";
    document.getElementById("logo").style.top = "2.5vh";
    // Nav
    document.getElementsByClassName("navbar")[0].style.maxHeight = "10vh";
    document.getElementsByClassName("navbar")[0].style.height = "10vh";
  } else {
    // Logo
    document.getElementById("logo").style.height = "calc(var(--LinksSeccionesHeight) + 5.5vh)";
    document.getElementById("logo").style.left = "calc(50vw - ((var(--LinksSeccionesHeight) + 5.5vh)/2))";
    document.getElementById("logo").style.top = "3.75vh";
    // Nav
    document.getElementsByClassName("navbar")[0].style.maxHeight = "15vh";
    document.getElementsByClassName("navbar")[0].style.height = "15vh";
  }

  // Cambiar color
  // MaxHeight del carouselExampleCaptions + 0.015
  if (document.body.scrollTop > vh*0.9 || document.documentElement.scrollTop > vh*0.9) {
    // Logo
    document.getElementById("logo").src = "/static/rsc/img/Recurso 4.png";
    document.getElementById("logo").style.height = "6vh";
    document.getElementById("logo").style.left = "calc(50vw - (6vh/2))";
    document.getElementById("logo").style.top = "3vh";
    // Nav
    document.getElementsByClassName("navbar")[0].style.backgroundColor = "var(--azul-nav)";
    document.getElementById("tlf").src = "/static/rsc/img/tlfAzul.png";
    document.getElementById("mail").src = "/static/rsc/img/mailAzul.png";
    //Titulos
    Array.prototype.forEach.call(document.getElementsByClassName("TituloSeccion"), function(n) {
      n.style.color = "var(--blanco-nav)";
    });
    // TODO: Cambiar las imagenes del teléfono y del sobre
    // DatosEIdioma
    document.getElementsByClassName("DatosEIdioma")[0].style.backgroundColor = "var(--blanco-nav)";
    Array.prototype.forEach.call(document.getElementsByClassName("linksCEI"), function(n) {
      n.style.color = "var(--azul-titulos)";
    });
  } else {
    // Logo
    document.getElementById("logo").src = "/static/rsc/img/logoAzultri.png";
    // Nav
    document.getElementsByClassName("navbar")[0].style.backgroundColor = "var(--blanco-nav)";
    document.getElementById("tlf").src = "/static/rsc/img/phone.png";
    document.getElementById("mail").src = "/static/rsc/img/mail.png";
    //Titulos
    Array.prototype.forEach.call(document.getElementsByClassName("TituloSeccion"), function(n) {
      n.style.color = "var(--azul-nav)";
    });
    // DatosEIdioma
    document.getElementsByClassName("DatosEIdioma")[0].style.backgroundColor = "var(--azul-nav)";
    Array.prototype.forEach.call(document.getElementsByClassName("linksCEI"), function(n) {
      n.style.color = "var(--blanco-nav)";
    });
  }
}

document.addEventListener('DOMContentLoaded', function() {
  scrollFunction();
})