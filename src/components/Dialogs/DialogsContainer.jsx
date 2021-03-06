import React from "react";
import {sendMessageCreator, updateNewMessageCreator} from "../../redux/message-reduser";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStatetoProps = (state) => {
    return{
        messagePage: state.messagePage
    }

}
let mapDispachToProps = (dispatch) => {
    return {
        sendMessage : () => {
            dispatch(sendMessageCreator())
        },

        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageCreator(body))
        }
    }

}

const DialogsContainer = connect(mapStatetoProps,mapDispachToProps)(Dialogs)

export default DialogsContainer