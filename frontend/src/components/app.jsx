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

  displaySites(){
    let sites = this.props.pwnSites;

    if (sites.length) {
      sites = sites.map((site, idx) => 
        <li 
          className="site"
          key={idx}
        >{site}</li>
      )
      return sites;
    }

    return <li>Nowhere!</li>
  }

  render() {
    return(
      <div id="main-div">
        <h1 id="title-header">Have I been pwned?</h1>

        <div id="body-div">
          <form 
            id="form"
            onSubmit={() => (this.props.fetchPwnedInfo(this.state))}
          >
            <input 
              id="input"
              type="text"
              placeholder="Write your email here to check if it's been pwned!"
              onChange={e => (this.setState({email: e.currentTarget.value}))}
            />
            <input type="submit" id="submit-button" value="Submit" />
          </form>
        </div>

        <div id="result-div">
          <h1 id="result-title">You've Been Pwned By</h1>
          <ol id="site-list">
            {this.displaySites()}
          </ol>
        </div>
      </div>
    )
  }
}

export default App;