window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)

  // Cambiar tamaño
  if (document.body.scrollTop > vw*0.1 || document.documentElement.scrollTop > vw*0.1) {
    // Logo
    document.getElementById("logo").style.maxHeight = "6.25vw";
    document.getElementById("logo").style.left = "46.875vw";
    // Nav
    document.getElementsByClassName("navbar")[0].style.maxHeight = "8vw";
  } else {
    // Logo
    document.getElementById("logo").style.maxHeight = "14vw";
    document.getElementById("logo").style.left = "43vw";
    // Nav
    document.getElementsByClassName("navbar")[0].style.maxHeight = "10vw";
  }

  // Cambiar color
  // MaxHeight del carouselExampleCaptions + 0.015
  if (document.body.scrollTop > vw*0.4375 || document.documentElement.scrollTop > vw*0.4375) {
    // Logo
    document.getElementById("logo").src = "/static/rsc/img/Recurso 4.png";
    document.getElementById("logo").style.maxHeight = "5.5vw";
    document.getElementById("logo").style.left = "47.25vw";
    // Nav
    document.getElementsByClassName("navbar")[0].style.backgroundColor = "var(--azul-nav)";
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