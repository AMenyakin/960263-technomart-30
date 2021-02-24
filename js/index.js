import { ProductSlide, ProductSlider } from './product-slider.js';
import { WriteUsModal, ModalMap, ModalOrder } from './modal.js';


const productSliderConfig = {
  sliderSelector: '.slider',
  sliderTitleSelector: '.slider-content-title',
  sliderTextSelector: '.slider-content-text',
  buttonListSelector: '.slide-buttons-list',
  prevSlideButtonSelector: '.slider-left-button',
  nextSlideButtonSelector: '.slider-right-button',
  slides: [
    new ProductSlide('Перфораторы', 'Настоящие мужские игрушки', '/img/slider/slide-perforators.jpg'),
    new ProductSlide('Дрели', 'Соседям на радость!', '/img/slider/slide-drills.jpg')
  ]
};
const productSlider = new ProductSlider(productSliderConfig);
productSlider.init();


const writeUsModalConfig = {
  modalSelector: '.modal-feedback',
  triggerElementSelector: '.feedback-button',
  formSelector: '.feedback-form',
  nameInputSelector: '.feedback-name',
  emailInputSelector: '.feedback-email',
  messageInputSelector: '.feedback-message'
};
new WriteUsModal(writeUsModalConfig);


const modalMapConfig = {
  modalSelector: '.modal-map',
  triggerElementSelector: '.map-button',
};
new ModalMap(modalMapConfig);


const modalOrderConfig = {
  modalSelector: '.modal-order',
  triggerElementSelector: '.product-list',
};
new ModalOrder(modalOrderConfig);
