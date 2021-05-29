import React from "react";
import Main from "../../components/Main";
import { Button, TextInput } from "carbon-components-react";

interface BetaState {
  curWidth: number;
  curText: string;
  hideTextInput: boolean;
}

class Beta extends React.Component<{}, BetaState> {
  constructor(props) {
    super(props);
    this.updateWidth = this.updateWidth.bind(this);
    this.state = {
      curWidth: window.innerWidth,
      curText: '',
      hideTextInput: false
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
      <div id="beta" className="bx--grid bx--grid--full-width">
        <div className="bx--row inputs">
          <div className="bx--col" id="hideInputBtn">
            <Button
            >
              hide textbox
            </Button>
          </div>
          <div className="bx--col text-input">
            {!this.state.hideTextInput &&
              <TextInput
                id="text-input"
                labelText=""
                placeholder="type something"
                onChange={(e) => this.setState({curText: e.target.value})}
              />
            }
          </div>
          <div className="bx--col">
            <Button
            >
              toggle animation
            </Button>
          </div>
        </div>
        <div
          onClick={() => {this.setState({hideTextInput: !this.state.hideTextInput})}}
        >
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