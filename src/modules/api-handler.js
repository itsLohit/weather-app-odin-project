const formSubmit = () => {
  const inputLocation = document.getElementById('input-location');
  weatherFetcher(inputLocation.value);
};

async function weatherFetcher(inputLocation) {
  console.log(inputLocation);
  try {
    const getData = await fetch(
      'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/' +
        inputLocation +
        '?unitGroup=metric&key=4GM67NLGQL7JQ2AMLCLFNMU2T'
    );
    const getJson = await getData.json();
    console.log(getJson);
    console.log(getJson.resolvedAddress);
    console.log(getJson.currentConditions.temp);
    console.log(getJson.currentConditions.conditions);

    const displayContainer = document.querySelector('.display-container');
    const location = document.createElement('div');
    location.className = 'weather-location';
    location.innerText = getJson.resolvedAddress;

    const temperature = document.createElement('div');
    temperature.className = 'weather-temperature';
    temperature.innerText = getJson.currentConditions.temp + '°C';

    const humidity = document.createElement('div');
    humidity.className = 'weather-humidity';
    humidity.innerText = getJson.currentConditions.humidity + '%';

    const conditions = document.createElement('div');
    conditions.className = 'weather-conditions';
    conditions.innerText = getJson.currentConditions.conditions;

    displayContainer.innerHTML = '';

    displayContainer.appendChild(location);
    displayContainer.appendChild(temperature);
    displayContainer.appendChild(humidity);
    displayContainer.appendChild(conditions);
  } catch (error) {
    const displayContainer = document.querySelector('.display-container');
    const errorMessage = document.createElement('div');
    errorMessage.className = 'weather-errorMessage';
    errorMessage.innerText = inputLocation + ' is not a valid location, try something else!';

    displayContainer.innerHTML = '';
    displayContainer.appendChild(errorMessage);
    console.log(error);
  } finally {
    console.log('Output Printed');
  }
}

export { formSubmit, weatherFetcher };
