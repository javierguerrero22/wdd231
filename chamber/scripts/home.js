const minTemp = document.querySelector('#min-temp');
const maxTemp = document.querySelector('#max-temp');
const humidity = document.querySelector('#humidity');
const sunrise = document.querySelector('#sunrise') ;
const sunset = document.querySelector('#sunset') ;
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#figcaption');
const todayW = document.querySelector('#today');
const tomorrowW = document.querySelector('#tomorrow');
const afTomorrowW = document.querySelector('#after-tomorrow');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=9.73242&lon=-63.18773&units=metric&appid=bb9ac6af7d4ad12de0cee2bcb1ea8c0c';
const urlForecast = 'https://api.openweathermap.org/data/2.5/forecast?lat=9.73242&lon=-63.18773&units=metric&appid=bb9ac6af7d4ad12de0cee2bcb1ea8c0c';

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
async function apiFetchForecast(){
    try{
        let response = await fetch(urlForecast);
        if (response.ok){
            const data = await response.json();
            console.log(data);
            displayResourcesForecast(data);
        }
        else{
            throw Error(await response.text());
        }
    }
    catch (error){
        console.log(error);
    }
}
apiFetchForecast();

async function displayResourcesForecast(data){
   
    tomorrowW.innerHTML = `Tomorrow: <span>${data.list[3].main.temp}&deg;C</span>`;
    afTomorrowW.innerHTML = `Day After Tomorrow: <span>${data.list[11].main.temp}&deg;C</span>`;
}
async function displayResources(data){
    const sunriseTimestamp = data.sys.sunrise;
    const sunriseDate = new Date(sunriseTimestamp * 1000);
    const sunriseTime = sunriseDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    const sunsetTimestamp = data.sys.sunset;  
    const sunsetDate = new Date(sunsetTimestamp * 1000);
    const sunsetTime = sunsetDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

     todayW.innerHTML = `Today: <span>${data.main.temp}&deg;C</span>`;
    currentTemp.innerHTML = `${data.main.temp}&deg;C`;
  const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  let desc = data.weather[0].description;

//   today.innerHTML = `Hight: ${data.main.temp_max}&deg;C`;

  maxTemp.innerHTML = `Hight: ${data.main.temp_max}&deg;C`;
  minTemp.innerHTML = `Low: ${data.main.temp_min}&deg;C`;
  humidity.innerHTML = `Humidity: ${data.main.humidity}%`;
  sunrise.innerHTML = `Sunrise: ${sunriseTime}`;
  sunset.innerHTML = `Sunset: ${sunsetTime}`;

  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  captionDesc.textContent = `${desc}`;
}


const jsonFile = 'data/members.json';
async function getMembersData(jsonFile) {
    const response = await fetch(jsonFile);
    const members = await response.json();
    loadSpotlights(members);
}

getMembersData(jsonFile);

async function loadSpotlights(members){
    const elegibleMembers = members.filter(m => m.membershipLevel === "Gold" || m.membershipLevel === "Silver" )

    const shuffled = elegibleMembers.sort(() => 0.5 - Math.random())

    const selectedMember = shuffled.slice(0, 3)

    displaySpotlights(selectedMember)
}
async function displaySpotlights(members) {
    const cards = document.querySelector('.business')
    
   members.forEach(member => {        
        let card = document.createElement('section');
        let name = document.createElement('h2');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let websiteContainer = document.createElement('p');
        let websiteLink = document.createElement('a');
        let portrait = document.createElement('img');
        let level = document.createElement('p');
        let tagline = document.createElement('p');
        let divBusiness = document.createElement('div')
        let divContact = document.createElement('div')

        divBusiness.classList.add('business-details')
        divContact.classList.add('contact-info')

        name.textContent = member.name;
        address.innerHTML = `<span>Address:</span> ${member.address}`;
        phone.innerHTML = `<span>Phone:</span> ${member.phone}`;
        tagline.textContent = member.tagline;
        level.innerHTML = `<span>Level:</span> ${member.membershipLevel}`
        websiteContainer.innerHTML = `<span>URL:</span> `; 
        websiteLink.textContent = member.website;
        websiteLink.href = member.website;
        websiteLink.setAttribute('target', '_blank');

        portrait.setAttribute('src', `images/${member.image}`);
        portrait.setAttribute('alt', `Logo of ${member.name}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '150');
        portrait.setAttribute('height', '150');

        websiteContainer.appendChild(websiteLink);

        card.appendChild(name);
        card.appendChild(tagline);
        card.appendChild(divBusiness)

        divBusiness.appendChild(portrait);
        divBusiness.appendChild(divContact)
        divContact.appendChild(address);
        divContact.appendChild(phone);
        divContact.appendChild(websiteContainer);
        divContact.appendChild(level);

        cards.appendChild(card)
    });
}