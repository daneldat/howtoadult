import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Page from './Page';
import * as serviceWorker from './serviceWorker';
import Dropdown from './DropdownMenu/Dropdown';

var displayDropdown =(
    <div style={{display:'flex', justifyContent: 'center'}}>
        <Dropdown/>
    </div>
);




const howToVote = <Page title="How to Vote" link = "https://www.youtube.com/channel/UC7SMwipBlDwBPEwxq8QD8sw" moreInfo="really alot" body="First you have to be 18 years of age to vote.  But that does not mean that you should wait until you are 18 to register to vote.  Once you have registered to vote then you need to know where to vote...etc. I wonder if this text will wrap around or wehterh I need to figure out how to code that" />;

ReactDOM.render(howToVote, document.getElementById('root'));
//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
