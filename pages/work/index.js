import React from 'react';

import './work.css';
import Nav from '../../components/nav';

export default function Work() {
  return (
    <div>
      <Nav />
      <div className="container">
        <header>
          <img className="Work-HeaderImage" src="/work/work.jpg" />
        </header>

        <div className="Pills">
          <span className="Pills-Item Pills-Item_active">All</span>
          <span className="Pills-Item">Robotics</span>
          <span className="Pills-Item">Development</span>
          <span className="Pills-Item">Farming</span>
        </div>

        <div className="ProjectGrid">
          <div className="ProjectCard">
            <img className="ProjectCard-Image" src="/work/project-1.jpg" />
            <div className="ProjectCard-Title">Harvey.one</div>
            <div className="ProjectCard-Subtitle">Robotics</div>
          </div>
          <div className="ProjectCard">
            <img className="ProjectCard-Image" src="/work/project-2.jpg" />
            <div className="ProjectCard-Title">CNHI Konfigurator</div>
            <div className="ProjectCard-Subtitle">Development</div>
          </div>
          <div className="ProjectCard">
            <img className="ProjectCard-Image" src="/work/project-3.jpg" />
            <div className="ProjectCard-Title">Indoor Farming</div>
            <div className="ProjectCard-Subtitle">Farming</div>
          </div>

          <div className="ProjectCard">
            <img className="ProjectCard-Image" src="/work/project-1.jpg" />
            <div className="ProjectCard-Title">Harvey.one</div>
            <div className="ProjectCard-Subtitle">Robotics</div>
          </div>
          <div className="ProjectCard">
            <img className="ProjectCard-Image" src="/work/project-2.jpg" />
            <div className="ProjectCard-Title">CNHI Konfigurator</div>
            <div className="ProjectCard-Subtitle">Development</div>
          </div>
          <div className="ProjectCard">
            <img className="ProjectCard-Image" src="/work/project-3.jpg" />
            <div className="ProjectCard-Title">Indoor Farming</div>
            <div className="ProjectCard-Subtitle">Farming</div>
          </div>
        </div>


        <br />
        <br />


      </div>
    </div>
  );
}
