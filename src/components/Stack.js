/*
Matrix Services OU

Rembit: rembit_react

componenet: Stack
developed by (•̪●)==ε/̵͇̿​̿/’̿’̿ ̿ ̿̿ `(•.°)~
*/
// ------------------ ┌∩┐(◣_◢)┌∩┐ ------------------
import React, {Component} from 'react';
import {  Container, Jumbotron, Row, Col, Button, Media } from 'reactstrap';

// ------------------ ┌∩┐(◣_◢)┌∩┐ ------------------
class Stack extends Component{

// ------------------ '(◣_◢)' ------------------
  render(){
    return(
      <div className="deepurps-back">
      <br />
        <Container>
        <Col>
            <div className="text-center">
            <Row >
            <Col sm="12" md={{ size: 6, offset: 3 }}><h2 className="white-font" 
            style={{fontSize:"200%"}}>Powered By</h2>
            </Col>
            </Row>
            </div>
            <br />
            <div>
            <Row>

                    <Col>
                    <div className="text-center">
                        <img src={'https://www.svgrepo.com/show/42448/linux.svg'} 
                        className="img-fluid spin" style={{width: "92%", height: "92%"}} 
                        alt={"Linux"} />
                    </div>
                    </Col>
                    <Col >
                    <div className="text-center">
                        <img src={'https://cdn3.iconfinder.com/data/icons/popular-services-brands/512/node-256.png'} 
                        className="img-fluid" 
                        style={{width: "92%", height: "92%"}} alt={"NodeJs"} />
                    </div>
                    </Col>
                    <Col >
                    <div className="text-center">
                        <img src={'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png'} 
                        className="img-fluid" 
                        style={{width: "92%", height: "92%"}} 
                        alt={"React"} />
                    </div>
                    </Col>
                    <Col >
                    <div className="text-center">
                        <img src={'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fpng.pngtree.com%2Fsvg%2F20170603%2Fmongodb_1014584.png&f=1'} 
                        className="img-fluid" 
                        style={{width: "92%", height: "92%"}} 
                        alt={"MongoDB"} />
                    </div>
                    </Col>
                    <Col >
                    <div className="text-center">
                        <img src={'https://www.svgrepo.com/show/131145/bitcoin.svg'} 
                        className="img-fluid" 
                        style={{width: "92%", height: "92%"}} 
                        alt={"Bitcoin"} />
                    </div>
                    </Col>

            </Row>
            </div>
        </Col>
        </Container>
        <br />
      </div>
      );
  }
// ------------------ '(◣_◢)' ------------------
}
// ------------------° ̿ ̿'''\̵͇̿̿\з=(◕_◕)=ε/̵͇̿̿/'̿'̿ ̿ °------------------

// ------------------° ̿ ̿'''\̵͇̿̿\з=(◕_◕)=ε/̵͇̿̿/'̿'̿ ̿ °------------------
export default Stack;
//    ‛¯¯٭٭¯¯(▫▫)¯¯٭٭¯¯’      FIN     ‛¯¯٭٭¯¯(▫▫)¯¯٭٭¯¯’
