import React, {Component} from 'react';

import FirstSlide from '../../../graphic/portfolio-single/placeimg_690_900_any (1).jpg';
import SecondSlide from '../../../graphic/portfolio-single/placeimg_690_900_any.jpg';
import ThirdSlide from '../../../graphic/portfolio-single/placeimg_690_900_any (2).jpg';

class PortfolioSlider extends Component {
    render() {
        return (
            <div className="slider col-md-9">
                <div id="myCarousel" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner" role="listbox">
                        <div className="carousel-item active">
                            <img className="d-block img-fluid" src={FirstSlide}
                                 alt="First slide"/>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block img-fluid" src={SecondSlide}
                                 alt="Second slide"/>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block img-fluid" src={ThirdSlide}
                                 alt="Third slide"/>
                        </div>
                    </div>
                    <a className="carousel-control-prev control" href="#myCarousel" role="button"
                       data-slide="prev">
                        <i className="fa fa-chevron-left" aria-hidden="true"/>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next control" href="#myCarousel" role="button"
                       data-slide="next">
                        <i className="fa fa-chevron-right" aria-hidden="true"/>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        );
    }
}

export default PortfolioSlider;
