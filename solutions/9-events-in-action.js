export default () => {
  // BEGIN
    const navTabElements = document.querySelectorAll('[data-bs-toggle="tab"], [data-bs-toggle="pill"]');

    navTabElements.forEach(navTabElement => {
        navTabElement.addEventListener('click', (event) => {
            event.preventDefault();

            const navContainer = navTabElement.closest('.nav');
            const tabContentContainer = document.querySelector(navTabElement.dataset.bsTarget).closest('.tab-content');

            navContainer.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
            tabContentContainer.querySelectorAll('.tab-pane').forEach(pane => pane.classList.remove('active'));

            navTabElement.classList.add('active');

            const targetContent = document.querySelector(navTabElement.dataset.bsTarget);
            targetContent.classList.add('active');
        });
    });

    // END
};
