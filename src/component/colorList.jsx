import React, { Component } from 'react'
import {connect} from 'react-redux';


const ColorList = ({colorsList})=>{
    
  const backc = (c)=> {
    return {
    "background-color":c
    }
  }
    return(
        <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
      {colorsList.map((color)=>{
     return <tr> 
         <td>{color.title}</td>
         <td style={backc(color.color)}>{color.color}</td>
         <td>{color.rating}</td>
         </tr>
    })}
  </tbody>
</table>
    )
}

const mapStateToProps = function(state) {
    return {
     colorsList : state.colors,
     count : state.colors.length,

    }
  }

  export default connect(mapStateToProps)(ColorList);