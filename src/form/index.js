import React, { Component } from 'react';

class App extends Component {
    
    clickHandler(){
        console.log('hi');
        alert('hello')
    }

    render() {
        return (
            <form>
                <h1>Our form example</h1>
                <div>
                    <textarea />
                </div>
                <div>
                    <input type="button" value="Submit" onClick={this.clickHandler} />
                </div>
            </form>
        );
    }
}

export default App;