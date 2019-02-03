import React, { Component } from 'react';
import Typist from 'react-typist';
import 'react-typist/dist/Typist.css'
import { fadeInUp } from 'react-animations'
import { StyleSheet, css } from 'aphrodite';
import '../index.css'

class Home extends Component {
  constructor() {
    super();
    this.state = { sectionsComplete: 0 };
    this.triggerNextSections = this.triggerNextSections.bind(this);

    this.styles = StyleSheet.create(HOME_STYLE)
    this.typistConfig = {
      cursor: { show: true, blink: true, element: '_', hideWhenDone: false, hideWhenDoneDelay: 2000 },
      avgTypingDelay: 100,
      stdTypingDelay: 50,
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
    this.sleep(2000).then(()=> {
      this.setState({ ...this.state, sectionsComplete: this.state.sectionsComplete + 1 })
    });
  }



  render() {
    return (
      <div className={`${css(this.styles.home)} container`}>
        {
          this.state.sectionsComplete >= 0 &&
          (<Typist className={`${css(this.styles.intro)} mono-key`} {...this.typistConfig}>
            > <Typist.Delay ms={1500} /> Hello world<Typist.Backspace count={11} delay={200} /> Hi there, I'm Mitch!
          </Typist>)
        }

        {
          this.state.sectionsComplete >= 1 &&
          (<div className={`${css(this.styles.summary)} ${css(this.styles.fadeInUp)} mono-n`}>
            <ul className={`${css(this.styles.removeBullets)} ${css(this.styles.fadeInUp)}`}>
              <li><span role="img" aria-label="Computer">🖥</span> <a href="https://en.wikipedia.org/wiki/Computer_engineering" target="_blank" rel="noopener noreferrer">Computer Engineer</a></li>
              <li><span role="img" aria-label="Brain">🧠</span> <a href="https://agilemanifesto.org/" target="_blank" rel="noopener noreferrer">Agilist</a></li>
              <li><span role="img" aria-label="Space Invader">👾</span> <a href="https://steamcommunity.com/id/CatSensei" target="_blank" rel="noopener noreferrer">Gamer</a></li>
            </ul>
            <br /><br />
          </div>)
        }

        {
          this.state.sectionsComplete >= 2 &&
          (<div className={`${css(this.styles.summary)} ${css(this.styles.fadeInUp)} mono-n`}>
            <span>
            <span role="img" aria-label="Construction">🚧</span> Showcase & Links Coming Soon <span role="img" aria-label="Construction">🚧</span>
            </span>
          </div>)
        }
      </div>
    );
  }
}

const HOME_STYLE = {
  home: {
    padding: '10vh 5vw'
  },
  intro: {
    fontSize: '5rem',
    '@media (max-width: 800px)': {
      fontSize: '2rem'
    },
  },
  summary: {
    paddingTop: '1vh',
    fontSize: '3rem',
    '@media (max-width: 800px)': {
      fontSize: '1rem'
    },
  },
  removeBullets: {
    listStyleType: 'none'
  },
  fadeInUp: { animationName: fadeInUp, animationDuration: '1s' }
};


export default Home;
