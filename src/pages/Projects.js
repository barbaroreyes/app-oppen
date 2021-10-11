import React from 'react';
import Data from '../compo/Data'
import CardFlip from '../compo/Card-Flip';

const Projects = () => {
  return (
    <div className="projects">{
        Data.map((item, i) => {
            return (
                <CardFlip {...item}/>
               

            )
        })
        }
     
    </div>
  );
}

export default Projects;
