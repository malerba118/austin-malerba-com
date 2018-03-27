import React from 'react';



export class TextTransition extends React.Component {

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
        this.setState({
          showOld: false,
          old: this.props.text
        })
      }, this.props.animationDuration*1000)
    }
  }

  render() {
    let inversion = this.props.start === 'right' ? !this.state.showOld : this.state.showOld

    return (
      <div style={{position: 'relative', width: '170px'}}>

        {
        this.state.showOld ?
          this.state.old :
          this.props.text
        }
        <div style={{
          position: 'absolute',
          left: inversion ? '0' : 'unset',
          right: inversion ? 'unset' : '0',
          top: 0,
          background: 'rgba(34, 51, 76, 1)',
          transition: `width ${this.props.animationDuration}s`,
          transitionTimingFunction: 'cubic-bezier(0.39, 0.575, 0.565, 1)',
          width: this.state.showOld ? '100%' : '0',
          height: '100%'
        }}>
        </div>
      </div>
    )
  }
}
