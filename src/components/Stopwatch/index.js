// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {minutes: 0, seconds: 0, isTrue: false}

  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

  getMinutesAndSeconds = () => {
    const {seconds, minutes} = this.state
    const setSeconds = seconds > 9 ? seconds : `0${seconds}`
    const setMinutes = minutes > 9 ? minutes : `0${minutes}`

    return `${setMinutes}:${setSeconds}`
  }

  incrementOfTime = () => {
    const {seconds, minutes} = this.state
    console.log(minutes)
    const timeSeconds = seconds === 59
    if (timeSeconds) {
      this.setState({seconds: 0})
      this.setState(prevState => ({minutes: prevState.minutes + 1}))
    } else {
      this.setState(prevState => ({seconds: prevState.seconds + 1}))
    }
  }

  startButton = () => {
    this.intervalId = setInterval(this.incrementOfTime, 1000)
    this.setState({isTrue: true})
  }

  stopButton = () => {
    this.setState({isTrue: false})
    clearInterval(this.intervalId)
  }

  resetButton = () => {
    clearInterval(this.intervalId)
    this.setState({minutes: 0})
    this.setState({seconds: 0})
    this.setState({isTrue: false})
  }

  render() {
    const {minutes, seconds, isTrue} = this.state

    console.log(minutes)
    console.log(seconds)

    return (
      <div className="bg-container">
        <h1 className="h1">Stopwatch</h1>
        <div className="container1">
          <div className="container2">
            <img
              className="image1"
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
            />
            <p className="p2">Timer</p>
          </div>
          <h1 className="p1">{this.getMinutesAndSeconds()}</h1>
          <div className="container2">
            <button
              className="btn1"
              type="button"
              onClick={this.startButton}
              disabled={isTrue}
            >
              Start
            </button>
            <button className="btn2" type="button" onClick={this.stopButton}>
              Stop
            </button>
            <button className="btn3" type="button" onClick={this.resetButton}>
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
