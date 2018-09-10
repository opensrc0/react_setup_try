import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as friendActionCreators from '../../../services/friend/friendDuck';

class FriendList extends Component {
    componentDidMount() {
        console.log('hi');
        friendActions.friendList();
    }

    getFriendList = () => {
        const friendList = JSON.parse(localStorage.getItem("friendList"));
    }

    setFriendList = () => {
        localStorage.setItem("friendList", JSON.stringify({'name': 'himanshu', 'amount': '1000'}));
        localStorage.setItem("friendList", JSON.stringify({'name': 'ravi', 'amount': '-500'}));
    }

    render() {
        return (
            <div>
            hi
                { //this.getFriendList()
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    friend: state.friend,
});

const mapDispatchToProps = (dispatch) => ({
    friendActions: bindActionCreators(friendActionCreators, dispatch),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(FriendList);
