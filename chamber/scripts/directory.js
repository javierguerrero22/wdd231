const jsonFile = 'data/members.json';
const cards = document.querySelector('#cards');

async function getMembersData(jsonFile) {
    const response = await fetch(jsonFile);
    const members = await response.json();
    displayMembers(members);
}

getMembersData(jsonFile);

function displayMembers(members){
    members.forEach(member => {
        
        let card = document.createElement('section');
        let name = document.createElement('h3');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let website = document.createElement('a');
        let portrait = document.createElement('img');
        let level = document.createElement('p');
        let tagline = document.createElement('p');

        name.textContent = member.name;
        address.textContent = member.address;
        phone.textContent = member.phone;
        tagline.textContent = member.tagline;
        level.textContent = `Membership Level: ${member.membershipLevel}`
        website.textContent = member.website;
        website.href = member.website;
        website.setAttribute('target', '_blank');

        portrait.setAttribute('src', `images/${member.image}`);
        portrait.setAttribute('alt', `Logo of ${member.name}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '200');
        portrait.setAttribute('height', '150');

        card.appendChild(portrait);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);
        card.appendChild(level);

        cards.appendChild(card)
    });
}

const grid = document.querySelector('#grid');
const list = document.querySelector('#list');
const display = document.querySelector('#cards');

list.addEventListener('click', () => {
    display.classList.add('list');
    display.classList.remove('grid');
});

grid.addEventListener('click', () => {
    display.classList.add('grid');
    display.classList.remove('list');
});