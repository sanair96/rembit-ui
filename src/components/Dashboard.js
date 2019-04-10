import React, {Component} from 'react'

import history from '../history'

import {Container, Row, Col} from 'react-bootstrap'


class Dashboard extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <>
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