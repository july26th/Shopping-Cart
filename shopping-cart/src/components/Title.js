import React, { Component } from "react";

class Title extends Component {
  
  render() {

      return (
        <div className="row main-title text-title mx-auto my-2">
        <h2 className="font-weight-bold title mb-0">
          {this.props.name} <strong className="text-blue">{this.props.title}</strong>
        </h2>
        </div>
      );
              
}
}
export default Title;
