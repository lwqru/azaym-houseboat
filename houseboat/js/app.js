document.addEventListener("DOMContentLoaded", function () {

  window.showSection = function(section) {
    document.querySelectorAll('.section').forEach(sec => {
      sec.classList.remove('active');
    });

    document.getElementById(section).classList.add('active');
  };

  window.bookNow = function () {
    window.location.href = "https://wa.me/966536934662";
  };

  // السلايدر
  document.querySelectorAll('.slider').forEach(slider => {

    let images = slider.querySelectorAll('img');
    let dotsContainer = slider.querySelector('.dots');
    let index = 0;

    images[0].classList.add('active');

    // إنشاء النقاط
    images.forEach((_, i) => {
      let dot = document.createElement('span');

      if (i === 0) {
        dot.classList.add('active');
      }

      dotsContainer.appendChild(dot);

      dot.addEventListener('click', () => {
        changeSlide(i);
      });
    });

    let dots = dotsContainer.querySelectorAll('span');

    function changeSlide(i) {
      images[index].classList.remove('active');
      dots[index].classList.remove('active');

      index = i;

      images[index].classList.add('active');
      dots[index].classList.add('active');
    }

    // سوايب الجوال
    let startX = 0;

    slider.addEventListener("touchstart", e => {
      startX = e.touches[0].clientX;
    });

    slider.addEventListener("touchend", e => {
      let endX = e.changedTouches[0].clientX;

      if (startX - endX > 50) {
        let next = (index + 1) % images.length;
        changeSlide(next);
      }

      if (endX - startX > 50) {
        let prev = (index - 1 + images.length) % images.length;
        changeSlide(prev);
      }
    });

  });

});