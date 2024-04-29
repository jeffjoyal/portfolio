import React, { useState, useEffect } from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailIcon from '@mui/icons-material/Email'
import GitHubIcon from '@mui/icons-material/GitHub'



import "../styles/Home.css"



function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, I'm Jeff Joyal </h2>
        <div className="prompt"> 
          <p> An undergraduate student studying comp sci and machine learning </p>
          <LinkedInIcon/>
          <EmailIcon/>
          <GitHubIcon/>
        </div>
      </div>
      <div className="skills">
        <h1> Skills </h1>
        <ol className="list">
          <li className="item">
            <h2> Front-end </h2>
            <span> stuff, more stuff, even more stuff </span>
          </li>
          <li className="item">
            <h2> Back-end </h2>
            <span> stuff, more stuff, even more stuff </span>
          </li>
          <li className="item">
            <h2> Programming Background </h2>
            <span> Java, C, Python, JavaScript, TypeScript </span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home