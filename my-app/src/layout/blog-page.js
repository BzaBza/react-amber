import React, { Component } from 'react';


import MainHeader from '../components/Smart/main-header/index';
import MainFooter from '../components/Smart/main-footer/index';
import LatestPosts from "../components/Smart/latest-posts/index";




class Blog extends Component {
    render() {
        return (
            <div>
                <MainHeader/>
                <LatestPosts/>
                <MainFooter/>
            </div>
        );
    }
}

export default Blog;
