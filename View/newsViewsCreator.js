/**
 * Created by Valh on 04.04.2017.
 */
function createNewsBlock(arrayOfArticles) {
    const mainArticleDiv = document.createElement('div');
    mainArticleDiv.className = 'news';
    for(let i=0;i<arrayOfArticles.length;i++){
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
    url.href =  article.url;
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
