// Get the modal
var modal = document.getElementById("myModal");

// function openModal() {
//   modal.style.display = 'block';
// }

// var slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("imgMarca");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//   }
//   slides[slideIndex-1].style.display = "block";
// }


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