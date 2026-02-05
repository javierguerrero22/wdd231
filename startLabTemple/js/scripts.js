import {temples} from '../data/temples.js'
console.log(temples) 

import {url} from '../data/temples.js'
console.log(url) 

const showHere = document.querySelector("#showHere")
const mydialog = document.querySelector('#mydialog')
const mytitle = document.querySelector('#mydialog h2')
const myclose = document.querySelector('#mydialog button')
const myinfo = document.querySelector('#mydialog p')

myclose.addEventListener('click', () => {
    mydialog.close()
})

function displayItems(data){
    console.log(data)
    data.forEach(element => {
        console.log(element)
        const photo = document.createElement('img')
        photo.src = `${url}${element.path}`
        photo.alt = element.name

        photo.addEventListener('click', () => showStuff(element));

        showHere.appendChild(photo)
    });
}
displayItems(temples)

function showStuff(element){
    mytitle.innerHTML = element.name
    myinfo.innerHTML = `Dedicated ${element.dedicated} by ${element.person} as temple number ${element.number}`
    mydialog.showModal()
}