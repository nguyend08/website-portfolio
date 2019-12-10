import React from 'react'
import '../Styles/title-styles.css'

export default function Title (props) {
  return (
    <div className='title-container'>
      <h1 class='title'>
        Hello, my name is <a className='title-highlight' href="https://www.linkedin.com/in/daniel-nguyen-08/">Daniel Nguyen</a>, 
        and I am a <a className='title-highlight' href="https://github.com/nguyend08">Full-Stack Developer</a> based in San Francisco, CA
      </h1>
    </div>
  )
}