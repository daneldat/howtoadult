import React from 'react';
import '../w3.css';

class Dropdown extends React.Component {
  constructor() {
    super();

    this.state = {
      displayMenu: false,
    };

  };
  render() {
    return (
      <div className="w3-container">
        <div className="w3-dropdown-hover">
          <button className="w3-button w3-black">How Do I?</button>
          <div className="w3-dropdown-content w3-bar-block w3-border">
            <a href="#" className="w3-bar-item w3-button">Vote</a>
          </div>
        </div>
      </div>

    );
  }
}

export default Dropdown;