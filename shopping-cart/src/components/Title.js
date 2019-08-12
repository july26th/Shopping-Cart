import React, { Component } from "react";

class Title extends Component {
  
  render() {

      return (
        <div className="row main-title text-title mx-auto my-2">
        <h1 className="font-weight-bold title">
          {this.props.name} <strong className="text-blue">{this.props.title}</strong>
        </h1>
        </div>
      );
              
}
}
export default Title;
