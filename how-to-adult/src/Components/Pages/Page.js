import React, { Component } from 'react';
import ReactDOM from "react";
import './Page.css';
import Menu from '../../DropdownMenu/Menu';


class Page extends React.Component{
    render(){
        return (
            <div className="Page">
                <h1>
                {this.props.title}
                </h1>
                <div style={{ background: "#00FFFF" }}>
        
        </div>
        <p>
            {this.props.body}
        </p>
        <p>
            Here is a link that you can click on for a video to show you {this.props.title}.
          </p>
          <a
         className="App-link1"
          href={this.props.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {this.props.title}
        </a>
         
        <p>
            Here is more information about {this.props.title}
            </p>
            <p>
                {this.props.moreInfo}
            </p>
            </div>
        );
    }
}





export default Page;

