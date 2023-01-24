import React, { Component } from "react";

class Classprops extends Component {

  render() {

    return (

      <div>

        <h3>

          Student name: {this.props.name} <br />Address: {this.props.place} 

          

        </h3>

      </div>

    );

  }

}

export default Classprops;