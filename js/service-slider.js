(
  function() {
    const services = document.querySelector('.services');
    const serviceButtonList = document.querySelector('.services-list');
    const buttons = Array.from(serviceButtonList.querySelectorAll('.service-item'));
    const sections = Array.from(services.querySelectorAll('.service-info'));

    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const activeButton = buttons.find(button => button.classList.contains('service-item-active'));
        if (activeButton) {
          activeButton.classList.remove('service-item-active');
        }
        button.classList.add('service-item-active');

        const activeSection = sections.find(section => section.classList.contains('service-active'));
        if (activeSection) {
          activeSection.classList.remove('service-active');
        }

        const sectionClassName = button.dataset.sectionClassName;
        const newActiveSection = sections.find(section => section.classList.contains(sectionClassName));
        if (newActiveSection) {
          newActiveSection.classList.add('service-active');
        } else {
          throw new Error(`Section with class "${sectionClassName}" not found!`);
        }
      });
    });
  }
)();
