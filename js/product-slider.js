(
  function() {
    const sliderConfig = {
      sliderSelector: '.slider',
      sliderTitleSelector: '.slider-content-title',
      sliderTextSelector: '.slider-content-text',
      buttonsListSelector: '.slide-buttons-list',
      prevSlideButtonSelector: '.slider-left-button',
      nextSlideButtonSelector: '.slider-right-button',
      slides: [
        new ProductSlide('Перфораторы', 'Настоящие мужские игрушки', '/img/slider/slide-perforators.jpg'),
        new ProductSlide('Дрели', 'Соседям на радость!', '/img/slider/slide-drills.jpg')
      ]
    };

    function ProductSlide(title, text, backgroundUrl) {
      this.title = title;
      this.text = text;
      this.backgroundUrl = backgroundUrl;
    }

    function ProductSlider(config) {
      this.currentIndex = 0;
      this.slider = document.querySelector(config.sliderSelector);
      this.sliderTitle = document.querySelector(config.sliderTitleSelector);
      this.sliderText = document.querySelector(config.sliderTextSelector);
      this.slideButtonsList = document.querySelector(config.buttonsListSelector);
      this.prevSlideButton = document.querySelector(config.prevSlideButtonSelector);
      this.nextSlideButton = document.querySelector(config.nextSlideButtonSelector);
      this.slides = config.slides || [];
    }

    ProductSlider.prototype.init = function() {
      if (!this.slides.length) {
        return;
      }

      const fragment = document.createDocumentFragment();

      this._slideButtons = this.slides.map((_slide, index) => {
        const liElement = document.createElement('li');
        const buttonElement = document.createElement('button');
        buttonElement.type = 'button';
        buttonElement.classList.add('slide-button');
        buttonElement['aria-label'] = `К слайду №${index}`;
        buttonElement.addEventListener('click', () => {
          this._selectSlide(index);
        });
        liElement.append(buttonElement);
        fragment.append(liElement);

        return buttonElement;
      });

      this.slideButtonsList.innerHTML = '';
      this.slideButtonsList.append(fragment);

      this.prevSlideButton.addEventListener('click', () => {
        const nextIndex = this.currentIndex - 1 < 0 ? this.slides.length - 1 : this.currentIndex - 1;
        this._selectSlide(nextIndex);
      });

      this.nextSlideButton.addEventListener('click', () => {
        const nextIndex = this.currentIndex + 1 === this.slides.length ? 0 : this.currentIndex + 1;
        this._selectSlide(nextIndex);
      });

      this._selectSlide(this.currentIndex);
    }

    ProductSlider.prototype._selectSlide = function(index) {
      const activeButton = this.slideButtonsList.querySelector('.current-slide');
      if (activeButton) {
        activeButton.classList.remove('current-slide');
      }

      const slide = this.slides[index];
      this.sliderTitle.innerText = slide.title;
      this.sliderText.innerText = slide.text;
      this.slider.style['background-image'] = `url(${slide.backgroundUrl})`;
      const newActiveButton = this._slideButtons[index];
      newActiveButton.classList.add('current-slide');
      this.currentIndex = index;
    }

    const productSlider = new ProductSlider(sliderConfig);
    productSlider.init();
  }
)();
