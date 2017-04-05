/**
 * Created by Valh on 04.04.2017.
 */
let pageNamber = 1;
const navNews = document.getElementById('nav-news');
const navMain = document.getElementById('nav-main');

navNews.addEventListener("click", function () {
    navNews.classList.add('nav-element__active');
    if(navMain.classList.contains('nav-element__active')){
        navMain.classList.remove('nav-element__active');
    }
    document.getElementById('main-page').style.display = 'none';
    const symbolIndex = window.location.href.indexOf('#');
    if(symbolIndex!==-1)
        history.pushState('', '', window.location.href.slice(0,symbolIndex)+'#page1');
    else
        history.pushState('', '', window.location.href+'#page1');
    createNewsElement();
}, false);

navMain.addEventListener("click", function () {
    navMain.classList.add('nav-element__active');
    const newsContent = document.getElementById('news-content');
    newsContent.innerHTML = '';
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = '';
    document.getElementById('main-page').style.display = 'block';
    if(navNews.classList.contains('nav-element__active')){
        navNews.classList.remove('nav-element__active');
    }
    const symbolIndex = window.location.href.indexOf('#');
    if(symbolIndex!==-1)
        history.pushState('', '', window.location.href.slice(0,symbolIndex)+'#main');
    else
        history.pushState('', '', window.location.href+'#page1');
}, false);



var storedHash = window.location.hash;
window.setInterval(function () {
    if (window.location.hash != storedHash) {
        storedHash = window.location.hash;
        const pageNamber = +window.location.href.slice(window.location.href.indexOf('#')+5);
        if(!pageNamber){
            navMain.click();
        }
        else{
            createNewsElement();
        }
    }
}, 100);


