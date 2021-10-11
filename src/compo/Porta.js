import React from 'react';
import Portasee from '../compo/Portasee';
import Items  from './Items'
import {Switch,Route} from 'react-router-dom'


const Porta = () => {
  return (
    <div className="porta">
      <Switch>
      <Route exact path="/">
        <Portasee/>
        <Items />
        <Items />
        <Portasee/>
      </Route>

      <Route exact path='/'>
         
      </Route>

      </Switch>
      {/* <div className="port-see">porta-see</div>
     <div className="items">
       items
     </div>
     <div className="items">
       items
     </div>
     <div className="items">
       items
     </div>
     <div className="items">
       items
     </div>
     <div className="port-see">porta-see</div> */}


      
    </div>
  );
}

export default Porta;
