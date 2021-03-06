import React from "react";
import s from "./../Dialogs.module.css"


const Message = (props) => {
    let answer = React.createRef()

    let answerButton = () => {
        let newAnswer = answer.current.value;
        alert(newAnswer)
    }

    return <div className={s.dialog}>
        <p className={s.div1}>{props.message}</p>
        <div className={s.text}>
            {/*<textarea ref = {answer}></textarea>*/}
            <button onClick= { answerButton}> Answer
            </button>
        </div>
    </div>

}

export default Message