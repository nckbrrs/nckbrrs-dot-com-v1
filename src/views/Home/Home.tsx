import React from "react";
import Header from "../../components/Header";
import Main from "../../components/Main";
import Footer from "../../components/Footer";

class Home extends React.Component<{}, {}> {
  render() {
    return (
      <div className="bx--grid bx--grid--full-width">
        <Header/>
        <Main/>
        <Footer/>
      </div>
    )
  }
}

export default Home;