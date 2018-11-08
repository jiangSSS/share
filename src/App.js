import React, { Component } from 'react';
import "./style/index.scss"
class App extends Component {
  render() {
    return (
      <div className="App">
        {this.props.children}
        {/* <h1>我是标题</h1> */}
      </div>
    );
  }
}

export default App;
