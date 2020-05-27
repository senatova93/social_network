const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {

    users: [
        {id: 1, fullName: 'Nannii', status: 'Lucky person', location: { city: 'Florida', country: 'USA'}},
        {id: 1, fullName: 'Vew', status: 'Lucky person too', location: { city: 'Moscow', country: 'Russia'}},
        {id: 1, fullName: 'Masha', status: 'Undefenetly no', location: { city: 'Ukrain', country: 'Kiev'}},
        {id: 1, fullName: 'Marik', status: 'Super-boy', location: { city: 'Florida', country: 'USA'}},

    ],
        newPostText: 'it'

}
const usersReduser = (state = initialState, action) => {
    switch (action.type) {
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
export default usersReduser