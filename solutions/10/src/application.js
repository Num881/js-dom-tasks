import escapeHtml from 'escape-html';

// BEGIN
function createElementFromHTML(html) {
    const container = document.createElement('div');
    container.innerHTML = html.trim();
    return container.firstChild;
}

function FeedbackForm() {
    const formElement = document.querySelector('form');

    formElement.addEventListener('submit', event => {
        event.preventDefault();

        const data = new FormData(formElement);

        const safeEmail = escapeHtml(data.get('email'));
        const safeName = escapeHtml(data.get('name'));
        const safeComment = escapeHtml(data.get('comment'));

        const resultHTML = `
      <div class="result">
        <p>Feedback has been sent</p>
        <div>Email: ${safeEmail}</div>
        <div>Name: ${safeName}</div>
        <div>Comment: ${safeComment}</div>
      </div>
    `;

        const resultElement = createElementFromHTML(resultHTML);
        formElement.replaceWith(resultElement);
    });
}

export default FeedbackForm;
// END