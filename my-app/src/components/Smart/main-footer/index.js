import React, { Component } from 'react';
import '../../../include/bootstrap'


class MainFooter extends Component {
    render() {
        return (
            <footer className="main-footer">
                <ul className="d-flex container flex-wrap">
                    <li className="col-md-3 violet-footer">
                        <header>Get in touch</header>
                        <ul>
                            <li>
                                <p className="address">Address</p>
                                <p>321 Street Name, United Kingdom, London</p>
                            </li>cd
                            <li>
                                <p>Phone:</p>
                                <p> +7 998 71 150 30 20</p>
                            </li>
                            <li>
                                <p>Email:</p>
                                <p>info@ambertheme.com</p>
                            </li>
                            <li><img src="graphic/map.png" alt="map"/></li>
                        </ul>
                    </li>
                    <li className="col-md-3 blue-footer">
                        <header>Latest tweets</header>
                        <ul>
                            <li><p>CMS Masters And Their Best Web Design Tools #bestwebdesigntools #webdesign
                                <span>— about 12 min ago</span></p></li>
                            <li><p>
                                WOOCOMMERCE functionality added!!! See Industrial theme become even powerful! <span>-bit.ly/industrial-wp</span>
                                <span>— about 47 days ago</span></p></li>
                            <li><p>CMS Masters And Their Best Web Design Tools #bestwebdesigntools #webdesign
                                <span>— about 12 min ago</span></p></li>
                        </ul>
                    </li>
                    <li className="col-md-3 pink-footer">
                        <header>Follow us</header>
                        <ul>
                            <li>Like us on Facebook</li>
                            <li>Follow us on Twitter</li>
                            <li>Watch videos on YouTube</li>
                            <li>Friend us on Instagram</li>
                            <li>Repin on Pinterest</li>
                        </ul>
                    </li>
                    <li className="col-md-3 orange-footer">
                        <header>Popular posts</header>
                        <ul>
                            <li>
                                <p>September, 30</p>
                                <p>Candy canes dragée pudding. Donut cheesecake I love chocolate icing</p>
                            </li>
                            <li>
                                <p>April, 22</p>
                                <p>Muffin croissant cookie sesame snaps. Ice cream donut cookie gingerbread</p>
                            </li>
                            <li>
                                <p>May, 12</p>
                                <p>Cotton candy muffin tart gummies candy danish liquorice chupa chups tootsie roll</p>
                            </li>
                        </ul>
                    </li>
                </ul>
                <div className="d-flex justify-content-between container">
                    <div className="copyright">
                        <p>© 2014 StylemixThemes. All rights reserved.</p>
                        <p> Powered by WordPress.</p>
                    </div>
                    <a className="button footer-to-top ">Back to top of page 🠱</a>
                </div>
            </footer>
        );
    }
}

export default MainFooter;
