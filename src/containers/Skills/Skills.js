import React, { Component } from 'react';
import Button from 'material-ui/Button';
import ArrowBackIcon from 'material-ui-icons/ArrowBack';
import ArrowForwardIcon from 'material-ui-icons/ArrowForward';

import {TextTransition} from '../../components/TextTransition';
import {ParagraphTransition} from '../../components/ParagraphTransition/ParagraphTransition';
import {ImageTransition} from '../../components/ImageTransition/ImageTransition';
import { SkillItem } from '../../components/Progress/SkillItem';

import './Skills.css'

const skills = [
  {
    level: 90,
    title: 'JavaScript',
    subtitle: '4 Years Experience',
  },
  {
    level: 80,
    title: 'React',
    subtitle: '1 Year Experience',
  },
  {
    level: 80,
    title: 'AngularJS',
    subtitle: '2 Years Experience',
  },
  {
    level: 70,
    title: 'Python',
    subtitle: '3 Years Experience',
  },
  {
    level: 60,
    title: 'Java',
    subtitle: '3 Years Experience',
  },
  {
    level: 50,
    title: 'Angular 5',
    subtitle: '1 Years Experience',
  },
  {
    level: 50,
    title: 'Ionic',
    subtitle: '1 Years Experience',
  },
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
          src={'/images/skills_background2.jpg'}
          animationDuration={.6}
        />
        <div className="skills-content">
          <div className="skills-title">Frontend</div>
          <br/>
          {skills.map((skill, i) => {
            return (
              <SkillItem key={i} percent={skill.level} text={skill.title} subtext={skill.subtitle}/>
            )
          })}
        </div>
      </div>
    );
  }
}
