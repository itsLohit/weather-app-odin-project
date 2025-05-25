const displayWeather = (data) => {
  const displayContainer = document.querySelector('.weather-display');

  const location = document.createElement('div');
  location.className = 'weather__location';
  location.textContent = data.resolvedAddress;

  const temperature = document.createElement('div');
  temperature.className = 'weather__temperature';
  temperature.textContent = `${data.currentConditions.temp} °C`;

  const feelsLike = document.createElement('div');
  feelsLike.className = 'weather__feels-like';
  feelsLike.textContent = `Feels Like: ${data.currentConditions.feelslike} °C`;

  const humidity = document.createElement('div');
  humidity.className = 'weather__humidity';
  humidity.textContent = `Humidity: ${data.currentConditions.humidity} %`;

  const wind = document.createElement('div');
  wind.className = 'weather__wind';
  wind.textContent = `Wind Speed: ${data.currentConditions.windspeed}`;

  const conditions = document.createElement('div');
  conditions.className = 'weather__conditions';
  conditions.textContent = data.currentConditions.conditions;
  displayContainer.append(
    location,
    temperature,
    feelsLike,
    humidity,
    wind,
    conditions
  );
};

const displayError = (message) => {
  const displayContainer = document.querySelector('.weather-display');
  const errorMessage = document.createElement('div');
  errorMessage.className = 'weather__error-message';
  errorMessage.textContent = message;
  displayContainer.appendChild(errorMessage);
};

const clearDisplay = () => {
  const displayContainer = document.querySelector('.weather-display');
  displayContainer.textContent = '';
};

export { displayWeather, displayError, clearDisplay };
