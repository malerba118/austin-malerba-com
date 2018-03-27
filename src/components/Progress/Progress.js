import React from 'react';
import './Progress.css';

const radius = 50;

export class Progress extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      percent: 0
    }
  }

  componentDidMount() {
    let id = setInterval(() => {
      if (this.calcPercent() === Math.round(this.props.percent)) {
        clearInterval(id)
      }
      this.setState({
        percentToDisplay: this.calcPercent()
      })
    }, 50)
  }

  componentDidUpdate(prevProps, prevState) {
      if (this.state.percent !== prevProps.percent) {
        this.setState({percent: prevProps.percent})
      }
  }

  calcStrokeDashOffset = () => {
   let c = Math.PI*(radius*2);
   let percent = this.state.percent;
   if (percent < 0) { percent = 0;}
   if (percent > 100) { percent = 100;}

   let val = ((100-percent)/100)*c;
   return val;
  }

  calcPercent = () => {
    if (this.refs.progressCircle) {
      let strokeDashoffset = parseInt(window.getComputedStyle(this.refs.progressCircle).strokeDashoffset.slice(0, -2))
      let c = Math.PI*(radius*2);
      return Math.round(100 - strokeDashoffset / c * 100)
    }
    return 0;
  }

  render() {
    return (
      <div style={{position: 'relative', display: 'inline-block'}}>
        <div className="progress-text" style={{
          position: 'absolute',
          height: '100%',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <span>{this.calcPercent()}</span>
        </div>
        <svg id="svg" width="150" height="150" viewPort="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <circle r={radius} cx="75" cy="75" fill="transparent" strokeDasharray="314" strokeDashoffset="0"></circle>
          <circle ref="progressCircle" id="bar" r={radius} cx="75" cy="75" fill="transparent" strokeDasharray="314"
            style={{
              strokeDashoffset: this.calcStrokeDashOffset()
            }}
          >
          </circle>
        </svg>
      </div>
    )
  }
}

Progress.defaultProps = {
  percent: 0
};
