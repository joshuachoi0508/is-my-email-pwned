import React from 'react';
import './reset.scss'; 
import './main.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ''
    };
  }

  render() {
    return(
      <div id="main-div">
        <h1 id="title-header">Have I been pwned?</h1>
        <div id="body-div">
          <form 
            id="form"
            onSubmit={() => (this.props.fetchPwnedInfo(this.state.email))}
          >
            <input 
              id="input"
              type="text"
              placeholder="Write your input here"
              onChange={e => (this.setState({email: e.currentTarget.value}))}
            />
            <input type="submit" id="submit-button" value="Submit" />
          </form>
        </div>
      </div>
    )
  }
}

export default App;