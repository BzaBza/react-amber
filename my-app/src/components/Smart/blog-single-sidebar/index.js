import React, { Component } from 'react';

class BlogSingleSidebar extends Component {
    render() {
        return (
            <aside className="col-md-4 aside">
                <section className="aside-categories">
                    <header><h4>Categories</h4></header>
                    <ul>
                        <li><a href="#" className="main-color hover-link">Creative portfolio</a></li>
                        <li><a href="#" className="main-color hover-link">Onmouseover category</a></li>
                        <li><a href="#" className="main-color hover-link">Amber golden</a></li>
                        <li><a href="#" className="main-color hover-link">Amsterdam fight gear</a></li>
                        <li><a href="#" className="main-color hover-link">Creamy cucumber</a></li>
                    </ul>
                </section>


                <section className="aside-recent-comments">
                    <header>
                        <h4>Recent comments</h4>
                    </header>
                    <ul>
                        <li>
                            <p>Igor Ligay on</p>
                            <a href="#" className="main-color hover-link">The hope of a young naval lieutenant bravely patrolling</a></li>
                        <li>
                            <p>Farhad Yusupov on</p>
                            <a href="#" className="main-color hover-link">Politicians routinely exploited fears of crime</a></li>
                        <li>
                            <p>John Doe on</p>
                            <a href="#" className="main-color hover-link"> There was even a time when the Christian Coalition determined that
                                its number one</a>
                        </li>
                    </ul>
                </section>


                <section className="aside-latest-works">
                    <header><h4>Latest work</h4></header>
                    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner" role="listbox">
                            <div className="carousel-item active">
                                <img className="d-block img-fluid" src="..." alt="First slide"/>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block img-fluid" src="..." alt="Second slide"/>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block img-fluid" src="..." alt="Third slide"/>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"/>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"/>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </section>

                <section className="aside-tag-cloud">
                    <header>
                        <h4>Tag cloud</h4>
                    </header>
                    <ul className="d-flex flex-wrap">
                        <li><a href="#" className="button">bad boy</a></li>
                        <li><a href="#" className="button">winter</a></li>
                        <li><a href="#" className="button">is coming</a></li>
                        <li><a href="#" className="button">south</a></li>
                        <li><a href="#" className="button">mouseover</a></li>
                        <li><a href="#" className="button">asia</a></li>
                        <li><a href="#" className="button">surfing</a></li>
                        <li><a href="#" className="button">iceland</a></li>
                        <li><a href="#" className="button">she</a></li>
                        <li><a href="#" className="button">china</a></li>
                        <li><a href="#" className="button">daytona</a></li>
                    </ul>
                </section>
            </aside>

    );
    }
}

export default BlogSingleSidebar;
