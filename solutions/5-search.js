export default (document) => {
    // BEGIN
    const content = document.querySelector('.content');

    const title = content.querySelector('h1').textContent.trim();
    const description = content.querySelector('.description').textContent.trim();

    const articles = content.querySelectorAll('.links > div');
    const items = Array.from(articles).map(article => {
        const articleTitle = article.querySelector('h2 a').textContent.trim();
        const articleDescription = article.querySelector('p').textContent.trim();
        return {
            title: articleTitle,
            description: articleDescription,
        };
    });

    return {
        title,
        description,
        items,
    };
    // END
};
