import React from 'react';

interface CardProps extends  React.PropsWithChildren {
  rank: string;
  suit: string;
}



const CardView: React.FC<CardProps> = (props) => {
  const cardClass = 'card rank-'+props.rank + ' ' +props.suit

  return (
    <span className={cardClass}>
      <span className="rank">{props.rank}</span>
      <span className="suit"></span>
    <span>{props.children}</span>
</span>


  );
};


export default CardView;