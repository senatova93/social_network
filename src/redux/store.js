import profileReduser from "./profile-reduser";
import messageReduser from "./message-reduser";


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
                {id: 2, name: 'Mark'},
                 {id: 3, name: 'Tamara'},
                 {id: 4, name: 'John'},
                 {id: 5, name: 'Yasha'},
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
        this._state.profilePage = profileReduser(this._state.profilePage, action)
        this._state.messagePage = messageReduser(this._state.messagePage, action)
        this._callSubscriber(this._state)
    }
}



window.store = store


export default store;