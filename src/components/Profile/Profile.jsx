import React from 'react';
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
const Profile = () => {
    return   <div>
    <div>
    <img src ="https://o-viber.ru/wp-content/uploads/2017/08/krasivie-2-1.png"></img>
    </div>
    <div> 
      AVA  + Discription
      </div>
    <MyPosts/>
  
    </div>
}
export default Profile;