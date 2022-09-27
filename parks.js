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
  content.innerHTML = '';
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


const submit = document.getElementById('submit');
const search = document.getElementById('search');

search.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    submit.click();
  }
});

submit.addEventListener('click', () => {
  console.log('click');
  const value = search.value.toUpperCase();
  search.value = '';
  const newSearch = async function () {
    const response = await fetch(`https://developer.nps.gov/api/v1/newsreleases?q=${value}&api_key=DrgGqSQI0K3HuUTWpnDxfSVbOIWaUSiITaC1GrlQ`);
    const search = await response.json();
    console.log(search);
    filterNews(search);
    updateHeader(value);
  }
  newSearch();
})

const updateHeader = (value) => {
  const h1 = document.querySelector('h1');
  const h3 = document.querySelector('h3');
  h1.textContent = `NPS ${value} NEWS`;
  h3.textContent = `Read the latest ${value}-related news from the National Park Service`
}