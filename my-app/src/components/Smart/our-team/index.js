import React, { Component } from 'react';

import PhotoOne from '../../../graphic/our-team/placeimg_210_280_any.jpg';
import PhotoTwo from '../../../graphic/our-team/placeimg_210_280_any (1).jpg';
import PhotoThree from '../../../graphic/our-team/placeimg_210_280_any (2).jpg';
import PhotoFour from '../../../graphic/our-team/placeimg_210_280_any (4).jpg';



class OurTeam extends Component {
    render() {
        return (
            <section className="our-team text-center">
                <header>
                    <h2>Our team</h2>
                </header>
                <ul className="our-team-list d-flex container justify-content-center flex-row text-center flex-wrap">
                    <li className="col-md-3 d-flex justify-content-center flex-wrap align-items-end">
                        <img src={PhotoOne} alt="photo"/>
                            <div className="our-team-list-content d-flex flex-wrap justify-content-center">
                                <div className="back-info"><p className="name main-color">Luke Dunphy</p>
                                    <p>NATO representative</p></div>
                                <p className="container">Be who you are and say what you feel, because those who mind don't
                                    matter.</p>
                                <a href="#"/>
                            </div>
                            <div className="container">
                                <button className="button our-team-button" type="button">profile</button>
                            </div>
                    </li>
                    <li className="col-md-3  d-flex justify-content-center flex-wrap align-items-end">
                        <img src={PhotoTwo} alt="photo"/>
                            <div className="our-team-list-content  d-flex flex-wrap justify-content-center">
                                <div className="back-info"><p className="name main-color">Luke Dunphy</p>
                                    <p>NATO representative</p></div>
                                <p className="container">Be who you are and say what you feel, because those who mind don't
                                    matter.</p>
                                <a href="#"/>
                            </div>
                            <div className="container">
                                <button className="button our-team-button" type="button">profile</button>
                            </div>
                    </li>
                    <li className="col-md-3  d-flex justify-content-center flex-wrap align-items-end">
                        <img src={PhotoThree} alt="photo"/>
                            <div className="our-team-list-content d-flex flex-wrap justify-content-center">
                                <div className="back-info"><p className="name main-color">Luke Dunphy</p>
                                    <p>NATO representative</p></div>
                                <p className="container">Be who you are and say what you feel, because those who mind don't
                                    matter.</p>
                                <a href="#"/>
                            </div>
                            <div className="container">
                                <button className="button our-team-button" type="button">profile</button>
                            </div>
                    </li>
                    <li className="col-md-3  d-flex justify-content-center flex-wrap align-items-end">
                        <img src={PhotoFour} alt="photo"/>
                            <div className="our-team-list-content d-flex flex-wrap justify-content-center">
                                <div className="back-info"><p className="name main-color">Luke Dunphy</p>
                                    <p>NATO representative</p></div>
                                <p className="container">Be who you are and say what you feel, because those who mind don't
                                    matter.</p>
                                <a href="#"/>
                            </div>
                            <div className="container">
                                <button className="button our-team-button" type="button">profile</button>
                            </div>
                    </li>
                </ul>
            </section>
        );
    }
}

export default OurTeam;
