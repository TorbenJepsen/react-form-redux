import React, { Component } from 'react';
import {connect} from 'react-redux';


class SnackForm extends Component {
    constructor(props) {
        super(props)
    
        // local state keeps track of user input
          this.state = {
              newSnack: '',
          };
      }

    handleSnackChange = (event) => {
        this.setState({
          newSnack: event.target.value,
        })
    }
  
    // When we submit the form send the data to our reducer
    sendSnackToRedux = (event) => {
      event.preventDefault();
      // this.state.newElement will be the users input
      const action = { type: 'ADD_SNACK', payload: this.state.newSnack };
      this.props.dispatch(action);
    }

  render() {
    return (
        <div>
        <h1>SCHNAX</h1>
        <form onSubmit={this.sendSnackToRedux}>
        <input onChange={this.handleSnackChange} value={this.newSnack}/>
        <input type="submit" value="Add Snack"/>
        </form>
        </div>
    );
  }
}
// connect allows us to dispatch actions
export default connect()(SnackForm);