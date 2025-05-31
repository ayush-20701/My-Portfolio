import React, { forwardRef } from 'react'
import ProjectData from '../Data/ProjectData'
import '../Styles/Projects.css'

const Projects = forwardRef((props, ref) => {
    return (
        <div className='projects section section2' ref={ref}>
            <div className="heading">PROJECTS</div>
            <div className="content">
                {ProjectData.map((ele) => ( // ← Parentheses instead of curly braces = implicit return
                    <button className="project" key={ele.key}>
                        <div className="dispImg">
                            <img src={ele.img} alt={ele.title} />
                        </div>
                        <div className="title">{ele.title}</div>
                        <div className="desc">{ele.desc}</div>
                        <div className="date">{ele.date}</div>
                    </button>
                ))}
            </div>
        </div>
    )
})

Projects.displayName = 'Projects'

export default Projects