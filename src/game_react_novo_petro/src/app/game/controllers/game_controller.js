// controller.js


import * as model from "../models/gameModel"
import * as view from "../views/view_game"

const state = {
    score: {
        playerScore: 0,
        computerScore: 0,
        scoreBox: document.getElementById('score_points')
    },

    cardSprites: {
        avatar: document.getElementById('card-image'),
        name: document.getElementById('card-name'),
        type: document.getElementById('card-type')
    },

    fieldCards: {
        player: document.getElementById('player-field-card'),
        computer: document.getElementById('computer-field-card')
    },

    actions: {
        button: document.getElementById('next-duel')
    },

    playerSides: {
        player1: "player-cards",
        player1BOX: document.querySelector('#player-cards'),
        computer: 'computer-cards',
        computerBOX: document.querySelector('#computer-cards')

    }
};

async function setCardsField(cardId) {
    console.log('setCardsField chamado com cardId:', cardId);

    await removeAllCardsImage()



    const computerCardId = await model.getCardById()
    state.fieldCards.player.style.display = 'block'
    state.fieldCards.computer.style.display = 'block'


    state.fieldCards.player.src = model.cardData[cardId].img_path
    state.fieldCards.computer.src = model.cardData[computerCardId].img_path

    //let duelResults = await checkDuelResults(cardId, computerCardId)

    // await updateScore()
    //await drawButton()
}

async function drawSelectCard(index) {
    const card = model.getCardById(index);
    state.cardSprites.avatar.setAttribute('src', card.img_path);
    state.cardSprites.name.innerText = card.name;
    state.cardSprites.type.innerText = "Attribute: " + card.type;
}

async function removeAllCardsImage() {

    let cards_computer = state.playerSides.computerBOX
    let imgElements = cards_computer.querySelectorAll('img')
    imgElements.forEach((img) => img.remove())

    let cards_player = state.playerSides.player1BOX
    imgElements = cards_player.querySelectorAll('img')
    imgElements.forEach((img) => img.remove())
}

async function initCardGameReact() {
    console.log('initCardGameReact chamado');

    view.drawCards(5, 'player-cards', setCardsField, drawSelectCard);
    view.drawCards(5, 'computer-cards', null, null);
}

initCardGameReact();


export { initCardGameReact, drawSelectCard, setCardsField, state, removeAllCardsImage };