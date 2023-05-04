(function(){
    let modal = document.querySelector('.profile__form');
    let closeButton = document.querySelector('.profile__form-close');
    let modalTriggers = document.querySelectorAll('[data-trigger]');
  
    let isModalOpen = false;
    let pageYOffset = 0;
  
    const openModal = function() {
      pageYOffset = window.pageYOffset;
      modal.classList.add('is-open');
      isModalOpen = true;
    }
  
    const closeModal = function() {
      modal.classList.remove('is-open');
      isModalOpen = false;
    }
  
    const onScroll = function(e) {
      if (isModalOpen) {
        e.preventDefault();
        window.scrollTo(0, pageYOffset);
      }
    }
  
    modalTriggers.forEach(function(item) { 
      item.addEventListener('click', openModal);
    })
  
    document.addEventListener('scroll', onScroll);
  
    closeButton.addEventListener('click', closeModal);
  })();