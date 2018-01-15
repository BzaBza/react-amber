import React, {Component} from 'react';

import MainHeader from '../components/Smart/main-header/index';
import MainFooter from '../components/Smart/main-footer/index';
import Sidebar from '../components/Smart/sidebar/index';
import PortfolioSlider from '../components/Smart/portfolio-slider/index';


class Portfolio extends Component {
    render() {
        return (
            <div>
                <MainHeader/>
                <div className="container d-flex portfolio-single-content">
                    <section className="single-content col-md-12 d-flex">
                        <PortfolioSlider/>
                        <Sidebar/>
                    </section>
                </div>
                <MainFooter/>
            </div>
        );
    }
}

export default Portfolio;