import React from 'react';
import {Progress} from './Progress'

export class SkillItem extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div style={{display: 'inline-block'}}>
        <Progress percent={this.props.percent} />
        <div style={{
          textAlign: 'center',
          fontSize: 15,
          color: 'rgba(34, 51, 76, .8)',
          marginTop: -18
        }}>
          {this.props.text}
        </div>
        <div style={{
          textAlign: 'center',
          fontSize: 13,
          color: 'rgba(34, 51, 76, .6)',
          marginTop: 4
        }}>
          {this.props.subtext}
        </div>
      </div>
    )
  }
}

Progress.defaultProps = {
  text: '',
  subtext: '',
  percent: 0
};
