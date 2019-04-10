import React, {Component} from 'react'

import Jumbo from './Jumbo'
import About from './About'
import Footer from './Footer'
import HOME_JUMBO from "../data/homeJumbo"


export default class Home extends Component{
    render(){
        return (
            <div>
                <Jumbo data={HOME_JUMBO}/>
                <About/>
                <Footer/>
            </div>
        );
    }
}