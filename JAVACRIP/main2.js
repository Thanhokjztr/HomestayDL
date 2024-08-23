window.addEventListener('scroll', function() {
  var header = document.querySelector('.header');
  var headerHeight = header.offsetHeight;
  
  if (window.scrollY > headerHeight) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
});