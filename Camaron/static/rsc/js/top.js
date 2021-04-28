window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
  if (document.body.scrollTop > vw*0.1 || document.documentElement.scrollTop > vw*0.1) {
    // Logo
    document.getElementById("logo").style.maxHeight = "7.5vw";
    document.getElementById("logo").style.left = "46.25vw";
    // Nav
    document.getElementsByClassName("navbar")[0].style.maxHeight = "8vw";
  } else {
    // Logo
    document.getElementById("logo").style.maxHeight = "10.5vw";
    document.getElementById("logo").style.left = "44.75vw";
    // Nav
    document.getElementsByClassName("navbar")[0].style.maxHeight = "10vw";
  }
}