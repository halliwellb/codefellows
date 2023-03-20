'use strict';

const state = [];
const roundsOfVoting = 25;

function Image(name, source) {
    this.name = name;
    this.timesClicked = 0;
    this.timesShown = 0;
    this.source = source;
}

state.push(new Image('bag', '/assets/bag.jpg'));
state.push(new Image('banana', '/assets/banana.jpg'));
state.push(new Image('bathroom', '/assets/bathroom.jpg'));
state.push(new Image('boots', '/assets/boots.jpg'));
state.push(new Image('breakfast', '/assets/breakfast.jpg'));
state.push(new Image('bubblegum', '/assets/bubblegum.jpg'));
state.push(new Image('chair', '/assets/chair.jpg'));
state.push(new Image('cthulhu', '/assets/cthulhu.jpg'));
state.push(new Image('dog-duck', '/assets/dog-duck.jpg'));
state.push(new Image('dragon', '/assets/dragon.jpg'));
state.push(new Image('pen', '/assets/pen.jpg'));
state.push(new Image('pet-sweep', '/assets/pet-sweep.jpg'));
state.push(new Image('scissors', '/assets/scissors.jpg'));
state.push(new Image('shark', '/assets/shark.jpg'));
state.push(new Image('sweep', '/assets/sweep.png'));
state.push(new Image('tauntaun', '/assets/tauntaun.jpg'));
state.push(new Image('unicorn', '/assets/unicorn.jpg'));
state.push(new Image('water-can', '/assets/water-can.jpg'));
state.push(new Image('wine-glass', '/assets/wine-glass.jpg'));

let imgEls = document.querySelectorAll('img');

let voteTrackerEl = document.getElementById('vote-tracker');

console.log('CURRENTLY RENDERED IMAGES', imgEls);

console.log('CURRENT STATE', state);

renderProducts();

function generateRandomProduct() {
    return Math.floor(Math.random() * state.length);
}

function renderProducts() {
    let product1 = state[generateRandomProduct()];
    let product2 = state[generateRandomProduct()];
    let product3 = state[generateRandomProduct()];
    console.log('Products to re-render');
    while (product1.name === product2.name || product3.name) {
        product2 = state[generateRandomProduct()];
        product3 = state[generateRandomProduct()];
    }

    imgEls[0].src = product1.source;
    imgEls[0].src = product1.name;
    product1.timesShown += 1;
    imgEls[1].src = product2.source;
    imgEls[1].src = product2.name;
    product2.timesShown += 1;
    imgEls[2].src = product3.source;
    imgEls[2].src = product3.name;
    product3.timesShown += 1;
}

let eventId = voteTrackerEl.addEventListener('click', function (event) {
    console.log(event.target);


    let productThatWasClicked = event.target.id;
    state.forEach(image => {
        if (image.name === productThatWasClicked) {
            image.timesClicked += 1;
        }
    });

    if (roundsOfVoting) {
        renderProducts();
        roundsOfVoting--;
    } else {
        voteTrackerEl.removeEventListener('click', eventId);
    }
});
