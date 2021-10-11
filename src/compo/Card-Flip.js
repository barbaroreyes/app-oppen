import React,{useState} from 'react';
import ReactCardFlip from 'react-card-flip';


const CardFlip = () => {
    const [isFlipped , setIsFlipped] = useState(false)

    const handleClick = () => {
        setIsFlipped( !isFlipped   )
        }

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal"
    style={{
        
    }}
    >
    <div className ='front'
    onClick={handleClick}
   >
    front of the card.
    click to see more
    </div>

    <div className ='back'
    onClick={handleClick}
    >
      
      bach of the card.
      click to see more
    </div>
  </ReactCardFlip>
  );
}

export default CardFlip;
