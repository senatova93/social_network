import React from "react";
import styles from "./users.module.css";

let Users = (props) => {
    if (props.users.length ===0){
    props.setUsers([

        {
            id: 1,
            photoURL: 'https://ont.by/static/command/main/cell-big/tYzSgwm4n72WxjBw.jpg',
            followed: true,
            fullName: 'Nannii',
            status: 'Lucky person',
            location: {city: 'Florida', country: 'USA'}
        },
        {
            id: 2,
            photoURL: 'https://ont.by/static/command/main/cell-big/tYzSgwm4n72WxjBw.jpg',
            followed: true,
            fullName: 'Vew',
            status: 'Lucky person too',
            location: {city: 'Moscow', country: 'Russia'}
        },
        {
            id: 3,
            photoURL: 'https://ont.by/static/command/main/cell-big/tYzSgwm4n72WxjBw.jpg',
            followed: false,
            fullName: 'Masha',
            status: 'Undefenetly no',
            location: {city: 'Ukrain', country: 'Kiev'}
        },
        {
            id: 4,
            photoURL: 'https://ont.by/static/command/main/cell-big/tYzSgwm4n72WxjBw.jpg',
            followed: false,
            fullName: 'Marik',
            status: 'Super-boy',
            location: {city: 'Florida', country: 'USA'}
        },

    ])}
    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div><img src={u.photoURL} className={styles.usersPhoto}/></div>
                    <div>{u.followed
                        ? <button onClick={() => {
                            props.follow(u.id)
                        }}>FOLLOW</button>
                        : <button onClick={() => {
                            props.unfollow(u.id)
                        }}>UNFOLLOW</button>}
                       </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div><div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>

                </span>


            </div>)
        }
    </div>
}
export default Users