import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route, Link, withRouter } from 'react-router-dom';
import { Overview } from './containers/Overview/Overview';
import { Projects } from './containers/Projects/Projects';
import { Skills } from './containers/Skills/Skills';
import { Menu } from './components/Menu/Menu';
import { TransitionGroup, CSSTransition } from "react-transition-group";


const menuItems = [
  {
    name: 'Projects',
    path: '/projects'
  },
  {
    name: 'Skills',
    path: '/skills'
  },
  {
    name: 'Experience',
    path: '/experience'
  },
  {
    name: 'Contact',
    path: '/contact'
  }
]

function getMenuIndexByPath(pathname) {
  return menuItems.map((item) => item.path).indexOf(pathname)
}

class App extends Component {

  state = {
    activeMenuItem: 0,
    loading: true,
    collapsedSidebar: true
  }

  componentDidMount() {
    this.setState({activeMenuItem: getMenuIndexByPath(this.props.location.pathname)})
    setTimeout(() => {
      this.setState({loading: false})
    }, 3000)
    setTimeout(() => {
      this.setState({collapsedSidebar: false})
    }, 3800)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.location.pathname !== nextProps.location.pathname) {
      this.setState({activeMenuItem: getMenuIndexByPath(nextProps.location.pathname)})
    }
  }

  setLoadingState = (loading) => {
    this.setState({loading: loading})
  }

  render() {
    console.log(this.props.location.pathname)
    return (
      <div className="App">
        <div className="sidebar" style={{width: this.state.loading ? '100%' : '280px'}}>
          <div className="profile-picture-container" style={{top: this.state.collapsedSidebar ? 'calc(50% - 200px)' : '0px'}}>
            <div className="profile-picture"></div>
            <div className="caption">
              <p>Austin Malerba</p>
              <p style={{fontSize: '14px', opacity:0.7, marginTop: '-14px'}}>Software Engineer</p>
            </div>
          </div>
          <br/>
          <Menu className="menu" style={{opacity: this.state.collapsedSidebar ? '0' : '1'}} items={menuItems}
          active={this.state.activeMenuItem}
          >
          </Menu>
        </div>
        <div className="content" style={{left: this.state.loading ? '100%' : '280px'}}>
          <TransitionGroup>
              {/* no different than other usage of
                CSSTransition, just make sure to pass
                `location` to `Switch` so it can match
                the old location as it animates out
            */}
              <CSSTransition key={this.props.location.pathname} classNames="fade" timeout={{ enter: 900, exit: 900 }}>
                <Switch location={this.props.location}>
                  <Route exact path='/projects' component={Projects}/>
                  <Route exact path='/skills' component={Skills}/>
                  <Route render={() => <div>Not Found</div>} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
        </div>
      </div>
    );
  }
}

export default withRouter(App);
