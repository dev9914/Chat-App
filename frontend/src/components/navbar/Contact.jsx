import React from 'react'
import "./about.css";

const Contact = () => {
  return (
    <div>
      <div className='contact'>
        <h1 className='connect'>Connect with Me </h1>
        <ul className='ul'>
          <a href="https://www.linkedin.com/in/devanand-kumar-09b451294/" rel="noreferrer" target='_blank'>
          <li className="li fontSize">Linkedin</li>
          </a>
          <a href="https://github.com/dev9914" rel="noreferrer" target='_blank'>
          <li className="li fontSize">GitHub</li>
          </a>
          <a href="https://www.instagram.com/dev.cmd/" rel="noreferrer" target='_blank'>
          <li className="li fontSize">Instagram</li>
          </a>
        </ul>
      </div>
    </div>
  )
}

export default Contact
