import React, { Component } from 'react';
import User from './User/user';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionTypes from '../../redux/actions/ActionType/actionType';
import { getApi, nextUrlApi, postApi } from '../../redux/Effects/effects';
import * as urls from '../../contants/contants';
// import Cookies from 'js-cookie'
import DataNotFound from '../dataNotFound/dataNotFound';

class UserList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userList: [],
        }
    }

    componentDidMount() {
        this.getUser();
    }

    getUser() {
        this.props.getApi(urls.users, (res) => {
            if (res.status === 200) {
                this.setState({
                    userList: res.data.data
                }, () => this.props.updateUserList(this.state.userList))
            }
        })
    }

    handleNextPage = () => {
        this.props.nextUrlApi(urls.nextPage, (res) => {
            if (res.status === 200) {
                var data = [...this.state.userList, ...res.data.data]
                this.setState({
                    userList: data
                }, () => this.props.updateUserList(this.state.userList))
            }
        }, true, true)
    }

    // handleSignUp = (evt) => {
    //     evt.preventDefault();
    //     var fd = {
    //         "email": 'eve.holt@reqres.in',
    //         "password": 'pistol',
    //     }
    //     this.props.postApi(urls.signUp, fd, (res) => {
    //         if (res.status === 200) {
    //             Cookies.set('token', res.data.token)
    //         }
    //     })
    // }

    render() {
        var style = {
            textAlign: "center"
        }

        return (
            <div style={{textAlign :"center"}}>
                <h1 style={style}>User List</h1>
                {this.state.userList.length > 0
                    ?
                    <User user={this.state.userList} />
                    :
                    <DataNotFound message='User list not found' imgSrc='logo192.png' />
                }
                <button className="load_more_data" onClick={this.handleNextPage}>Load More Data</button>
                {/* <button onClick={this.handleSignUp}>Sign Up</button> */}
            </div >
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userList: state.UserListReducer.userList,
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {
            getApi, nextUrlApi, postApi,
            updateUserList: (user) => ({ type: actionTypes.USER_LIST, payload: { userList: user } })
        },
        dispatch,
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);