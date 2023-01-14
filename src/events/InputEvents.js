import React, { Component } from 'react';

class InputEvents extends Component {
  constructor(props) {
    super(props)

    this.state = {
      mouseDown: false,
      mouseClicked: 0,
      inputText: 'Hello world',
      formInputText: 'Hello world 2'
    }

    this.handlerOnClick = this.handlerOnClick.bind(this)
    this.handlerOnMouseDown = this.handlerOnMouseDown.bind(this)
    this.handlerOnMouseUp = this.handlerOnMouseUp.bind(this)
    this.handlerOnChange = this.handlerOnChange.bind(this)
    this.handlerOnChangeSubmit = this.handlerOnChangeSubmit.bind(this)
  }

  handlerOnClick() {
    console.log(this.state.mouseClicked)
    // this.setState({
    //   mouseClicked: this.state.mouseClicked + 1
    // })
    this.setState((state) => {
      return {
        mouseClicked: state.mouseClicked + 1
      }
    })
  }

  handlerOnMouseDown() {
    this.setState({
      mouseDown: true
    })
  }

  handlerOnMouseUp() {
    this.setState({
      mouseDown: false
    })
  }

  handlerOnChange(e) {
    this.setState({
      inputText: e.target.value
    })
  }

  handlerOnSubmit = (e) => {
    e.preventDefault()
    this.setState({
      formInputTextSubmitted: this.state.formInputText
    })
  }

  handlerOnChangeSubmit(e) {
    this.setState({
      formInputText: e.target.value
    })
  }

  render() {
    return (
      <>
      <section>
        <h3>Mouse events:</h3>
        <button onClick={this.handlerOnClick}
        onMouseDown={this.handlerOnMouseDown}
        onMouseUp={this.handlerOnMouseUp}>
          Click me
        </button>
        <p>Button mouse down: {this.state.mouseDown ? 'true' : 'false'}</p>
        <p>Button clicked: {this.state.mouseClicked}</p>
      </section>

      <section>
        <h3>Input change events:</h3>
        <input
          type="text"
          value={this.state.inputText}
          onChange={this.handlerOnChange}
        />
        <p>Input value: {this.state.inputText}</p>
      </section>

      <section>
        <h3>Form Submit events:</h3>
        <form onSubmit={this.handlerOnSubmit}>
          <input
            type="text"
            value={this.state.formInputText}
            onChange={this.handlerOnChangeSubmit}
          />
          <button type="submit">Submit</button>
          <p>Input value: {this.state.formInputText}</p>
          <p>Submitted value: {this.state.formInputTextSubmitted}</p>
        </form>
      </section>
      </>
    )
  }
}

export default InputEvents;