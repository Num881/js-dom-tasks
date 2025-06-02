export default function prettify(document) {
    const divs = document.querySelectorAll('div');

    divs.forEach(div => {
        const childNodes = Array.from(div.childNodes);

        childNodes.forEach(node => {
            if (node instanceof Text && node.textContent.trim() !== '') {
                const p = document.createElement('p');
                p.textContent = node.textContent;

                node.replaceWith(p);
            }
        });
    });
}
