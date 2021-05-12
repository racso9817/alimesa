window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)

  // Cambiar tamaño
  if (document.body.scrollTop > vw * 0.01 || document.documentElement.scrollTop > vw * 0.01) {
    // Logo
    document.getElementById("logo").style.height = "8.25vh";
    document.getElementById("logo").style.left = "calc(50vw - (8.25vh/2))";
    document.getElementById("logo").style.top = "2.5vh";
    // Logo
    document.getElementById("logo").src = "/static/rsc/img/Recurso 4.png";
    document.getElementById("logo").style.height = "6vh";
    document.getElementById("logo").style.left = "calc(50vw - (6vh/2))";
    document.getElementById("logo").style.top = "3vh";
    // Nav
    document.getElementsByClassName("navbar")[0].style.maxHeight = "10vh";
    document.getElementsByClassName("navbar")[0].style.height = "10vh";
  } else {
    // Logo
    document.getElementById("logo").style.height = "calc(var(--LinksSeccionesHeight) + 5.5vh)";
    document.getElementById("logo").style.left = "calc(50vw - ((var(--LinksSeccionesHeight) + 5.5vh)/2))";
    document.getElementById("logo").style.top = "3.75vh";
    // Logo
    document.getElementById("logo").src = "/static/rsc/img/logoAzultri.png";
    // Nav
    document.getElementsByClassName("navbar")[0].style.maxHeight = "15vh";
    document.getElementsByClassName("navbar")[0].style.height = "15vh";
  }
}

document.addEventListener('DOMContentLoaded', function () {
  scrollFunction();
})