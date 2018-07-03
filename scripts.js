const app = document.getElementById('root');
const xhr = new XMLHttpRequest();

// So, we just reference other js objects in the same folder like this.
const myKey = config.MY_NEWSAPI_KEY;
xhr.open('GET', 'https://newsapi.org/v2/top-headlines?country=us&apikey=' + myKey, true);
xhr.onload = function() {
    
    let data = JSON.parse(xhr.response);
    data.articles.forEach( function(newsItem) {

        let card = document.createElement('div');
        card.setAttribute('class', 'card'); 
        app.appendChild(card);

        let date = document.createElement('div');
        date.setAttribute('class', 'date');
        card.appendChild(date);

        let title = document.createElement('div');
        title.setAttribute('class', 'title');
        card.appendChild(title);

        // console.log( newsItem.title);
        // card.innerHTML = newsItem.title;
        date.textContent = newsItem.publishedAt;
        title.textContent = newsItem.title;
    });
};
xhr.send();

