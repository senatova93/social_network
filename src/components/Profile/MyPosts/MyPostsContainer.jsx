import React, {createRef} from 'react';
import PropTypes from 'prop-types';
import {
    addPostActionCreator,
    updateNewPostTextActionCreator
} from "../../../redux/profile-reduser";
import MyPosts from "./MyPosts";
import StoreContext from "../../../storeContext";


const MyPostsContainer = (props) => {

    let state = props.store.getState()

    let addPost = () => {
        props.store.dispatch(addPostActionCreator())
    }


    let onPostChange = (text) => {
        let action = updateNewPostTextActionCreator(text)
        props.store.dispatch(action)
    }

    return (<StoreContext.Consumer> {
        (store) => {
            <MyPosts updateNewPostText={onPostChange} addPost={addPost}
                     postsData={state.profilePage.postsData}
                     newPostText={state.profilePage.newPostText}/>
        } }
    </StoreContext.Consumer>)

}
export default MyPostsContainer;
MyPosts.propTypes = {
    value: PropTypes.number
};