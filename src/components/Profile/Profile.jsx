import React from 'react';
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {updateNewPostText} from "../../redux/store";
import PropTypes from 'prop-types';
import MyPostsContainer from "./MyPosts/MyPostsContainer";
const Profile = (props) => {

    return (
        <div>
                <ProfileInfo/>

                <MyPostsContainer store = {props.store}/>
            </div>
            )

            }

            export default Profile;

Profile.propTypes = {
    pastsData : PropTypes.number
};