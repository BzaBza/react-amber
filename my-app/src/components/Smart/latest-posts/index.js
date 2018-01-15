import React, {Component} from 'react';
import SecondPhoto from '../../../graphic/blog-post/placeimg_290_220_any (1).jpg';
import FirstPhoto from '../../../graphic/blog-post/placeimg_290_220_any.jpg';
import LastPhoto from '../../../graphic/blog-post/placeimg_290_220_any.png';

class LatestPosts extends Component {
    render() {
        return (
            <section className="latest-posts  d-flex  flex-wrap justify-content-center">
                <header className="text-center col-md-12">
                    <h2 className="text-center">
                        Latest blog posts
                    </h2>
                </header>
                <div className="container d-flex  flex-wrap justify-content-center">
                    <ul className="d-flex flex-wrap justify-content-center">
                        <li className="post"><img src={FirstPhoto} />
                            <h3><a href="blog-posts.html" className="main-color">Runway to Red Carpet: Awards Season</a>
                            </h3>
                            <p>Her father worked on oil rigs and farms that through most of the Depression. But it is a
                                new story
                                that has seared into my genetic.</p>
                            <div className="flex-row d-flex justify-content-between">
                                <a className="main-color">Learn more</a><a className="comments">450</a>
                            </div>
                        </li>
                        <li className="post"><img src={SecondPhoto}/>
                            <h3><a href="blog-posts.html" className="main-color">Runway to Red Carpet: Awards Season</a>
                            </h3>
                            <p>Her father worked on oil rigs and farms that through most of the Depression. But it is a
                                new story
                                that has seared into my genetic.</p>
                            <div className="flex-row d-flex justify-content-between">
                                <a className="main-color">Learn more</a><a className="comments">450</a>
                            </div>
                        </li>
                        <li className="post"><img src={LastPhoto}/>
                            <h3><a href="blog-posts.html" className="main-color">Runway to Red Carpet: Awards Season</a>
                            </h3>
                            <p>Her father worked on oil rigs and farms that through most of the Depression. But it is a
                                new
                                story
                                that has seared into my genetic.</p>
                            <div className="flex-row d-flex justify-content-between">
                                <a href="blog-posts.html" className="main-color">Learn more</a><a className="comments">450</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        );
    }
}

export default LatestPosts;
