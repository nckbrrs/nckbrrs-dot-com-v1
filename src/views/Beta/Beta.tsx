import React from "react";
import Header from "../../components/Header";
import Main from "../../components/Main";
import Footer from "../../components/Footer";
import pic from "../../assets/images/beta.jpeg";

class Beta extends React.Component<{}, {}> {
  render() {
    return (
      <div id="beta">
        <div id="left" className="col">
          <img src={pic}/>
        </div>
        <div id="right" className="col">
          <Main page="beta"/>
          <Footer page="beta"/>
        </div>
      </div>
    )
  }
}

export default Beta;