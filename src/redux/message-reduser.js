const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'
let initialState = {
    messages: [
        {id: 1, message: 'Hi'},
        // {id: 2, message: 'Hi, how are you?'},
        // {id: 3, message: 'What about the wheather?'},
        // {id: 4, message: 'What about the wheather?'},
        // {id: 5, message: 'What about the wheather?'},
    ],
    dialogs: [
        {id: 1, name: 'Nastya'},
        {id: 2, name: 'Mark'},
        // {id: 3, name: 'Tamara'},
        // {id: 4, name: 'John'},
        // {id: 5, name: 'Yasha'},
    ],
    newMessageBody: ''

};


const messageReduser = (state = initialState, action) => {
    let stateCopy
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            stateCopy = {
                ...state,
                newMessageBody: action.body
            }
            return stateCopy;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            stateCopy = {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 6, message: body}],

            }
            return stateCopy;
        default:
            return state
    }
}
export const sendMessageCreator = () => ({type: SEND_MESSAGE})

export const updateNewMessageCreator = (body) =>
    ({
        type: UPDATE_NEW_MESSAGE_BODY,
        body: body
    })


export default messageReduser