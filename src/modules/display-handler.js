const displayWeather = (data) => {
  const displayContainer = document.querySelector('.display-container');

  const location = document.createElement('div');
  location.className = 'weather-location';
  location.textContent = data.resolvedAddress;

  const temperature = document.createElement('div');
  temperature.className = 'weather-temperature';
  temperature.textContent = `${data.currentConditions.temp} °C`;

  const humidity = document.createElement('div');
  humidity.className = 'weather-humidity';
  humidity.textContent = `${data.currentConditions.humidity} %`;

  const conditions = document.createElement('div');
  conditions.className = 'weather-conditions';
  conditions.textContent = data.currentConditions.conditions;

  displayContainer.textContent = '';
  displayContainer.append(location, temperature, humidity, conditions);
};

const displayError = (message) => {
  const displayContainer = document.querySelector('.display-container');
  const errorMessage = document.createElement('div');
  errorMessage.className = 'weather-errorMessage';
  errorMessage.textContent = message;

  displayContainer.textContent = '';
  displayContainer.appendChild(errorMessage);
};

export { displayWeather, displayError };
