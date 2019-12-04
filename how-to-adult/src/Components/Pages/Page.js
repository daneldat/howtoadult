import React, { Component } from 'react';
import ReactDOM from "react";
import "../../w3.css";



class Page extends React.Component {
    render() {
        return (
            <div className='w3-container w3-light-grey' style={{ height: "100vh", "margin-left": "10%", "overflow": "auto" }}>
                <div className='w3-container w3-bar-block w3-blue-grey w3-center' style={{ "width": "100vw" }}>
                    <h2 className="w3-xxlarge" >Adulting 101:</h2>
                    <h2 className="w3-xlarge">{this.props.title}</h2>
                </div>

                <p className="w3-container w3-center w3-padding" style={{ "margin-left": "10%" }}>
                    {this.props.body}
                </p>
                <p className=" w3-container w3-card w3-center w3-padding w3-large w3-serif" style={{ "margin-left": "10%" }}>
                    <i>{this.props.quote}</i>
                    <br></br>
                {this.props.quoteAuthor}
                </p>

                <p className=" w3-container w3-padding" style={{ "margin-left": "5%" }}>
                    {this.props.moreInfo}
                </p>
                <ol style={{ "margin-left": "6%" }} type="1">
                    <li>{this.props.step1}</li>
                    <li>{this.props.step2}</li>
                    <li>{this.props.step3}</li>
                    <li>{this.props.step4}</li>
                    <li>{this.props.step5}</li>
                </ol>

                <div className=" w3-container w3-card-2 w3-round-large w3-blue-grey w3-center w3-padding w3-display-center" style={{ "height": "50%", "width": "50%", "margin-left": "25%", "margin-right": "15%" }}>
                    Don't want to read? This video may help: <p></p>
                    <iframe
                        className="w3-margin-bottom"
                        width="90%vw"
                        height="80%"
                        src={this.props.videoID}
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen >
                    </iframe >
                </div>

            </div>

        );
    }
}





export default Page;

