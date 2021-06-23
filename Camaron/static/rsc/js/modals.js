// Get the modal
var modal = document.getElementById("myModal");

var images = document.getElementsByClassName("imgMarca");
var modalImg = document.getElementById("img1");

var prevMarca = document.getElementById("prevMarca")
var nextMarca = document.getElementById("nextMarca")

function asignModals(j) {

  modal.style.display = "block";
  modalImg.src = images[j].src;

  prevMarca.onclick = function (event) {
    asignModals((j + 4) % (images.length - 1));
    event.stopPropagation();
  }

  nextMarca.onclick = function (event) {
    asignModals((j + 6) % (images.length - 1));
    event.stopPropagation();
  }
}

function createModalOnClicks() {
  for (let i = 0; i < images.length; i++) {
    let img = images[i]
    img.onclick = function () {
      asignModals(i)
    }
  }

  // Get the <span> element that closes the modal
  let span = document.getElementsByClassName("modal")[0];

  span.onclick = function () {
    modal.style.display = "none";
  }
}

document.addEventListener('DOMContentLoaded', function () {
  createModalOnClicks();
})