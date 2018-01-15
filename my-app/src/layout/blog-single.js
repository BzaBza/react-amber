import React, {Component} from 'react';

import MainHeader from '../components/Smart/main-header/index';
import MainFooter from '../components/Smart/main-footer/index';
import BlogSingleSidebar from '../components/Smart/blog-single-sidebar/index';
import BlogSingleContent from '../components/Smart/blog-single-content/index';
import BlogSigleBlue from '../components/Smart/blog-single-blue/index';


class BlogSingle extends Component {
    render() {
        return (
            <div>
                <MainHeader/>
                <BlogSingleContent/>
                <BlogSingleSidebar/>
                <BlogSigleBlue/>
                <MainFooter/>
            </div>
        );
    }
}

export default BlogSingle;