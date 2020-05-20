const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

 const profileReduser = (state, action) => {
    {
        if (action.type === ADD_POST) {
            state._addPost()
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            state._updateNewPostText(action.newText)
        }
    }
    return state
}
export default profileReduser