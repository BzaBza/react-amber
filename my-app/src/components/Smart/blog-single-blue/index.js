import React, { Component } from 'react';

class BlogSigleBlue extends Component {
    render() {
        return (
            <div className="blue-section">
                <div className="container">
                    <section className="form col-md-8">
                        <h2>Add comment</h2>
                        <form action="#">
                            <div className="d-flex justify-content-center">
                                <ul className="d-flex flex-wrap justify-content-between">
                                    <li>
                                        <label for="name" className="row  col-md-12">Name</label>
                                        <input type="text" id="name"/>
                                    </li>
                                    <li>
                                        <label for="email" className="row col-md-12">Email</label>
                                        <input type="email" id="email"/>
                                    </li>
                                    <li>
                                        <label for="website" className="row col-md-12">Website (optional)</label>
                                        <input type="text" id="website"/>
                                    </li>
                                    <li><label className="row col-md-3" for="message">Message</label>
                                        <textarea className="col-md-12" name="message" id="message" cols="100" rows="10"/>
                                    </li>
                                    <li className="d-flex justify-content-end col-md-12">
                                        <button className="button" type="submit">ADD COMMENT</button>
                                    </li>
                                </ul>
                            </div>
                        </form>
                    </section>


                    <section className="blog-single-comments col-md-8">
                        <header><h3>24 Comments</h3></header>
                        <ul>
                            <li className="comment">
                                <header>
                                    <div className="d-flex justify-content-between">
                                        <a href="#" className="main-color">Administrator</a>
                                        <a href="#" className="main-color">Reply</a>
                                    </div>
                                    <div className="data">
                                        <p>September 17, 2013 @ 1:38 pm</p>
                                    </div>
                                </header>
                                <p>Small batch sartorial, single-origin coffee food truck tousled sed swag hella synth bitters next
                                    level
                                    consectetur Helvetica twee. Craft beer ea tofu sint reprehenderit cornhole, occaecat put a bird
                                    on
                                    it
                                    single-origin coffee Tonx. Small batch 3 wolf moon ad, adipisicing fap cornhole.</p>
                            </li>
                            <li className="col-md-11 user-comment">
                                <header>
                                    <div className="d-flex justify-content-between">
                                        <a href="#" className="main-color">Alina</a>
                                    </div>
                                    <div className="data">
                                        <p>September 17, 2013 @ 1:38 pm</p>
                                    </div>
                                </header>
                                <p>Small batch sartorial, single-origin coffee food truck tousled sed swag hella synth bitters next
                                    level
                                    consectetur Helvetica twee. Craft beer ea tofu sint reprehenderit cornhole, occaecat put a bird
                                    on
                                    it
                                    single-origin coffee Tonx. Small batch 3 wolf moon ad, adipisicing fap cornhole.</p>
                            </li>
                            <li className="comment">
                                <header>
                                    <div className="d-flex justify-content-between">
                                        <a href="#" className="main-color">Administrator</a>
                                    </div>
                                    <div className="data">
                                        <p>September 17, 2013 @ 1:38 pm</p>
                                    </div>
                                </header>
                                <p>Small batch sartorial, single-origin coffee food truck tousled sed swag hella synth bitters next
                                    level
                                    consectetur Helvetica twee. Craft beer ea tofu sint reprehenderit cornhole, occaecat put a bird
                                    on
                                    it
                                    single-origin coffee Tonx. Small batch 3 wolf moon ad, adipisicing fap cornhole.</p>
                            </li>
                        </ul>
                    </section>
                </div>
            </div>

    );
    }
}

export default BlogSigleBlue;
