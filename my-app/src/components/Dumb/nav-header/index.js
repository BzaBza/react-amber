import React, { Component } from 'react';

class NavHeader extends Component {
    render() {
        return (
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
        );
    }
}

export default NavHeader;
