const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {

    postsData: [
        {id: 1, message: 'Hi,how are you?', likesCount: 12},
        {id: 2, message: 'It is my first post', likesCount: 11},
        {id: 3, message: 'It is my first post', likesCount: 11},
        {id: 4, message: 'It is my first post', likesCount: 11},
    ],
        newPostText: 'it'

}
const profileReduser = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 1,
                message: state.newPostText,
                likesCount: 0
            }
           return {...state,
                postsData: [...state.postsData, newPost],
                newPostText: ""
            }
        }

        case UPDATE_NEW_POST_TEXT: {
          return  {...state,
                newPostText: action.newText
            }
          }
        default:
            return state
    }


}
export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}
export default profileReduser