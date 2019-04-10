import React, {Component} from 'react'

import history from '../history'

import {Container, Row, Col} from 'react-bootstrap'
import {Redirect} from 'react-router-dom'

class Dashboard extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <>
              {window.jwt!=undefined?"":<Redirect to="/login"/>}
              <Container fluid style={{"backgroundColor":"#ccc","height":"10vh", "textAlign":"center"}}>
                  <Row>
                    <Col>
                      Add Bene
                    </Col>
                    <Col>Transfer</Col>
                    <Col>Profile</Col>
                  </Row>
              </Container>
            </>
        );
    }

}


export default Dashboard