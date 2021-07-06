import React , {Component} from 'react';
import { BrowserRouter , Route } from 'react-router-dom';
import './App.css';
import Body from './components/body';
import Contact from './components/contact';
import Navbar from './components/navbar';
class App extends Component{
  render(){
    return (
        <BrowserRouter>
          <Navbar />
          <Route exact path="/" component={Body} />
          <Route path="/contact" component={Contact} />
        </BrowserRouter>
    )
  }
}

export default App;
