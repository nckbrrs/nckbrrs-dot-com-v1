import React from "react";
import Header from "../../components/Header";
import Main from "../../components/Main";
import Footer from "../../components/Footer";
import pic from "../../assets/palmTreePic.jpeg";

class Beta extends React.Component<{}, {}> {
  render() {
    return (
      <div id="beta">
        <div id="left" className="col">
          <img src={pic}/>
        </div>
        <div id="right" className="col">
        </div>
      </div>
    )
  }
}

export default Beta;