import React, { Component } from 'react';
import EllipseOne from '../../../graphic/latest-works/placeimg_290_290_any.jpg';
import EllipseTwo from '../../../graphic/latest-works/placeimg_290_290_any (1).jpg';
import EllipseThree from '../../../graphic/latest-works/placeimg_290_290_any (2).jpg';

class LatestWorks extends Component {
    render() {
        return (
            <section className="latest-works">
                <div className="container d-flex justify-content-center flex-wrap text-center">
                    <header>
                        <h2 className="latest-work-header">Latest works</h2>
                        <p>That we can tuck in our children at night and know that they are fed and clothed and safe from harm. Our
                            trials and triumphs became at once unique and universal.</p>
                    </header>
                    <ul className="slider-latest-works d-flex flex-wrap justify-content-center">
                        <li><img src={EllipseOne} alt="ellipse"/>
                            <ul className="ellipse">
                                <li>
                                    <button type="button" className="like"/>
                                </li>
                                <li>
                                    <button type="button" className="zoom"/>
                                </li>
                                <li>
                                    <button type="button" className="fix"/>
                                </li>
                            </ul>
                            <ul className="works-bottom-info">
                                <li className="d-flex justify-content-between"><span>Lindemans Wine</span><span className="white-like"/></li>
                                <li className="d-flex justify-content-between main-color"><span>Art Direction, Web Design</span><span
                                    className="align-right">257</span></li>
                            </ul>
                        </li>
                        <li><img src={EllipseTwo} alt="ellipse"/>
                            <ul className="ellipse">
                                <li>
                                    <button type="button" className="like"/>
                                </li>
                                <li>
                                    <button type="button" className="zoom"/>
                                </li>
                                <li>
                                    <button type="button" className="fix"/>
                                </li>
                            </ul>
                            <ul className="works-bottom-info">
                                <li className="d-flex justify-content-between"><span>Lindemans Wine</span><span className="white-like"/></li>
                                <li className="d-flex justify-content-between main-color"><span>Art Direction, Web Design</span><span>257</span>
                                </li>
                            </ul>
                        </li>
                        <li><img src={EllipseThree} alt="ellipse"/>
                            <ul className="ellipse">
                                <li>
                                    <button type="button" className="like"/>
                                </li>
                                <li>
                                    <button type="button" className="zoom"/>
                                </li>
                                <li>
                                    <button type="button" className="fix"/>
                                </li>
                            </ul>
                            <ul className="works-bottom-info">
                                <li className="d-flex justify-content-between"><span>Lindemans Wine</span><span
    className="white-like"/></li>
                                <li className="d-flex justify-content-between main-color"><span>Art Direction, Web Design</span><span
                                    className="align-right">257</span></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </section>
        );
    }
}

export default LatestWorks;
