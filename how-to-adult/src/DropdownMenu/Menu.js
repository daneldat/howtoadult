import React from 'react';
import '../w3.css';

class Menu extends React.Component {
    constructor() {
        super();

        this.state = {
            displayMenu: false,
        };

    };
    render() {
        return (
            <div className="w3-sidebar w3-bar-block w3-collapse w3-card"
                style="width:200px;"
                id="mySidebar">
                <button class="w3-bar-item w3-button w3-hide-large"
                    onclick="w3_close()">Close &times;</button>
                <a href="#"
                    className="w3-bar-item w3-button">How To Vote</a>
            </div>
           
                    );
    }
}

export default Menu;