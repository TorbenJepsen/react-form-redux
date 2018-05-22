import React, {Component} from 'react';
import {connect} from 'react-redux';


const mapReduxStateToProps = (reduxState) => (
    {reduxState}
);

class SnackList extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {

        return (
            <div>
                <h4>List of Schnax</h4>
                <ul>
                {
                    this.props.reduxState.snackReducer.map((snack, i) => <li key={i}>
                    {snack}
                    </li>)
                }
                </ul>
            </div>
        )
    }

}

export default connect(mapReduxStateToProps)(SnackList);