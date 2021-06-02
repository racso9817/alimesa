// Logo
document.getElementById("logo").src = "/static/rsc/img/LogoCamaronBlanco.png";
document.getElementById("logo").style.height = "8vw";
document.getElementById("logo").style.width = "7vw";
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
//document.getElementsByClassName("navbar")[0].style.marginTop = "-3vw";