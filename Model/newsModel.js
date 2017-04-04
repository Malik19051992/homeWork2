/**
 * Created by Valh on 04.04.2017.
 */
function showElement(newElement) {
    const newsContent = document.getElementById('news-content');
    newsContent.innerHTML = '';
    newsContent.appendChild(newElement);
}