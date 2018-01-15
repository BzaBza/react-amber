import React, { Component } from 'react';

import QuoteFirstSlide from '../../../graphic/quote-slider/any.jpg';
import QuoteSecondSlide from '../../../graphic/quote-slider/any (1).jpg';
import QuoteThirdSlide from '../../../graphic/quote-slider/any (2).jpg';

class QuoteSection extends Component {
    render() {
        return (
            <section className="quote-section text-center">
                <div id="myCarousel" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" className="active"/>
                        <li data-target="#myCarousel" data-slide-to="1"/>
                        <li data-target="#myCarousel" data-slide-to="2"/>
                    </ol>
                    <div className="carousel-inner" role="listbox">
                        <div className="carousel-caption d-none d-md-block quote-content">
                            <p>
                                Thereby, the whale commanders are enabled to recognise each other upon the ocean, even at
                                considerable distances
                                and with no small facility.
                            </p>
                            <a href="#" className="d-flex flex-row justify-content-center main-color"> — Moby-Dick, Herman Melville.</a>
                        </div>
                        <div className="carousel-item active">
                            <img className="d-block img-fluid col-md-12" src={QuoteFirstSlide} alt="First slide"/>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block img-fluid col-md-12" src={QuoteSecondSlide} alt="Second slide"/>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block img-fluid col-md-12gu" src={QuoteThirdSlide} alt="Third slide"/>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default QuoteSection;
