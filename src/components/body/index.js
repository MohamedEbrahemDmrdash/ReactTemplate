import React , {Component} from 'react';
import About from './../about';
import Footer from './../footer';
import Home from './../home';
import Portfolio from './../portfolio';
import Profile from './../profile';
import Socialmedia from './../socialmedia';
import Work from './../work';
class body extends Component{
  render(){
    return (
      <div>
        <Home />
        <Work />
        <Portfolio />
        <Profile />
        <About />
        <Socialmedia />
        <Footer />
      </div>
    )
  }
}

export default body;
