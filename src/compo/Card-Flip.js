import React,{useState} from 'react';
import ReactCardFlip from 'react-card-flip';
import {Link} from 'react-router-dom'

const CardFlip = (props) => {
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
    {props.name}
    click to see more
   
    </div>

    <div className ='back'
    onClick={handleClick}
    >
       <Link to='/'>Home</Link>
      bach of the card.
      click to see more
    </div>
  </ReactCardFlip>
  );
}

export default CardFlip;
