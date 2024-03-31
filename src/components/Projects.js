import '../App.css';
import React from 'react';
import { RiArrowRightSLine } from 'react-icons/ri';
import Image1 from '../components/img/P1.png';
import Image2 from '../components/img/P2.png';
import Image3 from '../components/img/P3.png';

const Projects = () => {
    return (
        <section id="projects">
            <div className='content-top-left'>
                <h4>Our Projects</h4>
                <p>Donec ullamcorper nulla non metus auctor<br />fringillaDonec ullamcorper nulla non metus auctor<br />fringilla</p>
            </div>
            <div className='content-top-rigth'>
                <a href='#explore' className='exploreBtn'>Explore More <RiArrowRightSLine className='exploreClass'/></a>
            </div>
            <div className='project-container'>
                <div className='project-card'>
                    <img className='project-card-child' src={Image1} alt='img'/>
                    <h6>Home Type</h6>
                    <p>Area 2, San Juan Batangas</p>
                    <p>Casa Mariana</p>
                    <a href='#learn' className='btnLearnView'>Learn More</a>
                </div>
                <div className='project-card'>
                    <img className='project-card-child' src={Image2} alt='img'/>
                    <h6>Home Type</h6>
                    <p>Area 2, San Juan Batangas</p>
                    <p>Casa Mariana</p>
                    <a href='#learn' className='btnLearnView'>Learn More</a>
                </div>
                <div className='project-card'>
                    <img className='project-card-child' src={Image3} alt='img'/>
                    <h6>Home Type</h6>
                    <p>Area 2, San Juan Batangas</p>
                    <p>Casa Mariana</p>
                    <a className='btnLearnView' href='#learn'>Learn More</a>
                </div>
            </div>
        </section>
    );
}

export default Projects;
