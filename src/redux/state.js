const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'


let store = {
    _state: {
        profilePage: {
            postsData: [
                {id: 1, message: 'Hi,how are you?', likesCount: 12},
                {id: 2, message: 'It is my first post', likesCount: 11},
                {id: 3, message: 'It is my first post', likesCount: 11},
                {id: 4, message: 'It is my first post', likesCount: 11},
            ],
            newPostText: 'it'
        },
        messagePage: {
            messages: [
                {id: 1, message: 'Hi'},
                // {id: 2, message: 'Hi, how are you?'},
                // {id: 3, message: 'What about the wheather?'},
                // {id: 4, message: 'What about the wheather?'},
                // {id: 5, message: 'What about the wheather?'},
            ],
            dialogs: [
                {id: 1, name: 'Nastya'},
                // {id: 2, name: 'Mark'},
                // {id: 3, name: 'Tamara'},
                // {id: 4, name: 'John'},
                // {id: 5, name: 'Yasha'},
            ],
            newMessageBody: ''

        },
    },
    _callSubscriber() {
        console.log("stay changed")
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    _addPost() {
        let newPost = {
            id: 1,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        }
        this._state.profilePage.postsData.push(newPost)
        this._state.profilePage.newPostText = ""
        this._callSubscriber(this._state)
    },
    _updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText
        this._callSubscriber(this._state)
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            this._addPost()
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._updateNewPostText(action.newText)
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.messagePage.newMessageBody = action.body
            this._callSubscriber(this._state)
        }
        else if (action.type ===SEND_MESSAGE){
            let body = this._state.messagePage.newMessageBody;
            this._state.messagePage.newMessageBody = "";
            this._state.messagePage.messages.push( {id: 6, message: body })
            this._callSubscriber(this._state)
        }
    }

}
export const addPostActionCreator = () => ({type: ADD_POST})

export const onPostChangedActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}
export const sendMessageCreator = () => ({type: SEND_MESSAGE})

export const updateNewMessageCreator = (body) =>
    ({type: UPDATE_NEW_MESSAGE_BODY,
        body: body
})


window.store = store


export default store;