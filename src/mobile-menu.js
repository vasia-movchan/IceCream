(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-menu-open]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    mobileMenu: document.querySelector('[data-menu]'),
    backDrop: document.querySelector('[menu-backdrop]'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.backDrop.classList.toggle('is-hidden');
    refs.mobileMenu.classList.toggle('is-hidden');
    document.body.classList.toggle("menu-open");
  }
})();