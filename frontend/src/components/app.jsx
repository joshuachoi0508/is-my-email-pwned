import React from 'react';
import './reset.scss'; 
import './main.css';

class App extends React.Component {
  render() {
    return(
      <div id="main-div">
        <h1 id="title-header">Josh's Dashboard</h1>
        <div id="body-div">
          <input
            type="text"
          />
        </div>
      </div>
    )
  }
}

export default App;