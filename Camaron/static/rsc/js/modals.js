// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementsByClassName("imgMarca");
var modalImg = document.getElementById("img1");

for (var i = 0; i < img.length; i++) {
  var images = img[i]
  images.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
  }
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("modal")[0];


span.onclick = function () {
  modal.style.display = "none";
}