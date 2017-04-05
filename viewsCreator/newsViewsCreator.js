/**
 * Created by Valh on 04.04.2017.
 */
function createNewsBlock(arrayOfArticles, pageNumber) {
    const mainArticleDiv = document.createElement('div');
    mainArticleDiv.className = 'news';
    for (let i = (pageNumber - 1) * 5; i < arrayOfArticles.length && i < pageNumber * 5; i++) {
        mainArticleDiv.appendChild(createOneNew(arrayOfArticles[i]));
    }
    return mainArticleDiv;
}

function createOneNew(article) {
    const mainArticleDiv = document.createElement('div');
    mainArticleDiv.className = 'news__article';

    const title = document.createElement('div');
    title.className = 'article__title';
    title.innerHTML = article.title;
    mainArticleDiv.appendChild(title);

    const description = document.createElement('div');
    description.className = 'article__description';
    description.innerHTML = article.description;
    mainArticleDiv.appendChild(description);

    const url = document.createElement('a');
    url.href = article.url;
    url.className = 'article__url';
    url.innerHTML = 'Read more';
    description.appendChild(url);

    const img = document.createElement('img');
    img.className = 'article__img';
    img.src = article.urlToImage;
    mainArticleDiv.appendChild(img);

    const publishedAt = document.createElement('div');
    publishedAt.className = 'article__publishedAt';
    publishedAt.innerHTML = article.publishedAt;
    mainArticleDiv.appendChild(publishedAt);

    const author = document.createElement('div');
    author.className = 'article__author';
    author.innerHTML = article.author;
    mainArticleDiv.appendChild(author);

    return mainArticleDiv;

}

function createPagination(newsCount) {
    const symbolIndex = window.location.href.indexOf('#');
    const activeNumber = +window.location.href.slice(symbolIndex + 5);
    const paginationElement = document.createElement('div');
    paginationElement.className = 'pagination';
    const back = document.createElement('p');
    back.innerHTML = '<';
    back.className = 'pagination__page pagination__back';
    back.addEventListener("click", function () {
        if (pageNamber != 1) {
            history.pushState('', '', window.location.href.slice(0, symbolIndex) + '#page' + --pageNamber);
            createNewsElement()
        }
    }, false);
    paginationElement.appendChild(back);
    for (let i = 0; i < newsCount / 5; i++) {
        const pageNumberElement = document.createElement('p');
        pageNumberElement.innerHTML = i + 1;
        pageNumberElement.className = 'pagination__page';
        if (i == activeNumber - 1) {
            pageNumberElement.classList.add('pagination__active-page');
        }
        pageNumberElement.addEventListener("click", function () {
            history.pushState('', '', window.location.href.slice(0, symbolIndex) + '#page' + (i + 1));
            createNewsElement();
        }, false);
        paginationElement.appendChild(pageNumberElement);
    }
    const next = document.createElement('p');
    next.innerHTML = '>';
    next.className = 'pagination__page pagination__next';
    next.addEventListener("click", function () {
        if (pageNamber < Math.ceil(newsCount / 5)) {
            history.pushState('', '', window.location.href.slice(0, symbolIndex) + '#page' + ++pageNamber);
            createNewsElement();
        }
    }, false);
    paginationElement.appendChild(next);
    return paginationElement;
}

