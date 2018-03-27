import React, { Component } from 'react';
import Button from 'material-ui/Button';
import ArrowBackIcon from 'material-ui-icons/ArrowBack';
import {TextTransition} from '../../components/TextTransition';
import {ParagraphTransition} from '../../components/ParagraphTransition/ParagraphTransition';
import {ImageTransition} from '../../components/ImageTransition/ImageTransition';

import './Projects.css'

const projects = [
  {
    name: "Iconik Studio",
    subTitle: "Hybrid Mobile App",
    overview: "Iconik Studio is an vector graphics editor optimized for tablets. The user is provided a few dozen starter shapes that the can manipulate to create works of art!",
    backgroundImage: "/images/sun.jpg",
    primaryImage: "/images/iconik.png"
  },
  {
    name: "Collab Playlists",
    subTitle: "AngularJS Web App",
    overview: "Collab Playlists was a web-app that allowed friends to queue music in real time to a shared playlist. It was intended as a tool for social gatherings to allow all party-goers music control.",
    backgroundImage: "/images/woods.jpg",
    primaryImage: "/images/pinning.png"
  }
]

export class Projects extends Component {

  constructor(props) {
    super(props)
    this.state = {
      currentProject: 1
    }
  }

  previousProject = () => {
    this.setState((prevState) => {
      let nextIndex;
      if (prevState.currentProject === 0) {
        nextIndex = projects.length - 1
      }
      else {
        nextIndex = prevState.currentProject-1
      }
      return ({
        currentProject: nextIndex
      });
    })
  }

  render() {
    return (
      <div className="projects">
        <ImageTransition
          style={{position: 'absolute', width: '100%', height: '100%', zIndex: -1}}
          src={projects[this.state.currentProject].backgroundImage}
          animationDuration={.6}
        />
        <div className="panel-1">


          <div className="title">
            <TextTransition
              text={projects[this.state.currentProject].name}
              animationDuration={.35}
              start={'left'}
            />
          </div>
          <div className="subtitle">
            <TextTransition
              text={projects[this.state.currentProject].subTitle}
              animationDuration={.35}
              start={'right'}
            />
          </div>
          <div className="descriptions">
            <div className="descriptions-left">
              <ParagraphTransition
                style={{width: '100%', height: '85px'}}
                text={projects[this.state.currentProject].overview}
                animationDuration={.6}
              />
              <ParagraphTransition
                style={{width: '100%', height: '85px'}}
                text={projects[this.state.currentProject].overview}
                animationDuration={.6}
              />
            </div>
            <div className="vertical-divider"></div>
            <div className="descriptions-right">
              <ParagraphTransition
                style={{width: '100%', height: '85px'}}
                text={projects[this.state.currentProject].overview}
                animationDuration={.6}
              />
              <ParagraphTransition
                style={{width: '100%', height: '85px'}}
                text={projects[this.state.currentProject].overview}
                animationDuration={.6}
              />
            </div>
          </div>

        </div>
        <div className="left-button fab">
          <Button onClick={this.previousProject} variant="fab" mini color="secondary" aria-label="add">
            <ArrowBackIcon />
          </Button>
        </div>
        <div className="panel-2">
          <div className="primary-image-container">

            <ImageTransition
              style={{position: 'relative', height: '68%', width: '93%', zIndex: 0, top: -33}}
              src={projects[this.state.currentProject].primaryImage}
              animationDuration={.6}
            />
            </div>
        </div>
      </div>
    );
  }
}
