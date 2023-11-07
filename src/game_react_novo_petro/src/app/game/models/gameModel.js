// model.js
import img1 from '../game js/framework/js-yugioh-assets/src/assets/icons/dragon.png'
import img2 from '../game js/framework/js-yugioh-assets/src/assets/icons/magician.png'
import img3 from '../game js/framework/js-yugioh-assets/src/assets/icons/exodia.png'

const cardData = [
    {
        id: 0,
        name: 'Blue Eyes White Dragon',
        type: 'Paper',
        img_path: 'img1',
        winOf: [1],
        loseOf: [2]
    },
    {
        id: 1,
        name: 'Dark Magican',
        type: 'Rock',
        img_path: img2,
        winOf: [2],
        loseOf: [0]
    },
    {
        id: 2,
        name: 'Exodia',
        type: 'Scissors',
        img_path: img3,
        winOf: [0],
        loseOf: [1]
    }
];

export function getRandomCardId() {
    const randomIndex = Math.floor(Math.random() * cardData.length);
    return cardData[randomIndex].id;
}

export function getCardById(cardId) {
    return cardData.find(card => card.id === cardId);
};

export { cardData }