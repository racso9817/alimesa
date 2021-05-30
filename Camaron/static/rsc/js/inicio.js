
window.onscroll = function() {
  scrollFunction()
};

function scrollFunction() {
  const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
  const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
  // Cambiar color
  // MaxHeight del carouselExampleCaptions + 0.015
  if (document.body.scrollTop > vh*0.9 || document.documentElement.scrollTop > vh*0.9) {
    // Logo
    document.getElementById("logo").src = "/static/rsc/img/LogoCamaronBlanco.png";
    document.getElementById("logo").style.height = "16vh";
    document.getElementById("logo").style.width = "8vw";
    // Nav
    document.getElementsByClassName("nav-container")[0].style.background = "linear-gradient(180deg, rgba(0, 99, 181, 1) 0%, rgba(0, 79, 157, 1) 50%, rgba(0, 55, 130, 1) 100%)";
    document.getElementsByClassName("contactosEidioma-nav")[0].style.background = "rgb(255, 255, 255)";
    document.getElementById("tlf").src = "/static/rsc/img/tlfAzul.png";
    document.getElementById("mail").src = "/static/rsc/img/mailAzul.png";
    //Titulos
    Array.prototype.forEach.call(document.getElementsByClassName("opcionMenu"), function(n) {
      n.style.color = "rgb(255, 255, 255)";
    });
    // DatosEIdioma
    Array.prototype.forEach.call(document.getElementsByClassName("linksCEI"), function(n) {
      n.style.color = "#00509A";
    });
  } else {
    document.getElementById("logo").src = "/static/rsc/img/logoAzul.png";
    document.getElementById("logo").style.height = "15vh";
    document.getElementById("logo").style.width = "6vw";
    // Nav
    document.getElementsByClassName("nav-container")[0].style.background = "rgb(255, 255, 255)";
    document.getElementById("tlf").src = "/static/rsc/img/phone.png";
    document.getElementById("mail").src = "/static/rsc/img/mail.png";
    //Titulos
    Array.prototype.forEach.call(document.getElementsByClassName("opcionMenu"), function(n) {
      n.style.color = "rgb(0, 0, 0)";
    });
    // DatosEIdioma
    document.getElementsByClassName("contactosEidioma-nav")[0].style.background = "linear-gradient(180deg, rgba(0, 99, 181, 1) 0%, rgba(0, 79, 157, 1) 50%, rgba(0, 55, 130, 1) 100%)";
    Array.prototype.forEach.call(document.getElementsByClassName("linksCEI"), function(n) {
      n.style.color = "rgb(255, 255, 255)";
    });
  }
}


document.addEventListener('DOMContentLoaded', function() {
  scrollFunction();
})