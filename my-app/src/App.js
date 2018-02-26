import React, {Component, render} from 'react';
import {Router, Route} from 'react-router';

import HomePage  from './layout/home-page';
import Blog  from './layout/blog-page';
import BlogSingle from './layout/blog-single';
import Portfolio  from './layout/portfolio';
import GridGallery from './layout/grid-gallery';

import './index.css';
import './include/bootstrap';

import createBrowserHistory from 'history/createBrowserHistory';
const customHistory = createBrowserHistory();


class App extends Component {
    render() {
        return (
            <Router history={customHistory}>
                <div>
                    <Route exact path='/' component={HomePage}/>
                    <Route exact path='/blog' component={Blog}/>
                    <Route path='/blog/single' component={BlogSingle}/>
                    <Route exact path='/portfolio' component={Portfolio}/>
                    <Route path='/portfolio/single' component={GridGallery}/>
                </div>
            </Router>
        );
    }
}

export default App;



