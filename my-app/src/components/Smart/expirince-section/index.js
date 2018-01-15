import React, { Component } from 'react';

class ExpirienceSection extends Component {
    render() {
        return (
            <section className="expirience text-center">
                <header className="expirience-header">
                    <h3>
                        Company expirience
                    </h3>
                </header>
                <div className="d-flex justify-content-center flex-wrap">
                    <div className="progress-radial progress-25">
                        <div className="gears"/>
                        <div className="overlay"/>
                    </div>

                    <div className="progress-radial progress-50">
                        <div className="phone"/>
                        <div className="overlay"/>
                    </div>

                    <div className="progress-radial progress-75">
                        <div className="rocket"/>
                        <div className="overlay"/>
                    </div>
                </div>
                <ul className="radial-info d-flex justify-content-center container flex-wrap">
                    <li className="col-md-3"><h1>500</h1>
                        <p>years of web development</p></li>
                    <li className="col-md-3"><h1>25 000</h1>
                        <p>results of the last
                            winter year</p></li>
                    <li className="col-md-3"><h1>100 000</h1>
                        <p>euros of the military
                            budget</p></li>
                </ul>
            </section>
        );
    }
}

export default ExpirienceSection;
