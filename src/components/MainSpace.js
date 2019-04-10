/*
Gita.Network: rembit_react

componenet: MainSpace
developed by (•̪●)==ε/̵͇̿​̿/’̿’̿ ̿ ̿̿ `(•.°)~
*/
// ------------------ ┌∩┐(◣_◢)┌∩┐ ------------------
import React, {Component} from 'react';
import {  Container, Jumbotron, Row, Col, Button } from 'reactstrap';
import Jumbo from "./Jumbo";
import About from "./About";
import Footer from "./Footer";

import HOME_JUMBO from "../data/homeJumbo"

console.log(`Jumbo Data coming from MainSpace: ${HOME_JUMBO.title}`);
// ------------------ ┌∩┐(◣_◢)┌∩┐ ------------------
class MainSpace extends Component{

// ------------------ '(◣_◢)' ------------------
  render(){
    return(
      <div>
        <Jumbo data={HOME_JUMBO} />
        <About />
        <Footer />
      </div>
    );
  }
// ------------------ '(◣_◢)' ------------------
}
// ------------------° ̿ ̿'''\̵͇̿̿\з=(◕_◕)=ε/̵͇̿̿/'̿'̿ ̿ °------------------

// ------------------° ̿ ̿'''\̵͇̿̿\з=(◕_◕)=ε/̵͇̿̿/'̿'̿ ̿ °------------------
export default MainSpace;
//    ‛¯¯٭٭¯¯(▫▫)¯¯٭٭¯¯’      FIN     ‛¯¯٭٭¯¯(▫▫)¯¯٭٭¯¯’
