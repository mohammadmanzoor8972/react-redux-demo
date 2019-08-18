import React, { Component } from 'react'
import {connect} from 'react-redux';
import store from '../redux/store/index';


class Grid extends Component {
    
    constructor(props){
        super(props);
       
    }
    render() {
        const {colors} = store.getState();
        
        return (
            <div>
                {colors.map((data)=><span onClick={(event)=>{
                   let id = event.target.id;
                    store.dispatch({type:"REMOVE_COLOR", id:id});
                }} key={data.id} id={data.id}>{data.title}</span>)}
                {this.props.children}
            </div>
        )
    }
}


const mapStateToProps = function(state) {
    return {
     colors : state.colors
    }
  }

  export default connect(mapStateToProps)(Grid);
  
