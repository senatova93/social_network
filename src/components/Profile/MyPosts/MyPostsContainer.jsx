import React, {createRef} from 'react';
import PropTypes from 'prop-types';
import {
    addPostActionCreator,
    onPostChangedActionCreator,
    updateNewPostTextActionCreator
} from "../../../redux/profile-reduser";
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {

    let state = props.store.getState()

    let addPost = () => {
        props.store.dispatch(addPostActionCreator())
    }


    let onPostChange = (text) => {
        let action = updateNewPostTextActionCreator (text)
           props.store.dispatch(action)
    }

    return ( <MyPosts updateNewPostText = {onPostChange} addPost = {addPost}
                      postsData = {state.profilePage.postsData}
    newPostText = {state.profilePage.newPostText}/>)

}
export default MyPostsContainer;
MyPosts.propTypes = {
    value: PropTypes.number
};