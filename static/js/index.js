// Reveal-on-scroll for elements tagged with .scroll-element
function checkScroll() {
  const elements = document.querySelectorAll('.scroll-element');
  elements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 120;
    if (elementTop < window.innerHeight - elementVisible) {
      element.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', checkScroll);
window.addEventListener('load', checkScroll);
window.addEventListener('resize', checkScroll);

// Make sure all looping result clips start playing once they can.
document.addEventListener('DOMContentLoaded', function () {
  checkScroll();
  document.querySelectorAll('video.autoloop').forEach(function (v) {
    v.addEventListener('canplay', function () {
      const p = v.play();
      if (p && p.catch) { p.catch(function () {}); }
    });
  });
});
