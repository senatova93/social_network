import React from "react";
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";
import DialogItems from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageCreator} from "../../redux/message-reduser";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {

    let state = props.store.getState().messagePage


    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())

    }
    let onNewMessageChange = (body) => {
        props.store.dispatch(updateNewMessageCreator(body))

    }
    return <Dialogs updateNewMessageBody = {onNewMessageChange} sendMessage = {onSendMessageClick}
                    messagePage = {state} />




}
export default DialogsContainer