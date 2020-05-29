import React from "react";
import Users from "./users";
import {connect} from "react-redux";
import {followAC, setUserAC, unFollowAC} from "../../redux/users-reduser";

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
            dispatch(unFollowAC(userID))
        },
        setUsers: (users) => {
            dispatch(setUserAC(users))
        },
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Users)