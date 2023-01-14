import React, { Component } from 'react';
import FormValidation from './FormValidation';

// import InputEvents from './events/InputEvents'
// import MovementEvents from './events/MovementEvents'
// import './events/Events.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <FormValidation />
        {/* <InputEvents />
        <MovementEvents /> */}
      </div>
    );
  }
}

export default App;
