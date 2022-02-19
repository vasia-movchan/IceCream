(() => {
  const refs = {
    openModalBtn: document.querySelector('[contacts-modal-open]'),
    openModalBtn1: document.querySelector('[contacts-modal-open1]'),
    closeModalBtn: document.querySelector('[contacts-modal-close]'),
    modal: document.querySelector('[contacts-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.openModalBtn1.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();