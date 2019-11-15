import React, { Component } from 'react';
import ReactDOM from "react";
import "../../w3.css";


class Page extends React.Component {
    render() {
        return (
            <div className="Page " style={{ "margin-left": "15%" }}>
                <header className="w3-container w3-red w3-center " >
                    <h2 className="w3-xxlarge">Adulting 101:</h2>
                    <h2 className="w3-xlarge">{this.props.title}</h2>
                </header>

                <div>

                </div>
                <p className="w3-padding">
                    {this.props.body}
                </p>
                <p className="w3-card w3-light-grey w3-margin w3-center w3-padding">
                    Don't want to read? This video may help: <p></p>
                    <a href={this.props.link}> {this.props.title}</a>
          </p>
               
               
                <p className="w3-padding">
                    {this.props.moreInfo}
                </p>
            </div>
        );
    }
}





export default Page;

