import React, {createRef} from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post'
import PropTypes from 'prop-types';
import {
    addPostActionCreator,
    updateNewPostTextActionCreator
} from "../../../redux/profile-reduser";


const MyPosts = (props) => {

    let postElements = props.postsData.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef()

    let onAddPost = () => {
        props.addPost()
        // props.dispatch(addPostActionCreator())
    }


    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text)
        // let action = updateNewPostTextActionCreator (text)
        // props.dispatch(action)
    }

    return (
        <div className={s.postsBlock}>
            <h3> My Posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}
                              onChange={onPostChange}
                              value={props.newPostText}></textarea>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post
                    </button>
                </div>

            </div>
            <div className={s.posts}>
                {postElements}


            </div>
        </div>


    )

}
export default MyPosts;
MyPosts.propTypes = {
    value: PropTypes.number
};