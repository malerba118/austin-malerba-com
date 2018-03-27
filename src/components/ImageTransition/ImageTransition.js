import React from 'react';
import './ImageTransition.css'


export class ImageTransition extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      showOld: false,
      old: ''
    }
  }

  componentWillUpdate(nextProps, nextState) {
    if (this.props.src !== nextProps.src) {
      this.setState({
        showOld: true,
        old: this.props.src
      })
      setTimeout(() => {
        this.setState((prevState) => {
          return {
            ...prevState,
            showOld: false
          }
        })
      }, this.props.animationDuration * 1000)
    }
  }

  render() {
    let inversion = this.props.start === 'right' ? !this.state.showOld : this.state.showOld

    return (
      <div style={{overflow: 'hidden', ...this.props.style}}>
        { this.state.showOld && (
          <div
          style={{
            animationName: 'image-leave',
            animationDuration: `${this.props.animationDuration}s`,
            position: 'absolute',
            height: '100%',
            width: '100%',
            background: `url(${this.state.old})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            animationFillMode: 'forwards'
          }}>
          </div>
          )
        }
        { this.state.showOld && (
            <div
            style={{
              animationName: 'image-enter',
              animationDuration: `${this.props.animationDuration}s`,
              position: 'absolute',
              height: '100%',
              width: '100%',
              background: `url(${this.props.src})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              animationFillMode: 'forwards'
            }}>
            </div>
          )
        }
        {!this.state.showOld && (
          <div
          style={{
            position: 'absolute',
            height: '100%',
            width: '100%',
            background: `url(${this.props.src})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}>
          </div>
        )}
      </div>
    )
  }
}
