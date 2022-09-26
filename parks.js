//get the latest bird news from NPS api
const getNews = async function () {
  const response = await fetch('https://developer.nps.gov/api/v1/newsreleases?q=bird&api_key=DrgGqSQI0K3HuUTWpnDxfSVbOIWaUSiITaC1GrlQ');
  const news = await response.json();
 console.log(news);
  filterNews(news);
}

getNews();

//call the create card function for each array in the data received
const filterNews = (news) => {
  news.data.forEach(array => {
   createCard(array);
  })
}

const content = document.getElementById('content');
//make the cards
const createCard = (array) => {
  const card = content.appendChild(document.createElement('div'));
  card.classList.add('card');
  const title = card.appendChild(document.createElement('h2'));
  title.textContent = array.title;
  const description = card.appendChild(document.createElement('p'));
  description.textContent = array.abstract;
  const link = card.appendChild(document.createElement('a'));
  link.href = array.url;
  const url = link.appendChild(document.createElement('p'));
  url.textContent = array.url;
}
