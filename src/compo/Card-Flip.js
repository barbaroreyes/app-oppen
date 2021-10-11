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
    
   
    </div>

    <div className ='back'
    onClick={handleClick}
    >
       <a href={props.live}>App</a>
       <a href={props.github}>github</a>
     
    </div>
  </ReactCardFlip>
  );
}

export default CardFlip;
