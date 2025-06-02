// BEGIN
function formate() {
    document.body.innerHTML = document.body.innerHTML.split('\n')
        .map(line => line.trim())
        .filter(line => line)
        .map(line => `<p>${line}</p>`)
        .join('\n');
}
formate();
// END