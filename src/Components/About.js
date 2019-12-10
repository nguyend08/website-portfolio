import React from 'react';
import '../Styles/about-styles.css'

export default function About(props) {
  return (
    <div className='about-container'>
      <div className='terminal-container'>
        <div className='terminal-header'>
          <div className='terminal-button red'></div>
          <div className='terminal-button yellow'></div>
          <div className='terminal-button green'></div>
        </div>
        <div className='terminal-body'></div>
      </div>
    </div>
  )
}