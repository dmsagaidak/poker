import React, {useState} from 'react';
import './App.css';
import CardView from "./CardView/CardView";

function App() {
  const [cards, setCards] = useState([
    {rank: '3', suit:'spades'},
    {rank: 'j', suit:'hearts'},
    {rank: 'a', suit:'clubs'},
    {rank: '10', suit:'diams'},
    {rank: 'j', suit:'spades'},
  ])

  return (
    <div className="App">
      <div className="playingCards faceImages">
        <CardView rank={cards[0].rank} suit={cards[0].suit}/>
      </div>
    </div>
  );
}

export default App;
