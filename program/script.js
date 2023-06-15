const carousel = document.querySelector('.carousel');
firstImg = carousel.querySelectorAll("img")[0];
arrowIcons = document.querySelectorAll(".wrapper i");

let isDragStart = false, prevPageX, prevScrollLeft, positionDiff;
let firstImgWidth = firstImg.clientWidth + 14;

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
    });
});
const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if(!isDragStart) return;
    e.preventDefault();
    carousel.classList.add("dragging")
    let positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
}

const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove("dragging");
}
carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);

carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);

carousel.addEventListener("mouseup", dragStop);
carousel.addEventListener("mouseleave", dragStop);
carousel.addEventListener("touchend", dragStop);

const form = document.getElementById('whatsapp-form');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const nama = document.getElementById('nama').value;
  const instansi = document.getElementById('instansi').value;
  const email = document.getElementById('email').value;
  const nohp = document.getElementById('nohp').value;

  const message = `Nama Lengkap : ${encodeURIComponent(nama)}, Instansi : ${encodeURIComponent(instansi)}, Email : ${encodeURIComponent(email)}, No HP : ${encodeURIComponent(nohp)}.`;
  const encodedMessage = encodeURIComponent(message);

  const url = `https://wa.me/6281280128723?text=${encodedMessage}`;

  window.location.href = url;
});
const buttons = document.querySelectorAll('.btn-collapse');

buttons.forEach(button => {
  button.addEventListener('click', function() {
    this.querySelector('i.fa').classList.toggle('rotate');
  });
});
