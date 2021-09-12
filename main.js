const apikey = '4242117a719af85dc6294dba6348594e';
const city = 'London';
const unit = 'metric';

async function getWeather() {
  const weather = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${apikey}`, { mode: 'cors' });
  const data = await weather.json();
  console.log(data.main.temp);
  console.log(data.main.feels_like);
  console.log(data.main.humidity);
  console.log(data.pizza);
}

getWeather().catch((error) => {
  console.log(error);
  console.log('failure');
});