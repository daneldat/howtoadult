import React, { Component } from 'react';
import ReactDOM from "react";
import "../../w3.css";


class Page extends React.Component {
    render() {
        return (
            <body className= "w3-white " style={{"height":"100%"}}>
           <div className="Page " style={{ "margin-left": "15%" }}>
                <header className="w3-container w3-red w3-center " >
                    <h2 className="w3-xxlarge">Adulting 101:</h2>
                    <h2 className="w3-xlarge">{this.props.title}</h2>
                </header>

                <div>

                </div>
                <p className="w3-container w3-center w3-padding">
                    {this.props.body}
                    </p>
                <div className= "w3-content" style={{"max-width":"600px"}}>
                <div className="w3-card-2 w3-round-large w3-light-grey w3-center w3-padding w3-display-center" style={{ "width": 600 }}>
                    Don't want to read? This video may help: <p></p>
                    <iframe
                        className= "w3-margin-bottom"
                        width="560"
                        height="315"
                        src={this.props.videoID}
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen >
                    </iframe >
                </div>
                </div>
               
               


                <p className=" w3-container w3-padding">
                    {this.props.moreInfo}
                </p>
                <ol type="1">
                    <li>{this.props.step1}</li>
                    <li>{this.props.step2}</li>
                    <li>{this.props.step3}</li>
                    <li>{this.props.step4}</li>
                    <li>{this.props.step5}</li>
                </ol>
                <p className="w3-container" style={{ "margin-left": "15%" }}>

                </p>
               </div>
            </body>
        );
    }
}





export default Page;

