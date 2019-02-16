import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date()
    };
    this.tick = this.tick.bind(this);
  }

  tick() {
    this.setState({
      time: new Date()
    });
  }

  componentDidMount() {
    this.intervalId = setInterval(
      this.tick, 1000
    );
  }

  componentWillUnmount () {
    clearInterval(this.intervalId);
  }


  render() {
    return (
    <div className='clock'>
      <div className='clock-time'>
        <span>Time: </span>
        <span>{ this.state.time.getHours()} : {this.state.time.getMinutes()} : {this.state.time.getSeconds() }  </span>
      </div>
      <div className='clock-date'>
        <span>Date: </span>
        <span>{ this.state.time.toDateString() }  </span>
      </div>
     
    </div>)
  }
}

export default Clock;