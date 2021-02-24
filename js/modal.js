window.addEventListener('keydown', (evt) => {
  if (evt.code !== 'Escape' || evt.keyCode !== 27) {
    return;
  }

  const activeModal = document.querySelector('.modal.modal--show');
  if (activeModal) {
    activeModal.classList.remove('modal--show');
    activeModal.classList.remove('modal--error');
  }
});


class Modal {
  constructor(modalSelector, triggerElementSelector) {
    this.modal = document.querySelector(modalSelector);
    this.triggerElement = document.querySelector(triggerElementSelector);
    this.registerCloseButtonClickHandler();
    this.registerTriggerElementClickHandler();
  }

  registerCloseButtonClickHandler() {
    const closeButton = this.modal.querySelector('.modal-close-button');
    closeButton.addEventListener('click', () => {
      this.modal.classList.remove('modal--show');
      this.modal.classList.remove('modal--error');
    });
  }

  registerTriggerElementClickHandler() {
    this.triggerElement.addEventListener('click', (evt) => {
      evt.preventDefault();
      this.modal.classList.add('modal--show');
    });
  }
}


export class WriteUsModal extends Modal {
  constructor(config) {
    super(config.modalSelector, config.triggerElementSelector);
    this.writeUsForm = this.modal.querySelector(config.formSelector);
    this.nameInput = this.writeUsForm.querySelector(config.nameInputSelector);
    this.emailInput = this.writeUsForm.querySelector(config.emailInputSelector);
    this.messageInput = this.writeUsForm.querySelector(config.messageInputSelector);
    this.registerFormSubmitHandler();
  }

  registerTriggerElementClickHandler() {
    this.triggerElement.addEventListener('click', (evt) => {
      evt.preventDefault();
      this.modal.classList.add('modal--show');
      this.nameInput.focus();
    });
  }

  registerFormSubmitHandler() {
    this.writeUsForm.addEventListener('submit', (evt) => {

      if (this.modal.classList.contains('modal--error')) {
        this.modal.classList.remove('modal--error');
        /* трюк, чтобы анимация сработала повторно при ошибке */
        this.modal.offsetWidth;
      }

      const name = this.nameInput.value;
      const email = this.emailInput.value;
      const message = this.messageInput.value;

      if (!name.trim() || !email.trim() || !message.trim()) {
        evt.preventDefault();
        this.modal.classList.add('modal--error');
      }
    });
  }
}


export class ModalMap extends Modal {
  constructor(config) {
    super(config.modalSelector, config.triggerElementSelector);
  }
}


export class ModalOrder extends Modal {
  constructor(config) {
    super(config.modalSelector, config.triggerElementSelector);
  }

  registerFormSubmitHandler() {
    this.triggerElement.addEventListener('click', (evt) => {
      if (evt.target.classList.contains('buy-button')) {
        this.modal.classList.add('modal--show');
      }
    });
  }
}
