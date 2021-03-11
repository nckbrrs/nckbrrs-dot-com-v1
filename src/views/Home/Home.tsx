import React from "react";
import HeaderBar from "../../components/HeaderBar";
import MainContent from "../../components/MainContent";
import FooterContent from "../../components/FooterContent";

class Home extends React.Component<{}, {}> {
  render() {
    return (
      <div className="bx--grid bx--grid--full-width">
        <HeaderBar />
        <MainContent
          text="...is a software developer and musician living and working in Raleigh."
        />
        <FooterContent />
      </div>
    )
  }
}

export default Home;