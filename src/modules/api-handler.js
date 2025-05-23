import { displayWeather, displayError } from './display-handler.js';

const formSubmit = () => {
  const inputLocation = document.getElementById('input-location');
  if (!inputLocation.value.trim()) {
    displayError('Please enter a location');
    return;
  }
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
    if (!getData.ok) {
      throw new Error(`HTTP error! status: ${getData.status}`);
    }
    const getJson = await getData.json();
    displayWeather(getJson);
  } catch (error) {
    displayError(
      `${inputLocation} is not a valid location, try something else!`
    );
    console.error(error);
  } finally {
    console.log('Output Printed');
  }
}

export { formSubmit };
