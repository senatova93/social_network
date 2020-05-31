import React from "react";
import {connect} from "react-redux";
import {followAC, setUserAC, unfollowAC} from "../../redux/users-reduser";
import users from "./users";

let mapStateToProps = (state) => {
    return {
        users:state.usersPage.users
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userID) => {
            dispatch(followAC(userID))
        },
        unfollow: (userID) => {
            dispatch(unfollowAC(userID))
        },
        setUsers: (users) => {
            dispatch(setUserAC(users))
        },
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(users)