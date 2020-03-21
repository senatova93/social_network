import React from "react";
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

const DialogItems = (props) => {
    let path = "/dialogs/" + props.id;
    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{props.name} </NavLink>
    </div>
};
const Message = (props) => {
    return <div className={s.dialog}>{props.message}</div>

}

const Dialogs = (props) => {


    let dialogs = [
        {id: 1, name: 'Nastya'},
        {id: 2, name: 'Mark'},
        {id: 3, name: 'Tamara'},
        {id: 4, name: 'John'},
        {id: 5, name: 'Yasha'},
    ]

    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Hi, how are you?'},
        {id: 3, message: 'What about the wheather?'},
        {id: 4, message: 'What about the wheather?'},
        {id: 5, message: 'What about the wheather?'},
    ]
    let dialogsElements = dialogs.map(d => <DialogItems name={d.name} id={d.id}/>)

    let messageElements = messages.map(m => <Message message={m.message}/>)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}

            </div>
            <div className={s.messages}>
                {messageElements}

            </div>
        </div>


    )
}
export default Dialogs