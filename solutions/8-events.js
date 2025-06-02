export default () => {
  // BEGIN
    const button = document.getElementById('alert-generator');
    const alertsContainer = document.querySelector('.alerts');
    let alertCount = 0;

    button.addEventListener('click', () => {
        alertCount += 1;

        const alertDiv = document.createElement('div');
        alertDiv.className = 'alert alert-primary';
        alertDiv.textContent = `Alert ${alertCount}`;

        alertsContainer.prepend(alertDiv);
    });
  // END
};