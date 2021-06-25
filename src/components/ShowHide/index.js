// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {showFtName: false, showLtName: false}

  ClickFtButton = () => {
    this.setState(prevState => ({showFtName: !prevState.showFtName}))
  }

  ClickLtButton = () => {
    this.setState(prevState => ({showLtName: !prevState.showLtName}))
  }

  render() {
    const {showFtName, showLtName} = this.state

    return (
      <div className="app-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="button-container">
          <div className="name-container">
            <button
              className="button"
              onClick={this.ClickFtButton}
              type="button"
            >
              Show/Hide Firstname
            </button>
            {showFtName ? <p className="name">Joe</p> : null}
          </div>
          <div className="name-container">
            <button
              className="button"
              onClick={this.ClickLtButton}
              type="button"
            >
              Show/Hide Lastname
            </button>
            {showLtName ? <p className="name">Jonas</p> : null}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
