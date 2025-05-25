import { displayWeather, displayError, clearDisplay } from './display-handler.js';
import { showLoader, hideLoader } from './loader-handler.js';

const formSubmit = () => {
  const inputLocation = document.getElementById('input-location');
  if (!inputLocation.value.trim()) {
    clearDisplay();
    displayError('Please enter a location');
    return;
  }
  clearDisplay();
  showLoader();
  weatherFetcher(inputLocation.value);
};

async function weatherFetcher(inputLocation) {
  console.log(inputLocation);
  try {
    const getData = await fetch(
      'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/' +
        inputLocation +
        '?unitGroup=metric&key=ZA893WHKT3B27LQJFN2Y9G5NC'
    );
    if (!getData.ok) {
      throw new Error(`HTTP error! status: ${getData.status}`);
    }
    const getJson = await getData.json();
    console.log(getJson);
    displayWeather(getJson);
  } catch (error) {
    displayError(
      `${inputLocation} is not a valid location, try something else!`
    );
    console.error(error);
  } finally {
    hideLoader();
    console.log('Output Printed');
  }
}

export { formSubmit };
