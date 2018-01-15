
import React, { Component } from 'react';

import MainHeader from '../components/Smart/main-header/index';
import MainFooter from '../components/Smart/main-footer/index';
import LatestWorks from "../components/Smart/latest-work/index";



class GridGallery extends Component {
    render() {
        return (
            <div>
                <MainHeader/>
                <LatestWorks/>
                <MainFooter/>
            </div>
        );
    }
}

export default GridGallery;