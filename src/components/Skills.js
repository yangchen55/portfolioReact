import React from 'react'

export const Skills = () => {
  return (
    <div  id="skills" className="skill section">
    <div className="container py-3 mb-5">
      <div className="row">
        <div className="col">
          <div className="title text-center fs-1 fw-bolder mt-5 mb-5">
            <span>skills</span>
          </div>
          {/* <!-- icons --> */}
          <div className="icons">
            <div><i className="fa-brands fa-html5 text-danger"></i>html</div>
            <div><i className="fa-brands fa-css3-alt text-primary"></i>CSS</div>
            <div><i className="fa-brands fa-square-js text-danger"></i>javascript</div>
            <div><i className="fa-brands fa-figma text-"></i>figma</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
