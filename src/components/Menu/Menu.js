import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css'


export class Menu extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {

    return (
      <div className={this.props.className} style={{position: 'relative', ...this.props.style}}>
        <div style={{position: 'absolute', left: 0, height: '100%', width: '2px', background: 'rgba(255,255,255,.5)', borderRadius: 4}}>
          <div className="menu-circle" style={{top: `${this.props.active*30+7}px`}}></div>
        </div>
        {this.props.items.map((item, i) => {
          return (
            <div style={{display: 'flex', alignItems: 'center', height: 30, marginLeft: 2}} key={i}>
              <Link className="menu-link" style={{display: 'flex', alignItems: 'center', height: 30, marginLeft: 16, color: i===this.props.active ? '#e0ac69' : 'rgba(255,255,255,.7)'}} to={item.path}>{item.name}</Link>
            </div>
          )
        })}
      </div>
    )
  }
}
