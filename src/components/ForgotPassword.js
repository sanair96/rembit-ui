import React, {Component} from 'react'
import { Form,Button, Container, Col, Row } from 'react-bootstrap';
import Footer from './Footer'
class Forgotpassword extends Component{
  constructor(props){
    super(props);
    this.state = {
      validated:false
    }
  }
  
  handleSubmit = (event)=>{
    event.preventDefault()
    if(event.target.checkValidity()===false){
      event.stopPropagation();
    }
    this.setState({validated:true})
  }
    render(){
        return (
            <>
            <Container>
              <Row>
              <Col></Col>
              <Col xs={6}>              
              <Form noValidate validated={this.state.validated} onSubmit={(event)=>{this.handleSubmit(event)}}>
                <Form.Group controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control onChange={(event)=>{this.handleFormChange(event)}} type="email" name="email" required as="input" autoComplete="email" placeholder="Enter Email" />
                  <Form.Control.Feedback type="invalid">
                        Enter valid E-Mail ID
                  </Form.Control.Feedback>
                </Form.Group>
                <Button type="submit" variant="primary">
                  Send Reset link
                </Button>
              </Form>
              </Col>
              <Col></Col>
              </Row>
              </Container>
              <Footer/>
            </>
        )
    }
}

export default Forgotpassword