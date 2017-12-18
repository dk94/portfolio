import React from 'react';
import ReactDom from 'react-dom';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

import {Provider} from 'react-redux';
import {createStore} from 'redux';

const store = {}
const Header = () => {
    return (
        <div className="header-top-area">
            <div className="container">
                <div className="row">

                    <div className="col-sm-3">
                        <div className="logo">
                            <a href="index-2.html">DK</a>
                        </div>
                    </div>

                    <div className="col-sm-9">
                        <div className="navigation-menu">
                            <div className="navbar">
                                <div className="navbar-header">
                                    <button type="button" className="navbar-toggle" data-toggle="collapse"
                                            data-target=".navbar-collapse">
                                        <span className="sr-only">Toggle navigation</span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                    </button>
                                </div>
                                <div className="navbar-collapse collapse" aria-expanded="false" style={{height: "1px"}}>
                                    <ul className="nav navbar-nav navbar-right">
                                        <li className="active"><a className="smoth-scroll" href="#home">Home
                                            <div className="ripple-wrapper"></div>
                                        </a>
                                        </li>
                                        <li className=""><a className="smoth-scroll" href="#about">About</a>
                                        </li>
                                        <li className=""><a className="smoth-scroll" href="#portfolio">Portfolio</a>
                                        </li>
                                        <li className=""><a className="smoth-scroll" href="#contact">Contact</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
}

const App = (
    <Router>
        <Header/>
    </Router>



)

ReactDom.render(
    App,
    document.querySelector("#content")
);
