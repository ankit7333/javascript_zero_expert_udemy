'use strict';

// const { render } = require("react-dom");

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
console.log('----Simple Ajax Call----');
const getCountryData = function(country){
    const request = new XMLHttpRequest();
    request.open('GET', `https://restcountries.com/v2/name/${country}`);
    request.send();
    request.addEventListener('load', function(){
        const [data] = JSON.parse(this.responseText);
        console.log(data);
        const html = `
            <article class="country">
                <img class="country__img" src="${data.flag}" />
                <div class="country__data">
                    <h3 class="country__name">${data.name}</h3>
                    <h4 class="country__region">${data.region}</h4>
                    <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} people</p>
                    <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
                    <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
                </div>
            </article>`;
        countriesContainer.insertAdjacentHTML('beforeend', html);
        countriesContainer.style.opacity = 1;
    });
}
getCountryData('bharat');
getCountryData('usa');
getCountryData('germany');

console.log('-----callback hell-----');
const renderCountry = function(data, className = ''){
    const html = `
        <article class="country ${className}">
            <img class="country__img" src="${data.flag}" />
            <div class="country__data">
                <h3 class="country__name">${data.name}</h3>
                <h4 class="country__region">${data.region}</h4>
                <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} people</p>
                <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
                <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
            </div>
        </article>`;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    // countriesContainer.style.opacity = 1;
}
const getCountryAndNeighbour = function(country){
    //Ajax call country 1
    const request = new XMLHttpRequest();
    request.open('GET', `https://restcountries.com/v2/name/${country}`);
    request.send();
    request.addEventListener('load', function(){
        const [data] = JSON.parse(this.responseText);
        //Render country
        renderCountry(data);
        //neighbour country 2
        const [neighbour] = data.borders;
        if(!neighbour) return;
        //Ajax call country 2
        const request2 = new XMLHttpRequest();
        request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
        request2.send();
        request2.addEventListener('load', function(){
            const data2 = JSON.parse(this.responseText);
            renderCountry(data2, 'neighbour');
        });
    });
}
getCountryAndNeighbour('china');

console.log('-----consuming promises----');
const renderError = function(msg){
    countriesContainer.insertAdjacentText('beforeend', msg);
    // countriesContainer.style.opacity = 1;
}
const getCountryDataWithFetch = function(country){
    //Country 1
    fetch(`https://restcountries.com/v2/name/${country}`)
    // .then(function(response){
    //     console.log(response);
    //     return response.json();
    // })
    // .then(function(data){
    //     console.log(data);
    //     renderCountry(data[0]);
    // });
    .then(response => {
        response.json();
        if(!response.ok)
        throw new Error(`Country not found (${response.status})`);
        return response.json();
    })
    .then(data => {
        renderCountry(data[0])
        const neighbour = data[0].borders[0];
        if(!neighbour) throw new Error(`No neighbour found!`);
        //Country 2
        return fetch(`https://restcountries.com/v2/alpha/${neighbour}`)
    })
    .then(response => response.json())
    .then(data => renderCountry(data, 'neighbour'))
    .catch(err => {
        console.log(`${err} 🔥 🔥 🔥`);
        renderError(`Something went wrong 🔥 🔥 ${err.message}. Try again!`);
    })
    .finally(() => {
        countriesContainer.style.opacity = 1;
    });
};
btn.addEventListener('click', function(){
    getCountryDataWithFetch('dddd');
});
getCountryDataWithFetch('dddd');

// console.log('Event loop in practice');
// console.log('Test start');
// setTimeout(() => console.log('0 sec timer'), 0);
// Promise.resolve('Resolved promise 1').then(res => console.log(res));
// Promise.resolve('Resolved promise 2').then(res => {
//     for(let i=0; i< 10000000000; i++){}
//     console.log(res);
// })
// console.log('Test end');

console.log('Promise Constructor Example');

const lotteryPromise = new Promise(function(resolve, reject){
    console.log('Lottery Draw is Happing');
    setTimeout(function(){
        if(Math.random() >= 0.5){
            resolve('You Win');
        }else{
            reject(new Error('You Lost'));
        }
    }, 2000);
});
lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

const wait = function(second){
    return new Promise(function(reslove){
        setTimeout(reslove , second * 1000);
    });
};
wait(1)
    .then(() => {
        console.log('1 second passed');
        return wait(1);
    })
    .then(() => {
        console.log('2 seconds passed');
        return wait(1);
    })
    .then(() => {
        console.log('3 seconds passed');
        return wait(1);
    })
    .then(() => console.log('4 seconds passed'));

navigator.geolocation.getCurrentPosition(
    position => console.log(position),
    err => console.error(err)
);

const getPosition = function(){
    return new Promise(function(resolve, reject){
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
}

getPosition().then(pos => console.log(pos));

const whereIam = async function(country){
    // fetch(`https://restcountries.com/v2/name/${country}`)
    // .then(res => console.log(res));
    const res = await fetch(`https://restcountries.com/v2/name/${country}`);
    console.log(res);
    const data = await res.json();
    console.log(data);
    renderCountry(data[0]);
}
whereIam('russia');
console.log('FIRST');

console.log('1: will get location');
whereIam().then(city => console.log(city));
console.log('3: Finished getting location');

console.log('Running Promises in Parallel');
const getJSON = function(url, errorMsg = 'Something went wrong'){
    return fetch(url).then(res => {
        if(!res.ok) throw new Error(`${errorMsg} (${res.status})`);
        return res.json();
    });
};
const get3Countries = async function(c1, c2, c3){
    try{
        // const [data1] = await getJSON(`https://restcountries.com/v2/name/${c1}`);
        // const [data2] = await getJSON(`https://restcountries.com/v2/name/${c2}`);
        // const [data3] = await getJSON(`https://restcountries.com/v2/name/${c3}`);
        // console.log([data1.capital, data2.capital, data3.capital]);
        const data = await Promise.all([
            getJSON(`https://restcountries.com/v2/name/${c1}`),
            getJSON(`https://restcountries.com/v2/name/${c2}`),
            getJSON(`https://restcountries.com/v2/name/${c3}`),
        ]);
        console.log(data.map(d => d[0].capital));
    }catch(err){
        console.error(err);
    }
};
get3Countries('portugal', 'canada', 'bharat');

//Promise.race
(async function(){
    const res = await Promise.race([
        getJSON(`https://restcountries.com/v2/name/netherland`),
        getJSON(`https://restcountries.com/v2/name/bahamas`),
        getJSON(`https://restcountries.com/v2/name/greenland`),
    ]);
    console.log(res[0]);
})();

const timeout = function(sec){
    return new Promise(function(_, reject){
        setTimeout(function(){
            reject(new Error(`Request took too long!`));
        }, sec * 1000);
    });
};

Promise.race([
    getJSON(`https://restcountries.com/v2/name/netherland`),
    timeout(0.2),
]).then(res => console.log(res[0]))
.catch(err => console.error(err));

//Promise.allSettled
Promise.allSettled([
    Promise.resolve('Success'),
    Promise.reject('Error'),
    Promise.resolve('Another success'),
]).then(res => console.log(res));

