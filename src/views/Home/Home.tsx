import React from "react";
import Header from "../../components/Header";
import Main from "../../components/Main";
import Footer from "../../components/Footer";

class Home extends React.Component<{}, {}> {
  render() {
    return (
      <div id="home" className="bx--grid bx--grid--full-width">
        <Header page="home"/>
        <Main page="home"/>
        <Footer page="home"/>
      </div>
    )
  }
}

export default Home;