import React from 'react'
import '../Styles/title-styles.css'

export default function Title (props) {
  return (
    <div className='title-container'>
      <div class='title'>
        Hello, my name is <a className='title-highlight' href="https://www.linkedin.com/in/daniel-nguyen-08/">Daniel Nguyen</a>, 
        and I am a <a className='title-highlight' href="https://github.com/nguyend08">Full-Stack Developer</a> based in San Francisco, CA
      </div>
    <div className='positions'>
        <div className='current-position'>
          Current:
          <p>
            Looking for a New Opportunity!
          </p>
        </div>
        <div className='previous-position'>
          Previous:
          <div>
            <img 
              src='http://valiancecap.com/wp-content/uploads/2018/05/Valliance-Horizontal-Header-3-300x100.png'
              height="60" 
              width="170"
            />
          </div>

        </div>
      </div>
    </div>
  )
}