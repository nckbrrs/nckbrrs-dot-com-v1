import React from "react";
import "react-dom";
import TwitterIcon from '../../assets/icons/Twitter';
import AppleMusicIcon from '../../assets/icons/AppleMusic';
import EmailIcon from '../../assets/icons/Email';
import GithubIcon from '../../assets/icons/GitHub';
import InstagramIcon from '../../assets/icons/Instagram';
import LinkedinIcon from '../../assets/icons/Linkedin';
import SpotifyIcon from '../../assets/icons/Spotify';
import YoutubeIcon from '../../assets/icons/Youtube';
import ResumeIcon from '../../assets/icons/Resume';
import ResumePDF from '../../assets/resume/resume.pdf';

class FooterContent extends React.Component<{}, {}> {
  spaceBetweenLinks() {
    return (<span>&nbsp;&nbsp;&nbsp;</span>);
  }

  render() {
    return (
      <div className="bx--row footer-content">
        <div className="bx--col">
          <div id="links">
            <a href="https://music.apple.com/us/artist/nick-barrs/1539845933">
              <div className="link-text">MUSIC</div>
              <AppleMusicIcon/>
            </a>
            {this.spaceBetweenLinks()}
            <a href="https://open.spotify.com/artist/2ZXVOSBi1E69IxiGuX8ofU?si=cSD9lEXoTRyGvoWBxbHGWA">
              <div className="link-text">SPOTIFY</div>
              <SpotifyIcon/>
            </a>
            {this.spaceBetweenLinks()}
            <a href="https://www.youtube.com/channel/UC4PnMvHxARiaOhzw-99Q4JA">
              <div className="link-text">YOUTUBE</div>
              <YoutubeIcon/>
            </a>
            {this.spaceBetweenLinks()}
            <a href="https://www.twitter.com/nckbrrs">
              <div className="link-text">TWITTER</div>
              <TwitterIcon/>
            </a>
            {this.spaceBetweenLinks()}
            <a href="https://www.instagram.com/nckbrrs">
              <div className="link-text">INSTAGRAM</div>
              <InstagramIcon/>
            </a>
            {this.spaceBetweenLinks()}
            <a href="https://www.github.com/nckbrrs">
              <div className="link-text">GITHUB</div>
              <GithubIcon/>
            </a>
            {this.spaceBetweenLinks()}
            <a href="https://www.linkedin.com/in/nckbrrs">
              <div className="link-text">LINKEDIN</div>
              <LinkedinIcon/>
            </a>
            {this.spaceBetweenLinks()}
            <a href="mailto:nckbrrs@gmail.com">
              <div className="link-text">CONTACT</div>
              <EmailIcon/>
            </a>
            {this.spaceBetweenLinks()}
            <a href={ResumePDF}>
              <div className="link-text">RESUME</div>
              <ResumeIcon/>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default FooterContent;
