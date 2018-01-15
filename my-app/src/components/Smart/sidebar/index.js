import React, { Component } from 'react';

class Sidebar extends Component {
    render() {
        return (
            <aside className="col-md-3">
                <div className="slide-buttons">
                    <button type="button" class="slide-button yellow-color"><i className="fa fa-chevron-left" aria-hidden="true"/></button>
                    <button type="button" class="slide-button yellow-color"><i className="fa fa-chevron-right" aria-hidden="true"/></button>
                </div>
                <div className="d-flex align-items-center">
                    <i className="fa fa-heart" aria-hidden="true"/>
                    <p className="p-style">257</p>
                </div>
                <div className="single-aside-content">
                    <h4 className="yellow-color">Art Direction, Web Design</h4>
                    <p>Gingerbread candy chupa chups topping. Halvah cake croissant jelly beans. Unerdwear.com brownie
                        lollipop
                        sesame snaps bear claw sweet roll sweet I love soufflé.

                        Caramels powder gummies pudding danish sesame snaps. Sweet roll caramels fruitcake bonbon unerdwear.

                    </p>
                    <ul>
                        <li className="single-aside-content-header">Work description</li>
                        <li className="d-flex align-items-center"><i className="fa fa-check-square-o yellow-color" aria-hidden="true"/><p class="p-style">Brownie ice cream carrot</p></li>
                        <li className="d-flex align-items-center"><i className="fa fa-check-square-o yellow-color" aria-hidden="true"/><p class="p-style">Carrot cake apple pie</p></li>
                        <li className="d-flex align-items-center"><i className="fa fa-check-square-o yellow-color" aria-hidden="true"/><p class="p-style">Love applicake I love</p></li>
                        <li className="d-flex align-items-center"><i className="fa fa-check-square-o yellow-color" aria-hidden="true"/><p class="p-style">Chocolate bar pudding</p></li>
                        <li>
                            <button type="button" className="yellow-button">BUY NOW</button>
                        </li>
                    </ul>
                </div>
            </aside>
        );
    }
}

export default Sidebar;
