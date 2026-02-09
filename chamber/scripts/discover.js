import {places} from '../data/discover.mjs'
console.log(places)

const msToDays = 86400000;


const messageElement = document.querySelector("#visitor-message");
const lastVisit = window.localStorage.getItem("lastVisitDate"); 
const today = Date.now();


if (!lastVisit) {

    messageElement.textContent = "Welcome! Let us know if you have any questions.";
} else {

    const difference = today - parseInt(lastVisit);
    const daysSince = Math.floor(difference / msToDays); 

    if (difference < msToDays) {
       
        messageElement.textContent = "Back so soon! Awesome!";
    } else {
        
        const unit = (daysSince === 1) ? "day" : "days";
        messageElement.textContent = `You last visited ${daysSince} ${unit} ago.`;
    }
}


window.localStorage.setItem("lastVisitDate", today);


const container = document.querySelector("#allplaces");

places.forEach((place, index) => {
    const card = document.createElement("div");

    card.classList.add(`card-${index + 1}`, "location-card"); 
    
    card.innerHTML = `
    
        <h2>${place.placeName}</h2>
        <figure>
            <img src="${place.imageUrl}" alt="${place.placeName}" loading="lazy" width="300" height="200">
        </figure>
        <address>${place.location}</address>
        <p>${place.description}</p>
        <button class="learn-more">Learn More</button>
        
    `;
    
    container.appendChild(card);
});