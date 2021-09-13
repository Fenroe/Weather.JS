const apikey = '4242117a719af85dc6294dba6348594e';
let city = 'London';
const unit = 'metric';
const linkStatic = 'http://api.openweathermap.org/data/2.5/weather?';

const searchBar = document.querySelector('.search-bar');
const searchButton = document.querySelector('.search-bar-button');
const weatherDisplay = document.querySelector('.search-bar-container');
const cityName = document.querySelector('.city-name');
const country = document.querySelector('.country');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const icon = document.querySelector('.icon');
const errorMessage = document.querySelector('.error-message');

function getFetchLink() {
  return `${linkStatic}q=${city}&units=${unit}&appid=${apikey}`;
}

async function getWeather() {
  const weather = await fetch(getFetchLink(), { mode: 'cors' });
  const data = await weather.json();
  return data;
}

function fillPage() {
  getWeather().then((data) => {
    if (document.querySelector('.hide') === weatherDisplay) {
      weatherDisplay.classList.remove('hide');
    }
    cityName.textContent = data.name;
    country.textContent = data.sys.country;
    const temp = Math.round(data.main.temp);
    temperature.textContent = temp;
    description.textContent = data.weather[0].description;
    icon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
  }).catch((error) => {
    errorMessage.textContent = 'Oops. Something went wrong. Check your spelling and try again.';
    console.log(error);
  });
}

function initSearchButton() {
  searchButton.addEventListener('click', () => {
    city = searchBar.value;
    fillPage();
  });
}

initSearchButton();
