import React, { Component } from 'react';
import Typist from 'react-typist';
import 'react-typist/dist/Typist.css'
import { fadeInUp } from 'react-animations'
import { StyleSheet, css } from 'aphrodite/no-important';
import './APPM.css'
import { Link } from "react-router-dom";

class APPM extends Component {
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
        <div className={`header`}>
          <Link to="/projects">cd ~/projects</Link>
          <br /><br />
        </div>
        {
          this.state.sectionsComplete >= 0 &&
          (<Typist className={`intro mono-key`} {...this.typistConfig}>
            > <Typist.Delay ms={1500} /> 亚太职协 <br />Asia Pacific Professional Managers App:
          </Typist>)
        }

        {
          this.state.sectionsComplete >= 1 &&
          (<div className={`${css(this.styles.fadeInUp)}`}>
            <span className={`list-title`}>Technologies:</span>
            <ul className={`list-color removeBullets`}>
              <li>Ionic</li>
              <li>Angular 2</li>
              <li>Google Cloud Platform</li>
              <li>Xcode</li>
              <li>Android Studio</li>
            </ul>
            <br />
          </div>)
        }

        {
          this.state.sectionsComplete >= 2 &&
          (<div className={`summary ${css(this.styles.fadeInUp)}`}>
            <div>App showcasing content for the Asia Pacific Professional Managers Association, utilizing existing Wordpress site APIs to provide a native mobile experience with additional features including live chat with prospective students, connection to local apps, and native share / email</div>
            <a href="https://itunes.apple.com/us/app/%E4%BA%9A%E5%A4%AA%E8%81%8C%E5%8D%8F/id1279609767?mt=8" target="_blank" rel="noopener noreferrer">>open iOS App Link</a>
            <br />
            <a href="https://play.google.com/store/apps/details?id=com.apacpma.appm" target="_blank" rel="noopener noreferrer">>open Android App Link</a>
          </div>)
        }
      </div>
    );
  }
}



export default APPM;
