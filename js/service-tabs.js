(function() {
  const services = document.querySelector('.services');
  const tabList = document.querySelector('.services-list');
  const tabs = Array.from(tabList.querySelectorAll('.service-item'));
  const sections = Array.from(services.querySelectorAll('.service-info'));

  tabList.addEventListener('click', (evt) => {
    if (evt.target.tagName !== 'BUTTON') {
      return;
    }

    if (evt.target.classList.contains('service-item-active')) {
      return;
    }

    const activeTab = tabs.find(button => button.classList.contains('service-item-active'));
    if (activeTab) {
      activeTab.classList.remove('service-item-active');
    }

    const newActiveTab = evt.target;
    newActiveTab.classList.add('service-item-active');

    const activeSection = sections.find(section => section.classList.contains('service-active'));
    if (activeSection) {
      activeSection.classList.remove('service-active');
    }

    const sectionClassName = newActiveTab.dataset.sectionClassName;
    const newActiveSection = sections.find(section => section.classList.contains(sectionClassName));
    if (newActiveSection) {
      newActiveSection.classList.add('service-active');
    } else {
      throw new Error(`Section with class "${sectionClassName}" not found!`);
    }
  });
})();
