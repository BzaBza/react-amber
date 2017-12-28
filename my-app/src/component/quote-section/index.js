import React, { Component } from 'react';

class MainHeader extends Component {
    render() {
        return (
            <header id="nav-header">
                <div className="top-bar d-flex flex-wrap">
                    <form action="#" className="search">
                        <input type="search" placeholder="search" className="search-input"/>
                        <button type="submit" className="search-button">sss</button>
                    </form>
                    <ul className="top-bar-links">
                        <li><a className="login">Login</a></li>
                        <li><a className="register">Register</a></li>
                    </ul>
                </div>
                <div className="bottom-bar">
                    <a className="navbar-brand">
                        <h1 className="brand">Amber</h1>
                    </a>
                    <ul className="navigation">
                        <li className="yellow"><a>home</a></li>
                        <li className="orange"><a>typography</a></li>
                        <li className="pink"><a href="blog-single.html">blog</a></li>
                        <li className="dark-pink"><a href="portfolio-single.html">pages</a></li>
                        <li className="violet"><a>elements</a></li>
                        <li className="dark-blue"><a>eCommerse</a></li>
                        <li className="blue"><a>mega menu</a></li>
                    </ul>
                </div>
            </header>
        );
    }
}

export default MainHeader;
