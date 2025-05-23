const formSubmit = () => {
  const inputLocation = document.getElementById('input-location');
  weatherFetcher(inputLocation.value);
};

async function weatherFetcher(inputLocation) {
  console.log(inputLocation);
  try {
    const getData = await fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" + inputLocation + "?unitGroup=metric&key=4GM67NLGQL7JQ2AMLCLFNMU2T");
    const getJson = await getData.json();
    console.log(getJson);
    console.log(getJson.resolvedAddress);
    console.log(getJson.currentConditions.temp);
    console.log(getJson.currentConditions.conditions);
  } catch {}
}

export { formSubmit, weatherFetcher };
