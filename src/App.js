import React, {Component} from 'react';

import store from './store'

import Home from './components/Home'
import Login from './components/Login'
import SignUp from './components/SignUp'
import ForgotPassword from './components/ForgotPassword'
import Dashboard from './components/Dashboard'
import {Provider} from 'react-redux'
import MainNavigator from './components/MainNavigator'
import { Router, Switch, Route, Link, Redirect} from 'react-router-dom';
import history from './history'
class App extends Component{
    render(){
        return(
            <Provider store = {store}>   
                <Router history ={history}>
                    <MainNavigator/> 
                        <Switch>
                            <Route exact strict path='/' component={()=><Home/>} />
                            <Route exact strict path='/login' component={()=><Login/>} />
                            <Route exact strict path='/signup' component={()=><SignUp/>} />
                            <Route exact strict path='/dashboard' component={()=><Dashboard/>} />
                            <Route exact strict path='/logout' component={()=>{window.jwt=undefined;return <Redirect to="/login"/>}}/>
                            <Route exact strict path='/forgotpassword' component={()=><ForgotPassword/>}/>
                        </Switch>
                </Router>
            </Provider>
        )
    }
}


export default App