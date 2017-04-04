/**
 * Created by Valh on 04.04.2017.
 */

function createNewsElement() {
    news().then(
        (arrayNews)=>{
            return createNewsBlock(JSON.parse(arrayNews).articles);
        }
    ).then(
        (newsElement)=>{showElement(newsElement);}
    ).catch(
        ()=>{throw new Error('All break(((');}
    );
}

function news() {
    return getNews('https://newsapi.org/v1/articles?source=bbc-news&apiKey=db0ecaba141c44de9e210126c5c70ad1')
        .then(
            response => {return response;},
            error => {return error;}
        );
}
