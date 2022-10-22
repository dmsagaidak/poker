import React from 'react';

interface CardProps extends  React.PropsWithChildren {
  rank: string;
  suit: string;
}

const CardView: React.FC<CardProps> = (props) => {
  const cardClass = 'card rank-'+props.rank.toLowerCase() + ' ' +props.suit
  let symbol;
  if (props.suit === 'clubs'){
    symbol = '♣';
  } else if (props.suit === 'spades'){
    symbol = '♠';
  } else if (props.suit === 'diams'){
    symbol = '♦';
  }else {
    symbol = '♥';
  }

  return (
    <span className={cardClass}>
      <span className="rank">{props.rank}</span>
      <span className="suit">{symbol}</span>
      <span>{props.children}</span>
    </span>
  );
};


export default CardView;