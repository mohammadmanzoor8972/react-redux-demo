import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './form';
import AddColor from './component/addcolor';
import ColorList from './component/colorList';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <AddColor />
        <ColorList/>
      </div>
    );
  }
}
//store.dispatch({type:"Add_COLOR", id:"3232-3231111-22", title:"Part Baby", color:"yellow", timestamp:"32"})




export default App;