import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {
    let postsData = [
        {id: 1, message: 'Hi,how are you?', likesCount: 12},
        {id: 1, message: 'It is my first post', likesCount: 11},
        {id: 1, message: 'It is my first post', likesCount: 11},
        {id: 1, message: 'It is my first post', likesCount: 11},

    ]
     let postElements = postsData.map ( p =>  <Post message={p.message} likesCount= {p.likesCount}/> )
    return (
        <div className={s.postsBlock}>
            <h3> My Posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>

            </div>
            <div className={s.posts}>
                {postElements}


        </div>
        </div>


    )

}
export default MyPosts;