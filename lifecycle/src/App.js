import React, {Component} from 'react';
// import logo from './logo.svg';
// import './App.css';

class TodoList extends Component {
  constructor() {
    super()
    this.state = {}
  }

  static getDrivedStateFromProps(props, state) {
    // return the new, updated state based upon the props
  }

  getSnapshotBeforeUpdate() {
    // create a backup of the current way things are
  }

  componentDidMount() {
    // GET the data I need to correctly display
  }

  // componentwillReceiveProps(nextProps) {
  //   if (nextProps.whatever !== this.props.whatever) {
  //     // do something important here
  //   }
  // }

  shouldComponentUpdate(nextProps, nextState) {
    // return true if want it to update 
    // return false if not
  }

  // componentWillUpdate() {

  // }

  componentWillUnmount() {
    // teardown or cleanup your code before your component disappears
    // (E.g. remove event listeners)
  }

  render() {
    return (
      <div>
        Code goes here
      </div>
    )
  }
}

export default App;
