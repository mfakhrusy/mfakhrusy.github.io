document.addEventListener("DOMContentLoaded", function(e) {

  // modal function when clicked
  const portfolioItems = document.getElementsByClassName("portfolio-item");
  const body = document.body;

  [].forEach.call(portfolioItems, function(portfolioItem, portfolioIndex) {
    portfolioItem.addEventListener("click", function(e) {
      // change bodyClass to modal-open for disable the scroll
      body.classList.toggle("modal-open");

      // view the modal
      const portfolioItemId = portfolioItem.getAttribute('id');
      const re = /[1-9]+$/;
      const modalItemId = "modal-" + re.exec(portfolioItemId)[0];

      const modalItem = document.getElementById(modalItemId);
      modalItem.classList.toggle('modal-flex');
      modalItem.classList.toggle('modal-hidden');

    });
  });

  // close the modal
  const modalButtons = document.getElementsByClassName("modal-button");
  [].forEach.call(modalButtons, function(modalButton, modalButtonIndex) {
    modalButton.addEventListener("click", function(e) {
      body.classList.toggle("modal-open");
      
      const portfolioItemId = modalButton.getAttribute('id');
      const re = /[1-9]+$/;
      const modalItemId = "modal-" + re.exec(portfolioItemId)[0];

      const modalItem = document.getElementById(modalItemId);
      modalItem.classList.toggle('modal-flex');
      modalItem.classList.toggle('modal-hidden');
    });
  });
});