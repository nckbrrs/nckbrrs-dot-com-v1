import React from "react";
import Header from "../../components/Header";
import Main from "../../components/Main";
import Footer from "../../components/Footer";

class Home extends React.Component<{}, {}> {
  render() {
    return (
      <div className="bx--grid bx--grid--full-width">
        <Header/>
        <Main
          text="...is a software developer and musician living and working in Raleigh."
        />
        <Footer/>
      </div>
    )
  }
}

export default Home;