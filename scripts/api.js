const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=metric&appid=bb9ac6af7d4ad12de0cee2bcb1ea8c0c';

async function apiFetch(){
    try{
        let response = await fetch(url);
        if (response.ok){
            const data = await response.json();
            console.log(data);
            displayResources(data);
        }
        else{
            throw Error(await response.text());
        }
    }
    catch (error){
        console.log(error);
    }
}

apiFetch();

function displayResources(data){
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
  const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  let desc = data.weather[0].description;
  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  captionDesc.textContent = `${desc}`;
// console.log('hello')
}