import './style.css';

export interface CardProps {
  flipped?: boolean;
}

export function Card( { flipped = false }: CardProps) {

  const cardContentClassNames = ['card_content']
  flipped && cardContentClassNames.push('card_content-flipped')
  return (
    <div className="card">
      <div className={cardContentClassNames.join(' ')}>
        <div className="card_face card_face-front">?</div>
        <div className="card_face card_face-back">🤢</div>
      </div>
    </div>
  );
}