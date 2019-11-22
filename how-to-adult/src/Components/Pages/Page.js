import React, { Component } from 'react';
import ReactDOM from "react";
import "../../w3.css";
import YouTube from 'react-youtube-embed'


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
                    {this.props.introduction}
                </p>
                
                {//<p classname=".w3-container" style ={height = "10vh"}>
                //<YouTube id = {this.props.video} />
                //</p>
                 }   

                <p className="w3-card w3-light-grey w3-margin w3-center w3-padding">
                    Don't want to read? This video may help: <p></p>
                    <a href={this.props.link}> {this.props.title}</a>
                </p>


                <p className="w3-padding">
                    {this.props.moreInfo}
                </p>
                <ol type="1">
                    <li>{this.props.step1}</li>
                    <li>{this.props.step2}</li>
                    <li>{this.props.step3}</li>
                    <li>{this.props.step4}</li>
                    <li>{this.props.step5}</li>
                </ol>
            </div>
        );
    }
}





export default Page;

