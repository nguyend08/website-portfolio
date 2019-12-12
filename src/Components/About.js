import React from 'react';
import '../Styles/about-styles.css'

export default class About extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      info: [
        ['Daniel.currentLocation', 'San Francisco,CA'],
        ['Daniel.interests', 'cooking, basketball, powerlifting/olympic-weightlifting, video games', true],
        ['Daniel.education', 'Biological Anthropology, B.S.'],
        ['Daniel.skills.frontend', 'JavaScript ES6+, React.js, Redux, HTML, CSS, jQuery, Webpack, Babel, AngularJS, Wordpress', true],
        ['Daniel.skills.backend', 'Node.js, Express, MySQL, MongoDB, Mongoose.js', true],
        ['Daniel.skills.other', 'Mocha/Chai, Jest/Enzyme, Amazon Web Services, Elastic BeanStalk, EC2, Docker, Bash, Git', true],
      ],
      marker: true,
    }
    this.renderStatements = this.renderStatements.bind(this);
    this.renderMarker = this.renderMarker.bind(this);
  }
  componentDidMount() {
    this.myMarker = setInterval(() => this.setState(prevState => ({marker: !prevState.marker})), 700)
  }

  renderStatements(arr) {
    return arr.map((info) => {
      return ( 
        <div className='terminal-info'>
        <p className='terminal-input'>
          > {info[0]}
        </p>
        <p className='terminal-output'>
          {info[2] ? `["${info[1]}"]` : `"${info[1]}"`}
        </p>
        </div>
    )})
  }

  renderMarker() {
        if (this.state.marker) {
          return <span className='marker-on'> </span>
        } else {
          return <span className='marker-off'> </span>
        }
  }

  render() {
    console.log(this.state.marker)
    return (
      <div className='about-container'>
        <div className='terminal-container'>
          <div className='terminal-header'>
            <div className='terminal-button red'></div>
            <div className='terminal-button yellow'></div>
            <div className='terminal-button green'></div>
          </div>
          <div className='terminal-body'>
            {this.renderStatements(this.state.info)}
            <span className='marker-arrow'>> </span> {this.renderMarker()}
          </div>
        </div>
      </div>
    )
  }
}