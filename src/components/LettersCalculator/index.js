// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {searchInput: '', noOfLetter: 0}
  onChangeSearchInput = event => {
    console.log(event.target.value.length)
    this.setState({
      searchInput: event.target.value,
      noOfLetter: event.target.value.length,
    })
  }
  render() {
    const {searchInput, noOfLetter} = this.state
    return (
      <div className="app-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          className="image-1"
          alt="letters calculator"
        />
        <div className="card-container">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <div className="card">
            <label for="phrase" className="label">
              Enter the phrase
            </label>
            <input
              className="input"
              id="phrase"
              type="text"
              placeholder="Enter the phrase"
              onChange={this.onChangeSearchInput}
              value={searchInput}
            />
            <p className="no-of-letters">No.of letters: {noOfLetter}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
