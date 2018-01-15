import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Navigation extends Component {
    render() {

        let menus = [
            {linkName: 'Home', path: '/'},
            {linkName: 'Portfolio', path: '/portfolio'},
            {linkName: 'Blog', path: '/blog'},
            {linkName: 'Pages', path: '/blog/single'},
            {linkName: 'Elements', path: '/portfolio/single'},
            {linkName: 'eCommerse', path: 'ecommerse'},
            {linkName: 'Mega menu', path: 'mega-menu'}
            ];

        return (
            <div className="bottom-bar">
                <a className="navbar-brand">
                    <h1 className="brand">Amber</h1>
                </a>
                <ul className="navigation">
                    {menus.map((value, index) => {
                        return <li key={index}><Link to={value.path.toLowerCase()}>{value.linkName}</Link></li>
                    })}
                </ul>
            </div>
        );
    }
}

export default Navigation;
