const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


let store = {
    _state : {
        profilePage: {
            postsData: [
                {id: 1, message: 'Hi,how are you?', likesCount: 12},
                {id: 1, message: 'It is my first post', likesCount: 11},
                {id: 1, message: 'It is my first post', likesCount: 11},
                {id: 1, message: 'It is my first post', likesCount: 11},
            ],
            newPostText: 'it'
        },
        messagePage: {
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'Hi, how are you?'},
                {id: 3, message: 'What about the wheather?'},
                {id: 4, message: 'What about the wheather?'},
                {id: 5, message: 'What about the wheather?'},
            ],
            dialogs: [
                {id: 1, name: 'Nastya'},
                {id: 2, name: 'Mark'},
                {id: 3, name: 'Tamara'},
                {id: 4, name: 'John'},
                {id: 5, name: 'Yasha'},
            ]
        },
    },
    _callSubscriber () {
        console.log("stay changed")
    },

    getState () {return this._state},
    subscribe  (observer)  {
        this._callSubscriber =  observer},


    _addPost  () {
        let newPost = {
            id: 1,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        }
        this._state.profilePage.postsData.push(newPost)
        this._state.profilePage.newPostText = ""
        this._callSubscriber(this._state)
    },
    _updateNewPostText (newText) {
        this._state.profilePage.newPostText = newText
      this._callSubscriber(this._state)
    },
    dispatch(action){
        if ( action.type === ADD_POST){
          this._addPost()
        } else if (action.type === UPDATE_NEW_POST_TEXT){
            this._updateNewPostText(action. newText)
        }
    },

}
     export const addPostActionCreator = () => {

         return {
            type: ADD_POST
        }
    }
    export const onPostChangedActionCreator = (text) => {

        return {
        type: UPDATE_NEW_POST_TEXT,
        newText:text

    }
}



window.store = store


export default store;