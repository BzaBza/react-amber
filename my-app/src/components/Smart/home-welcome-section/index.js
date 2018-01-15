import React, { Component } from 'react';
import FirstSlide from '../../../graphic/slider/1398136391621.jpg';
import SecondSlide from '../../../graphic/slider/674913.jpg';
import ThirdSlide from '../../../graphic/slider/585349318-1980-x-1020-hd-wallpapers.jpg';

class WelcomeSection extends Component {
    render() {
        return (
            <section className="welcome">
                <div className="carousel-caption d-flex align-content-center justify-content-center flex-wrap welcome-content">
                    <div className="col-md-12">
                        <h2><span className="main-color flex-row d-flex justify-content-center">Creating a unique look.</span><span>Never been easier.</span>
                        </h2>
                    </div>
                    <div className="flex-row col-md-12 d-flex justify-content-center welcome-buttons">
                        <button type="button" className="button welcome-button">see features</button>
                        <button type="button" className="button">purchase now</button>
                    </div>
                </div>
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"/>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"/>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"/>
                    </ol>
                    <div className="carousel-inner" role="listbox">
                        <div className="carousel-item active">
                            <img className="carousel-img col-md-12" src={FirstSlide} alt="First slide"/>
                        </div>
                        <div className="carousel-item">
                            <img className="carousel-img col-md-12" src={SecondSlide} alt="Second slide"/>
                        </div>
                        <div className="carousel-item">
                            <img className="carousel-img col-md-12" src={ThirdSlide} alt="Third slide"/>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default WelcomeSection;
