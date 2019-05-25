import React, { Component } from 'react';
import store from '../store/index';
import Grid from '../component/grid';

class App extends Component {
    


    clickHandler(){
    
        var data = {id:"3232-3231111-22", title:"Part Baby", color:"yellow", timestamp:"32"};
       store.dispatch({type:"ADD_COLOR", payload:data})

      
    }

    removeHandler(){
        store.dispatch({type:"REMOVE_COLOR", id:"3232-3231111-22"});
        console.log(
            store.getState())
    }

    render() {
        return (
            <form>
                <h1>Our form example</h1>
                <div>
                    <textarea />
                </div>
                <div>
                    <input type="button" value="Add" onClick={this.clickHandler} />

                    <input type="button" value="Remove" onClick={this.removeHandler} />

                    <input type="button" value="Get State" onClick={()=>console.log(store.getState())} />

                    <input type="button" value="Sort" onClick={()=>
                        {
                        store.dispatch({type:"SORT_COLORS", data:store.getState().colors})
                            console.log(store.getState())
                    
                         }
                        
                        } />

<input type="button" value="Reset" onClick={()=>
                        {
                            store.dispatch({type:"RESET"})
                            console.log(store.getState())
                        }} />

                </div>
                <Grid/>
            </form>
           
        );
    }
}

export default App;