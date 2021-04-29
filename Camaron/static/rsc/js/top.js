window.onscroll = function() {scrollFunction()};


function scrollFunction() {
  const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
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
}