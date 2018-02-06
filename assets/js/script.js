document.addEventListener("DOMContentLoaded", function(e) {

  // modal appear --> function when clicked
  const portfolioItems = document.getElementsByClassName("portfolio-item");
  const body = document.body;
  const navbar = document.getElementById("page-nav");

  [].forEach.call(portfolioItems, function(portfolioItem, portfolioIndex) {
    portfolioItem.addEventListener("click", function(e) {
      // change bodyClass to modal-open for disable the scroll
      body.classList.toggle("modal-open");
      navbar.classList.toggle("modal-open");

      // view the modal
      const portfolioItemId = portfolioItem.getAttribute('id');
      const re = /[1-9]+$/;
      const modalItemId = "modal-" + re.exec(portfolioItemId)[0];

      const modalItem = document.getElementById(modalItemId);
      modalItem.classList.toggle('modal-flex');
      modalItem.classList.toggle('modal-hidden');

    });
  });

  // close the modal after clicking the close button
  const modalButtons = document.getElementsByClassName("modal-button");
  [].forEach.call(modalButtons, function(modalButton, modalButtonIndex) {
    modalButton.addEventListener("click", function(e) {
      body.classList.toggle("modal-open");
      navbar.classList.toggle("modal-open");
      
      const portfolioItemId = modalButton.getAttribute('id');
      const re = /[1-9]+$/;
      const modalItemId = "modal-" + re.exec(portfolioItemId)[0];

      const modalItem = document.getElementById(modalItemId);
      modalItem.classList.toggle('modal-flex');
      modalItem.classList.toggle('modal-hidden');
    });
  });

  // change navbar color when scroll
  const navbarText = document.querySelector("page-nav a");
  document.addEventListener("scroll", function(e) {
    $('#navbar-checkbox').prop('checked', false);

    if (window.pageYOffset > 10) {
      navbar.classList.add("navbar-colored");
    } else {
      navbar.classList.remove("navbar-colored");
    }
  }); 

  // smooth scrolling using jquery TODO change to vanilla JS for idk reason
  $('a[href*="#page"]')
  // which not # and #0
  // .not('a[href=#inner-portfolio]') // do not select the modal close button
  // .not('a[href="#"]')
  // .not('a[href="#0"]')
  .click(function(event) {

    if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
    location.hostname == this.hostname) {
      let target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

      if (target.length) { // target.length if true is = 1
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, "easeInOutCirc", function() { // easeInOutCirc only available in jquery UI
          // callback after animation
          // must change focus
          let $target = $(target);
          $target.focus();
          if ($target.is(":focus")) {
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          }
        });
      }
    }
  });

  // close the menu on small screen
  
});