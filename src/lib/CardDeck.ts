import Card from "./Card";

class CardDeck {
  constructor(public deck: Card[] = []) {
    const suits: string[] = ['hearts', 'spades', 'clubs', 'diams'];
    const ranks: string[] = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

    for (let i =0; i<suits.length; i++){
      for(let j=0; j<ranks.length; j++){
        const card = new Card(ranks[j], suits[i]);
        deck.push(card);
      }
    }

  }

  getCard(): Card {
    const getRandomValueFromArray = (array: Card[]) => {
      const randomIndex = Math.floor(Math.random() * array.length);
      return array[randomIndex];
    };

    const randomCard = getRandomValueFromArray(this.deck);
    const currentIndex = this.deck.indexOf(randomCard);
    this.deck.splice(currentIndex, 1);
    return randomCard;
  }

  getCards(howmany: number) {
    const cardsArray = [];
    for(let i = 0; i < howmany; i++){
      cardsArray.push(this.getCard());
    }
    console.log(cardsArray);
    return cardsArray;
  }

}

export default CardDeck;