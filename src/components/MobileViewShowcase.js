import '../App.css';
import React from 'react';
import { RiArrowRightSLine } from 'react-icons/ri';

const MobileViewShowcase = () => {
    return (
        <section id="showcase-area-2">
            <div id="showcase-2">
                <div className="content-2">
                    <h5>Find you</h5>
                    <h3>Dream</h3>
                    <h2>Property</h2>
                    <p>From Search to Sold: Transforming Properties, Elevating Lives</p>
                    <a className="btnView-2" href="#main">
                        View More <RiArrowRightSLine />
                    </a>
                </div>
            </div>
        </section>
    );
}

export default MobileViewShowcase;
