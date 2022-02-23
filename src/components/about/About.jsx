import React from 'react'
import './about.css'

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src="https://images.pexels.com/photos/9186151/pexels-photo-9186151.jpeg" alt="" className="a-img" />
        </div>
      </div>

      <div className="a-right">
        <p className="a-sub">
          "First, solve the problem. Then, write the code. "
        </p>
        <p className='author'>
          - John Johnson
        </p>
        <div className="a-award">
          <div className="a-award-texts">
            <h4 className="a-award-title">
              I'm a Full Stack Developer based out of India, with a certification in MERN stack development, and a passion for finding practical solutions for real-world problems. I specialize in creating custom websites that are both aesthetic and user-friendly. And when I'm not toiling away on a project, I'm busy writing for my blog.
            </h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About