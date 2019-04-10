/*
Matrix Services OU

Rembit: rembit_react

componenet: Jumbotron
developed by (•̪●)==ε/̵͇̿​̿/’̿’̿ ̿ ̿̿ `(•.°)~
*/
// ------------------ ┌∩┐(◣_◢)┌∩┐ ------------------
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {  Redirect  } from 'react-router-dom';

// ------------------ ┌∩┐(◣_◢)┌∩┐ ------------------
const styles = () => ({
  input: {
    display: 'none',
  },
  yellow:{
    borderRadius: "0px",
    marginRight: "12px",
    outline: "none",
    color: "#f7f7f2",
    backgroundColor: '#210024',
    fontSize: "24px",
    fontFamily: "'ZCOOL QingKe HuangYou', cursive;",
    '&:hover': {
      backgroundColor: '#4fb0c6',
    },
  },
  transparent:{
    borderRadius: "0px",
    outline: "none",
    color: "#333333",
    fontSize: "24px",

    backgroundColor: 'transparent',
    fontFamily: "'ZCOOL QingKe HuangYou', cursive;",

    '&:hover': {
      backgroundColor: '#ffb833',
    },
    '&:focus': {
      color: '#ef8354',
      outline: "none",

    }
  }
});
// ------------------ ┌∩┐(◣_◢)┌∩┐ ------------------
class Jumbo extends Component{
// ------------------ '(◣_◢)' ------------------
  constructor(props){
    super(props);
    console.log(`JUMBO PROPS: ${props.data.title}`);
    this.state = {
      redirect: false,
      redirect_id: 2
    }
    this.handleRedirect = this.handleRedirect.bind(this);
    this.handleClick = this.handleClick.bind(this);

  }
// ------------------ '(◣_◢)' ------------------
  handleClick(id){
    this.setState({redirect: true, redirect_id: id});
  }

// ------------------ '(◣_◢)' ------------------
  handleRedirect(id){
    if(this.state.redirect){
      if(id===0){
        return (<Redirect to="/login" />);
      }
      else if(id===1){
        return <Redirect to="/signup" />
      }
      else{
        alert("BUG! incorrect redirection from buttons");
      }
    }
  }
// ------------------ '(◣_◢)' ------------------
  render(){
    const { classes } = this.props;
    console.log(this.state);
    return(
        <div className="svg_backs_sun">
          <div className = "container-fluid">
          {this.handleRedirect(this.state.redirect_id)}
          <div className="jumbotron" 
            style={{backgroundColor:"transparent", margin:"0 auto"}}>
            <div className="row">

              <h2 className="deepurps-font">{this.props.data.title}</h2>
            </div>

            <div className="row">

              <h3 className="yellow-font">{this.props.data.sub}</h3>
            </div>

            <div className="row">

              <p className="white-font">{this.props.data.sub0}</p>
              <br />
              <br />
            </div>
            <br />
            <br />
            <br />
            <br />
            <div className="row">

                <Button 
                  variant="outlined" 
                  component="button"
                  className={classes.yellow}
                  onClick={() => {this.handleClick(0)} }
                  >
                Login
                </Button>

                <Button 
                  variant="outlined"
                  component="button"
                  className={classes.transparent} 
                  onClick={() => {this.handleClick(1)} }
                  >
                  Register
                </Button>

            </div>
          </div>
          </div>
       </div>
      );
    }
// ------------------ '(◣_◢)' ------------------
}
// ------------------° ̿ ̿'''\̵͇̿̿\з=(◕_◕)=ε/̵͇̿̿/'̿'̿ ̿ °------------------

Jumbo.propTypes = {
  classes: PropTypes.object.isRequired
};
// ------------------° ̿ ̿'''\̵͇̿̿\з=(◕_◕)=ε/̵͇̿̿/'̿'̿ ̿ °------------------
export default withStyles(styles)(Jumbo);
//    ‛¯¯٭٭¯¯(▫▫)¯¯٭٭¯¯’      FIN     ‛¯¯٭٭¯¯(▫▫)¯¯٭٭¯¯’
