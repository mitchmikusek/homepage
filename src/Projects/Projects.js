import React, { Component } from 'react';
import Typist from 'react-typist';
import 'react-typist/dist/Typist.css'
import { fadeInUp } from 'react-animations'
import { StyleSheet, css } from 'aphrodite/no-important';
import './Projects.css'
import { Link } from "react-router-dom";

class Projects extends Component {
  constructor() {
    super();
    this.state = { sectionsComplete: 0 };
    this.triggerNextSections = this.triggerNextSections.bind(this);

    this.styles = StyleSheet.create({ fadeInUp: { animationName: fadeInUp, animationDuration: '1s' } })
    this.typistConfig = {
      cursor: { show: true, blink: true, element: '_', hideWhenDone: false, hideWhenDoneDelay: 2000 },
      avgTypingDelay: 50,
      stdTypingDelay: 25,
      startDelay: 0,
      onTypingDone: this.triggerNextSections
    }
  }

  sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }

  triggerNextSections() {
    // Builds Summary
    this.setState({ ...this.state, sectionsComplete: this.state.sectionsComplete + 1 });
    // Wait some time
    this.sleep(1000).then(() => {
      this.setState({ ...this.state, sectionsComplete: this.state.sectionsComplete + 1 })
    });
  }

  render() {
    return (
      <div className={`APPM`}>
        <div className={`header`}> <Link to="/">cd ~</Link><br /><br /></div>

        {
          this.state.sectionsComplete >= 0 &&
          (<Typist className={`intro mono-key`} {...this.typistConfig}>
            > <Typist.Delay ms={1500} /> Recent Projects
          </Typist>)
        }

        {
          this.state.sectionsComplete >= 1 &&
          (<div className={`${css(this.styles.fadeInUp)}`}>
            <span className='list-title'>Mobile:</span>
            <ul className={`list-color removeBullets`}>
              <li><Link to="projects/appm">cd ./appm</Link></li>
            </ul>
            <br />
          </div>)
        }

      </div>
    );
  }
}



export default Projects;
