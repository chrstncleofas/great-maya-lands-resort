import './App.css';
import React from 'react';
import ShowcaseImg from './img/Showcase-Images.png';

const Showcase = () => {
    return (
        <section id="showcase-area">
            <div id="showcase">
                <div class="content">
                    <h5>Find you</h5>
                    <h3>Dream</h3>
                    <h2>Property</h2>
                    <p>From Search to Sold: Transforming Properties, Elevating Lives</p>
                    <a className="btnView" href="#main">
                        View More <i className="fas fa-arrow-right"></i>
                    </a>
                </div>
                <div className='image-container'>
                    <img className="imageClass" src={ShowcaseImg} alt="Img" />
                </div>
            </div>
        </section>
    );
}

export default Showcase;