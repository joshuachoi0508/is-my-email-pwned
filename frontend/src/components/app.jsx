import React from 'react';
import './reset.scss'; 
import './main.css';

class App extends React.Component {
  render() {
    return(
      <div id="main-div">
        <h1 id="title-header">Have I been pwned?</h1>
        <div id="body-div">
          <form id="form">
            <input 
              id="input"
              type="text"
              placeholder="Write your input here"
            />
            <input type="submit" id="submit-button" value="Submit" />
          </form>
        </div>
      </div>
    )
  }
}

export default App;