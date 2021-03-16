import React from "react";
import "react-dom";
import { contentConfig } from '../../assets/contentConfig';

class Footer extends React.Component<{}, {}> {
  render() {
    return (
      <div className="bx--row footer">
        <div className="bx--col">
          <div id="links">
            {
              contentConfig.socialLinks.map((link) =>  {
                return (
                  <a href={link['href']}>
                    <div className="link-text">{link['text']}</div>
                    {link['icon']}
                  </a>
                )
              })
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
