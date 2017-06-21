import React, { Component } from 'react';

import FullScreenSection from './base/FullScreenSection';

class App extends Component {
  render() {
    const { container, text } = styles;

    return (
      <div>
        <FullScreenSection>
          <div>
            <h1 style={text}>This is section one about Me Personally</h1>
          </div>
        </FullScreenSection>
        <FullScreenSection style={{ backgroundColor: 'white' }}>
          <div>
            <h1 style={[text, { color: 'black'}]}>This is the section about my games</h1>
          </div>
        </FullScreenSection>
        <FullScreenSection style={{ backgroundColor: 'black' }}>
          <div>
            <h1 style={text}>This is the section about my apps. Craaaazzy</h1>
          </div>
        </FullScreenSection>
      </div>);
  }
}

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3368F3',
    height: window.innerHeight - 40,
    width: window.innerWidth - 40,
    padding: 20,
  },
  text: {
    color: 'white',
  }
}

export default App;
