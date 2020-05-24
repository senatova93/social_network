import React, {createRef} from 'react';
import PropTypes from 'prop-types';
import {
    addPostActionCreator,
    updateNewPostTextActionCreator
} from "../../../redux/profile-reduser";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import Dialogs from "../../Dialogs/Dialogs";

const mapStatetoProps = (state) => {
    return {
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText

    }
};
const mapDispachToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            let action = updateNewPostTextActionCreator(text)
            dispatch(action)
        },
        addPost: () => {
            dispatch(addPostActionCreator())
        }
    }
}


const MyPostsContainer = connect(mapStatetoProps,mapDispachToProps)(MyPosts)
export default MyPostsContainer;
// MyPosts.propTypes = {
//     value: PropTypes.number
// };