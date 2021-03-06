import React, { Component } from 'react';
import Typist from 'react-typist';
import 'react-typist/dist/Typist.css'
import { fadeInUp } from 'react-animations'
import { StyleSheet, css } from 'aphrodite/no-important';
import './Home.css'
import { Link } from "react-router-dom";

class Home extends Component {
  constructor() {
    super();
    this.state = { sectionsComplete: 0};
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
        <div className={`header`}>
          <Link to="/">cd ~</Link>
          <br /><br />
        </div>
        {
          this.state.sectionsComplete >= 0 &&
          (<Typist className={`intro mono-key`} {...this.typistConfig}>
            > <Typist.Delay ms={1500} /> Hello world<Typist.Backspace count={11} delay={200} /> Hi there, I'm Mitch!
          </Typist>)
        }

        {
          this.state.sectionsComplete >= 1 &&
          (<div className={`${css(this.styles.fadeInUp)}`}>
            <span className={`list-title`}>Properties:</span>
            <ul className={`list-color removeBullets`}>
              <li><span role="img" aria-label="Computer">🖥</span> <a href="https://en.wikipedia.org/wiki/Computer_engineering" target="_blank" rel="noopener noreferrer">>open Computer Engineer</a></li>
              <li><span role="img" aria-label="Brain">🧠</span> <a href="https://agilemanifesto.org/" target="_blank" rel="noopener noreferrer">>open Agilist</a></li>
              <li><span role="img" aria-label="Space Invader">👾</span> <a href="https://steamcommunity.com/id/CatSensei" target="_blank" rel="noopener noreferrer">>open Gamer</a></li>
            </ul>
            <br />
          </div>)
        }

        {
          this.state.sectionsComplete >= 2 &&
          (<div className={`summary ${css(this.styles.fadeInUp)}`}>
            <ul className={`summary removeBullets`}>
              <li><Link to="projects">> cd ./projects</Link></li>
              {/* <li><Link to="projects">> cd ./about-me</Link></li>
              <li><Link to="projects">> cd ./resume</Link></li> */}
            </ul>
          </div>)
        }
      </div>
    );
  }
}



export default Home;
