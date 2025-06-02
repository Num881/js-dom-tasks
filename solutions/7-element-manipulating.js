import camelCase from 'lodash/camelCase';

// BEGIN
export default function normalize(document) {
    const elements = document.body.getElementsByTagName('*');

    for (const elem of elements) {
        const newClasses = [];

        for (const clas of elem.classList) {
            newClasses.push(camelCase(clas));
        }

        elem.className = '';

        newClasses.forEach(c => elem.classList.add(c));
    }
}
// END