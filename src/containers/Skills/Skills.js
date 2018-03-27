import React, { Component } from 'react';
import Button from 'material-ui/Button';
import ArrowBackIcon from 'material-ui-icons/ArrowBack';
import ArrowForwardIcon from 'material-ui-icons/ArrowForward';

import {TextTransition} from '../../components/TextTransition';
import {ParagraphTransition} from '../../components/ParagraphTransition/ParagraphTransition';
import {ImageTransition} from '../../components/ImageTransition/ImageTransition';
import { SkillItem } from '../../components/Progress/SkillItem';

import './Skills.css'

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

export class Skills extends Component {

  constructor(props) {
    super(props)
    this.state = {
      currentProject: 1
    }
  }

  render() {
    return (
      <div className="skills">
        <ImageTransition
          style={{position: 'absolute', width: '100%', height: '100%', zIndex: -1}}
          src={'/images/skills_background.jpg'}
          animationDuration={.6}
        />
        <div className="skills-content">
          <SkillItem percent={90} text={'JavaScript'} subtext={'4 years experience'}/>
          <SkillItem percent={75} text={'Python'} subtext={'3 years experience'}/>
          <SkillItem percent={75} text={'Python'} subtext={'3 years experience'}/>
          <SkillItem percent={75} text={'Python'} subtext={'3 years experience'}/>
          <SkillItem percent={75} text={'Python'} subtext={'3 years experience'}/>
          <SkillItem percent={75} text={'Python'} subtext={'3 years experience'}/>
          <SkillItem percent={75} text={'Python'} subtext={'3 years experience'}/>
          <SkillItem percent={75} text={'Python'} subtext={'3 years experience'}/>
          <SkillItem percent={75} text={'Python'} subtext={'3 years experience'}/>
          <SkillItem percent={75} text={'Python'} subtext={'3 years experience'}/>
          <SkillItem percent={75} text={'Python'} subtext={'3 years experience'}/>
          <SkillItem percent={75} text={'Python'} subtext={'3 years experience'}/>

        </div>
      </div>
    );
  }
}
