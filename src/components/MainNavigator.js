/*
Matrix Services OU

Rembit: rembit_react

componenet: MainNavigator
developed by (•̪●)==ε/̵͇̿​̿/’̿’̿ ̿ ̿̿ `(•.°)~

*/
// ------------------ ┌∩┐(◣_◢)┌∩┐ ------------------
import React, { Component }  from 'react';
import {NavLink as RRNavLink} from 'react-router-dom';
import {connect} from 'react-redux'
import history from '../history'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink} from 'reactstrap';

// ------------------ ┌∩┐(◣_◢)┌∩┐ ------------------
class MainNavigator extends Component{
  constructor(props) {
  super(props);

  this.toggle = this.toggle.bind(this);
  this.state = {
    isOpen: true
  };
}
toggle() {
  this.setState({
    isOpen: !this.state.isOpen
  });
}
handleLogout = ()=>{
  this.props.logout();
}
// ------------------ '(◣_◢)' ------------------
render() {
  return (
    <div className="container-fluid svg_backs_sun">
      
      <Navbar color="transparent" dark expand="md">
        <NavbarBrand tag={RRNavLink} exact to="/" 
        style={{color:"#AB2E41", fontSize:"35px", outline: "none"}}
        >
        Rembit
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={!this.state.isOpen} navbar>
            <Nav  className="ml-auto" navbar>
            {!this.props.loginStatus?<><NavItem>
              <NavLink 
              tag={RRNavLink} 
              exact to="/login" 
              style={{color:"#f8f271",fontSize:"17px",outline:"none"}} 
              activeStyle={{backgroundColor: 'transparent', textDecoration: 'bold', outline:"none"}}
              >
              Login
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink 
              tag={RRNavLink} 
              exact to="/signup" 
              style={{color:"#f7f7f2",fontSize:"17px",outline:"none"}} 
              activeStyle={{backgroundColor: 'transparent', textDecoration: 'bold', outline:"none"}}
              >
              Sign-Up
              </NavLink>
  </NavItem></>:<><NavItem>
              <NavLink 
              tag={RRNavLink}
              onClick={(event)=>{this.handleLogout()}}
              exact to="/logout" 
              style={{color:"#f7f7f2",fontSize:"17px",outline:"none"}} 
              activeStyle={{backgroundColor: 'transparent', textDecoration: 'bold', outline:"none"}}
              >
              Logout
              </NavLink>
  </NavItem></>}
            

        </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}


// ------------------ '(◣_◢)' ------------------

}
// ------------------° ̿ ̿'''\̵͇̿̿\з=(◕_◕)=ε/̵͇̿̿/'̿'̿ ̿ °------------------

const mapPropsToState = (state)=>{
  const loginStatus = state.loginreducer.loginStatus;
  return {loginStatus}
}

const mapDispatchToState = (dispatch)=>{
  return {
    logout:()=>dispatch({type:"LOGOUT"})
  }
}


// ------------------° ̿ ̿'''\̵͇̿̿\з=(◕_◕)=ε/̵͇̿̿/'̿'̿ ̿ °------------------
export default connect(mapPropsToState,mapDispatchToState)(MainNavigator);
//    ‛¯¯٭٭¯¯(▫▫)¯¯٭٭¯¯’      FIN     ‛¯¯٭٭¯¯(▫▫)¯¯٭٭¯¯’
