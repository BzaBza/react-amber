import React, {Component} from 'react';
import NavHeader from "../../Dumb/nav-header/index";
import Navigation from "../../Dumb/navigation/index";


class MainHeader extends Component {
    render() {
        return (
            <header id="nav-header">
                <NavHeader/>
                <Navigation/>
            </header>
        );
    }
}

export default MainHeader;
