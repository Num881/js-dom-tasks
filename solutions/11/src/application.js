import 'whatwg-fetch';

export default () => {
  // BEGIN
    const inputs = document.querySelectorAll('input[data-autocomplete-source]');

    const handleInputChange = async (event) => {
        const inputElement = event.target;
        const apiUrl = inputElement.dataset.autocomplete;
        const listId = inputElement.dataset.autocompleteName;

        const baseUrl = new URL(apiUrl, window.location.origin);
        baseUrl.searchParams.append('query', inputElement.value);

        const response = await fetch(baseUrl);
        const data = await response.json();

        const suggestionList = document.querySelector(`ul[data-autocomplete-name="${listId}"]`);
        suggestionList.innerHTML = '';

        if (Array.isArray(data) && data.length > 0) {
            data.forEach(item => {
                const listEntry = document.createElement('li');
                listEntry.innerText = item;
                suggestionList.appendChild(listEntry);
            });
        } else {
            const emptyItem = document.createElement('li');
            emptyItem.textContent = 'No results';
            suggestionList.appendChild(emptyItem);
        }
    };

    inputs.forEach(input => {
        input.addEventListener('input', handleInputChange);
    });
    // END
};
