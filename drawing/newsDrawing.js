/**
 * Created by Valh on 04.04.2017.
 */
function showNewsElement(newElement) {
    const newsContent = document.getElementById('news-content');
    newsContent.innerHTML = '';
    newsContent.appendChild(newElement);
}

function showPagination(newElement) {
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = '';
    pagination.appendChild(newElement);
}