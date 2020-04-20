import React from 'react';
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {updateNewPostText} from "../../redux/state";
import PropTypes from 'prop-types';
const Profile = (props) => {

    return (
        <div>
                <ProfileInfo/>

                <MyPosts postsData = {props.profilePage.postsData}
                         dispatch = {props.dispatch}
                         newPostText = {props.profilePage.newPostText}
                         />
            </div>
            )

            }

            export default Profile;

Profile.propTypes = {
    pastsData : PropTypes.number
};