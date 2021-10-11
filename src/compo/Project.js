import React,{useState} from 'react';
import {Link} from 'react-router-dom'
import ReactCardFlip from 'react-card-flip';


const CardFlip = () => {
    const [isFlipped , setIsFlipped] = useState(false)

    const handleClick = () => {
        setIsFlipped( !isFlipped   )
        }

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
    <div className ='front'>
      This is the front of the card.
      <button onClick={handleClick}>Click to flip</button>
    </div>

    <div className ='back'>
      This is the back of the card.
      <button onClick={handleClick}>Click to flip</button>
    </div>
  </ReactCardFlip>
  );
}

export default CardFlip;
