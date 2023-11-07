import * as model from '../models/gameModel'

export function createCardImage(randomId, fieldSide, clickHandler, hoverHandler) {
    const cardImage = document.createElement('img');
    cardImage.setAttribute('height', '100px');
    cardImage.setAttribute('src', '../assets/icons/card-back.png');
    cardImage.setAttribute('data-id', randomId);
    cardImage.classList.add('card');

    if (fieldSide === 'player-cards') {
        cardImage.addEventListener('click', () => clickHandler(cardImage.getAttribute('data-id')));
        cardImage.addEventListener('mouseover', () => hoverHandler(randomId));
    }

    return cardImage;
}



export function drawCards(cardNumbers, fieldSize, clickHandler, hoverHandler) {
    const field = document.getElementById(fieldSize);
    for (let index = 0; index < cardNumbers; index++) {

        const randomIdCard = model.getRandomCardId();
        const cardImage = createCardImage(randomIdCard, fieldSize, clickHandler, hoverHandler);
        field.appendChild(cardImage);
    }
}

