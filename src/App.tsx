import React, {useState} from 'react';
import './App.css';
import CardView from "./CardView/CardView";
import Card from "./lib/Card"
import CardDeck from "./lib/CardDeck";

function App() {
  const [cards, setCards] = useState<Card[]>([
    {rank: '3', suit:'spades'},
    {rank: 'J', suit:'hearts'},
    {rank: 'A', suit:'clubs'},
    {rank: '10', suit:'diams'},
    {rank: 'J', suit:'spades'},
  ]);

  const newDeck = new CardDeck();
  // newDeck.getCard();
  newDeck.getCards(5);




  return (
    <div className="App playingCards faceImages">
        <CardView rank={cards[0].rank} suit={cards[0].suit}/>
        <CardView rank={cards[1].rank} suit={cards[1].suit}/>
        <CardView rank={cards[2].rank} suit={cards[2].suit}/>
        <CardView rank={cards[3].rank} suit={cards[3].suit}/>
        <CardView rank={cards[4].rank} suit={cards[4].suit}/>
    </div>
  );
}

export default App;
