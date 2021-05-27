import React from "react";
import Main from "../../components/Main";
import { TextInput } from "carbon-components-react";

interface BetaState {
  curWidth: number;
  curText: string;
}

class Beta extends React.Component<{}, BetaState> {
  constructor(props) {
    super(props);
    this.updateWidth = this.updateWidth.bind(this);
    this.state = {
      curWidth: window.innerWidth,
      curText: ''
    }
  }

  updateWidth() {
    this.setState({
      curWidth: document.getElementById("beta")!.offsetWidth
    })
  }

  componentDidMount() {
    this.updateWidth();
    window.addEventListener("resize", this.updateWidth);
  }

  componentDidUpdate() {
    if (document.getElementById("beta")!.offsetWidth !== this.state.curWidth) {
      this.updateWidth();
    }
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWidth);
  }

  render() {
    return (
      <div id="beta">
        <div className="col">
          <TextInput
            id="text-input"
            labelText="rgb text"
            placeholder=""
            onChange={(e) => this.setState({curText: e.target.value})}
            width="20"
          />
          <Main
            text={this.state.curText}
            width={this.state.curWidth}
          />
        </div>
      </div>
    )
  }
}

export default Beta;