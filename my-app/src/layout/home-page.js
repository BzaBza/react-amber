import React, { Component } from 'react';

import MainHeader from '../components/Smart/main-header/index';
import MainFooter from '../components/Smart/main-footer/index';
import WelcomeSection from '../components/Smart/home-welcome-section/index';
import StealSection from  '../components/Smart/steal/index';
import LatestWorks from "../components/Smart/latest-work/index";
import Amber from "../components/Smart/amber/index";
import Fitures from "../components/Smart/fitures/index";
import QuoteSection from "../components/Smart/quote-section/index";
import LatestPosts from "../components/Smart/latest-posts/index";
import ExpirienceSection from "../components/Smart/expirince-section/index";
import OurTeam from "../components/Smart/our-team/index";


class HomePage extends Component {
    render() {
        return (
            <div>
                <MainHeader/>
                <WelcomeSection/>
                <StealSection/>
                <LatestWorks/>
                <Amber/>
                <Fitures/>
                <QuoteSection/>
                <LatestPosts/>
                <ExpirienceSection/>
                <OurTeam/>
                <MainFooter/>
            </div>
        );
    }
}

export default HomePage;