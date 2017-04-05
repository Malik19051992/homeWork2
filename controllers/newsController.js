/**
 * Created by Valh on 04.04.2017.
 */

function createNewsElement() {
    news().then(
        (arrayNews) => {
            const pageNamber = +window.location.href.slice(window.location.href.indexOf('#')+5);
            const articles = JSON.parse(arrayNews).articles;

            showPagination(createPagination(articles.length), ((p) => { return p; })(pageNamber));
            return createNewsBlock(articles, ((p) => { return p; })(pageNamber));
        }
    ).then(
        (newsElement) => {
            showNewsElement(newsElement);
        }
    ).catch(
        () => {
            throw new Error('All break(((');
        }
    );
}

function news() {
    return getNews('https://newsapi.org/v1/articles?source=bbc-news&apiKey=db0ecaba141c44de9e210126c5c70ad1')
        .then(
            response => {
                return response;
            },
            error => {
                return error;
            }
        );
}



