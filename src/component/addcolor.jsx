import React, { Component } from 'react';
import {Form, Button} from 'react-bootstrap';

import { addColors } from '../redux/action/index';
import { connect } from 'react-redux';


class AddColor extends Component {

  constructor(props){
    super(props);
    this.state = {
        "title": "",
        "color": "",
        "rating": 0
    }
  }

  addColorHandler=(event)=>{
    event.preventDefault();
    this.props.addColors(this.state);

  }

  changeHandler=(event)=>{
    const value = event.currentTarget.value;
    const name = event.currentTarget.name
    const data = {...this.state};
    data[name] = value;
    this.setState({...data});

   
  }
    

render(){
return(
    <div>
      <span>{this.props.colorsList.length}</span>
    <form onSubmit={this.addColorHandler}>

    <div className="form-group">
      <label>Title</label>
      <input type="text" className="form-control" name="title" onChange={this.changeHandler} aria-describedby="emailHelp" placeholder="Enter Title"/>
    </div>
    <div className="form-group">
      <label>Color</label>
      <input type="color" className="form-control" name="color" onChange={this.changeHandler} aria-describedby="emailHelp" placeholder="Enter Color"/>
    </div>
    <div className="form-group">
      <label>Rating</label>
      <input type="number" max="5" min="0" name="rating" onChange={this.changeHandler} className="form-control" />
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
  </form></div>
)
}
}

const mapStateToProps = function(state) {
  return {
   colorsList : state.colors
  }
}


export default connect(mapStateToProps, {addColors})(AddColor); //connect({}, {addColors})(AddColor);