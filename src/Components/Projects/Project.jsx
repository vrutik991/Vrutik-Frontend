import React from 'react'
import "./project.css";
// import tailwindcss from '@tailwindcss/vite'
// import Image from ''

const Project = ({project}) => {
  return (
    <div>
        <div className="projectContainer">
          <div className="row">
            <div className="col-lg-6"><div className="projectLeft">
              {/* <p>{project.image}</p>d */}
                <img className='projectImage' src={project.image} alt="not available" />
            </div></div>
            <div className="col-lg-6"><div className="projectRight">
              <p className='projectTitle'>{project.title}</p>
              <p>{project.description}</p>
              <p>PROJECT INFO</p>
              <hr />
              <div className="project-info">
                <p>Year</p>
                <p>{project.year}</p>
              </div>
              <hr />
              <div className="project-info">
                <p>Role</p>
                <p>{project.role}</p>
              </div>
              <hr />
              <div className="links">
                {/* <div className="live-demo"><a href={project.liveDemo}>LIVE DEMO</a></div> */}
                <div className="github"><a href={project.github}>SEE ON GITHUB</a></div>
              </div>
            </div></div>
          </div>
            
            
        </div>
    </div>
  )
}

export default Project