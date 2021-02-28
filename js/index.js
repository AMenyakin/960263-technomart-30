import { ProductSlide, ProductSlider } from './product-slider.js';
import { WriteUsModal, ModalMap, ModalOrder } from './modal.js';


const productSliderConfig = {
  sliderSelector: '.slider',
  sliderTitleSelector: '.slider-title',
  sliderTextSelector: '.slider-text',
  buttonListSelector: '.slide-buttons',
  prevSlideButtonSelector: '.prev-slide-button',
  nextSlideButtonSelector: '.next-slide-button',
  slides: [
    new ProductSlide('Перфораторы', 'Настоящие мужские игрушки', '/img/slider/slide-perforators.jpg'),
    new ProductSlide('Дрели', 'Соседям на радость!', '/img/slider/slide-drills.jpg')
  ]
};
const productSlider = new ProductSlider(productSliderConfig);
productSlider.init();


const writeUsModalConfig = {
  modalSelector: '.write-us-modal',
  triggerElementSelector: '.write-us-button',
  formSelector: '.write-us-form',
  nameInputSelector: '.write-us-name',
  emailInputSelector: '.write-us-email',
  messageInputSelector: '.write-us-message'
};
new WriteUsModal(writeUsModalConfig);


const modalMapConfig = {
  modalSelector: '.modal-map',
  triggerElementSelector: '.map-button',
};
new ModalMap(modalMapConfig);


const modalOrderConfig = {
  modalSelector: '.modal-order',
  triggerElementSelector: '.products',
};
new ModalOrder(modalOrderConfig);
