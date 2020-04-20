import React, {createRef} from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post'
import PropTypes from 'prop-types';
import {addPostActionCreator, onPostChangedActionCreator} from "../../../redux/state";


const MyPosts = (props) => {

    let postElements = props.postsData.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef()

    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }


    let onPostChange = () => {
        let text = newPostElement.current.value
        props.dispatch(onPostChangedActionCreator(text))
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
                    <button onClick={addPost}>Add post
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