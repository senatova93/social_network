import React from 'react';
import s from './ProfileInfo.module.css'
    const ProfileInfo = (props) => {
        return   <div>
            <div>

                <img src ="https://o-viber.ru/wp-content/uploads/2017/08/krasivie-2-1.png"></img>
            </div>
            <div className={s.block}>
                AVA  + Discription
            </div>


        </div>
    }
export default ProfileInfo;