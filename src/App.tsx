import React, {useState} from 'react';
import './App.css';
import CardView from "./CardView/CardView";
import Card from "./lib/Card"
import CardDeck from "./lib/CardDeck";
import PokerHand from "./lib/PokerHand";

function App() {
  const [cards, setCards] = useState<Card[]>([

  ]);

  const newCards = () =>{
    const newDeck = new CardDeck();
    const newArray = newDeck.getCards(5);

    setCards([
      {suit: newArray[0].suit, rank: newArray[0].rank},
      {suit: newArray[1].suit, rank: newArray[1].rank},
      {suit: newArray[2].suit, rank: newArray[2].rank},
      {suit: newArray[3].suit, rank: newArray[3].rank},
      {suit: newArray[4].suit, rank: newArray[4].rank},
    ])
    const newHand = new PokerHand();
    newHand.array.push(newArray[0], newArray[1], newArray[2], newArray[3], newArray[4]);
    newHand.getOutcome();
  }


  const button = <button onClick={newCards}>Deal cards</button>

  if (cards.length === 0){
    return (
      <div>You don't have cards
        {button}
      </div>
    )
  }

  return (
    <div className="App playingCards faceImages">
      <CardView rank={cards[0].rank} suit={cards[0].suit}/>
      <CardView rank={cards[1].rank} suit={cards[1].suit}/>
      <CardView rank={cards[2].rank} suit={cards[2].suit}/>
      <CardView rank={cards[3].rank} suit={cards[3].suit}/>
      <CardView rank={cards[4].rank} suit={cards[4].suit}/>
      {button}
    </div>
  );
}

export default App;
