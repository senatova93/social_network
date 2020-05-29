import React from "react";
import styles from "./users.module.css";
let Users = (props) => {
    return <div>
        {
            props.users.map (u => <div key = {u.id}>
                <span>
                    <div><img src = {u.photoURL} className={styles.usersPhoto}/></div>
                    <div><button>FOLLOW</button></div>
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