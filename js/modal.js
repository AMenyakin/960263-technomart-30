const modal = document.querySelectorAll('.modal');
const openMapButton = document.querySelector('.map-button');
const showModalFeedbackButton = document.querySelector('.feedback-button');
const productList = document.querySelector('.product-list');
const modalMap = document.querySelector('.modal-map');
const modalFeedback = document.querySelector('.modal-feedback');
const modalOrder = document.querySelector('.modal-order');
const feedbackForm = modalFeedback.querySelector('.feedback-form');
const feedbackName = feedbackForm.querySelector('.feedback-name');
const feedbackEmail = feedbackForm.querySelector('.feedback-email');
const feedbackMessage = feedbackForm.querySelector('.feedback-message');

modal.forEach((el) => {
  const closeButton = el.querySelector('.modal-close-button');
  closeButton.addEventListener('click', () => {
    el.classList.remove('modal--show');
    el.classList.remove('modal--error');
  });
});

window.addEventListener('keydown', (evt) => {
  if (evt.code === 'Escape' || evt.keyCode === 27) {
    const activeModal = document.querySelector('.modal.modal--show');
    if (activeModal) {
      activeModal.classList.remove('modal--show');
      activeModal.classList.remove('modal--error');
    }
  }
});

openMapButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  modalMap.classList.add('modal--show');
});

showModalFeedbackButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  modalFeedback.classList.add('modal--show');
  feedbackName.focus();
});

productList.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('buy-button')) {
    modalOrder.classList.add('modal--show');
  }
});

feedbackForm.addEventListener('submit', (evt) => {
  if (modalFeedback.classList.contains('modal--error')) {
    modalFeedback.classList.remove('modal--error');
    /* трюк, чтобы анимация сработала повторно при ошибке */
    modalFeedback.offsetWidth = modalFeedback.offsetWidth;
  }

  const name = feedbackName.value;
  const email = feedbackEmail.value;
  const message = feedbackMessage.value;

  if (!name.trim() || !email.trim() || !message.trim()) {
    evt.preventDefault();
    modalFeedback.classList.add('modal--error');
  }
});
