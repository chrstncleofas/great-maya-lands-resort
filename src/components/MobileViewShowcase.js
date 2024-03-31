import '../App.css';
import React from 'react';
import { RiArrowRightSLine } from 'react-icons/ri';
import backgroundImg from '../components/img/Background-Image.png';

const MobileViewShowcase = () => {
    return (
        <section id="showcase-area-2">
            <img className="imageClass" src={backgroundImg} alt="Img" />
            <div id="showcase-2">
                <div className="content-2">
                    <h5>Find you</h5>
                    <h3>Dream</h3>
                    <h2>Property</h2>
                    <p>From Search to Sold: Transforming Properties, Elevating Lives</p>
                    <a className="btnView-2" href="#main">
                        <span className='txtView'>View More</span> <RiArrowRightSLine className='iconTag'/>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default MobileViewShowcase;
