import React from 'react';
import './ParagraphTransition.css'


export class ParagraphTransition extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      showOld: false,
      old: ''
    }
  }

  componentWillUpdate(nextProps, nextState) {
    if (this.props.text !== nextProps.text) {
      this.setState({
        showOld: true,
        old: this.props.text
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
      <div style={{position: 'relative', ...this.props.style}}>
        { this.state.showOld && (
            <p style={{
              animationName: 'paragraph-leave',
              animationDuration: `${this.props.animationDuration}s`,
              position: 'absolute',
              top: 0,
              animationFillMode: 'forwards'
            }}>
              {this.state.old}
            </p>
          )
        }
        { this.state.showOld && (
            <p style={{
              animationName: 'paragraph-enter',
              animationDuration: `${this.props.animationDuration}s`,
              position: 'absolute',
              top: 0,
              animationFillMode: 'forwards'
            }}>
              {this.props.text}
            </p>
          )
        }
        {!this.state.showOld && (
          <p style={{
            position: 'absolute',
            top: 0
          }}>
            {this.props.text}
          </p>
        )}
      </div>
    )
  }
}
