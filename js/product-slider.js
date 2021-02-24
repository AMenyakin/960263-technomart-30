export class ProductSlide {
  constructor(title, text, backgroundUrl) {
    this.title = title;
    this.text = text;
    this.backgroundUrl = backgroundUrl;
  }
}

export class ProductSlider {
  activeSlideIndex = 0;
  slides;

  constructor(config) {
    this.slider = document.querySelector(config.sliderSelector);
    this.sliderTitle = document.querySelector(config.sliderTitleSelector);
    this.sliderText = document.querySelector(config.sliderTextSelector);
    this.slideButtonList = document.querySelector(config.buttonListSelector);
    this.prevSlideButton = document.querySelector(config.prevSlideButtonSelector);
    this.nextSlideButton = document.querySelector(config.nextSlideButtonSelector);
    this.slides = config.slides || [];
  }

  init() {
    if (!this.slides.length) {
      return;
    }

    this.renderSlideButtons();
    this.registerListeners();
    this.selectSlide(this.activeSlideIndex);
  }

  renderSlideButtons() {
    const fragment = document.createDocumentFragment();

    for (const index of this.slides.keys()) {
      fragment.append(this.wrapSlideButton(this.createSlideButton(index)));
    }

    this.slideButtonList.innerHTML = '';
    this.slideButtonList.append(fragment);
  }

  createSlideButton(buttonIndex) {
    const buttonElement = document.createElement('button');
    buttonElement.dataset.index = buttonIndex;
    buttonElement.type = 'button';
    buttonElement.classList.add('slide-button');
    if (buttonIndex === this.activeSlideIndex) {
      buttonElement.classList.add('current-slide');
    }
    buttonElement['aria-label'] = `К слайду №${buttonIndex}`;

    return buttonElement;
  }

  wrapSlideButton(buttonElement) {
    const liElement = document.createElement('li');
    liElement.append(buttonElement);

    return liElement;
  }

  registerListeners() {
    this.prevSlideButton.addEventListener('click', () => {
      const nextIndex = this.activeSlideIndex - 1 < 0 ? this.slides.length - 1 : this.activeSlideIndex - 1;
      this.selectSlide(nextIndex);
    });

    this.nextSlideButton.addEventListener('click', () => {
      const nextIndex = this.activeSlideIndex + 1 === this.slides.length ? 0 : this.activeSlideIndex + 1;
      this.selectSlide(nextIndex);
    });

    this.slideButtonList.addEventListener('click', (evt) => {
      if (evt.target.tagName !== 'BUTTON') {
        return;
      }

      if (evt.target.classList.contains('current-slide')) {
        return;
      }

      const newActiveButton = evt.target;
      const slideIndex = Number(newActiveButton.dataset.index);
      this.selectSlide(slideIndex);
    });
  }

  selectSlide(index) {
    const slide = this.slides[index];
    this.sliderTitle.innerText = slide.title;
    this.sliderText.innerText = slide.text;
    this.slider.style['background-image'] = `url(.${slide.backgroundUrl})`;
    this.activeSlideIndex = index;

    const activeButton = this.slideButtonList.querySelector('.current-slide');
    if (activeButton) {
      activeButton.classList.remove('current-slide');
    }

    const newActiveButton = this.slideButtonList.querySelector(`[data-index="${index}"]`);
    newActiveButton.classList.add('current-slide');
  }
}
