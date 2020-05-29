const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS'

let initialState = {

    users: [
        {id: 1, photoURL: 'https://ont.by/static/command/main/cell-big/tYzSgwm4n72WxjBw.jpg', followed: true, fullName: 'Nannii', status: 'Lucky person', location: { city: 'Florida', country: 'USA'}},
        {id: 2, photoURL: 'https://ont.by/static/command/main/cell-big/tYzSgwm4n72WxjBw.jpg',followed: true,fullName: 'Vew', status: 'Lucky person too', location: { city: 'Moscow', country: 'Russia'}},
        {id: 3, photoURL: 'https://ont.by/static/command/main/cell-big/tYzSgwm4n72WxjBw.jpg', followed: false,fullName: 'Masha', status: 'Undefenetly no', location: { city: 'Ukrain', country: 'Kiev'}},
        {id: 4, photoURL: 'https://ont.by/static/command/main/cell-big/tYzSgwm4n72WxjBw.jpg',followed: false, fullName: 'Marik', status: 'Super-boy', location: { city: 'Florida', country: 'USA'}},
    ],
}
const usersReduser = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
return {
         ...state,
         users: state.users.map ( u => {
             if (u.id === action.userID){
                 return {...u, followed: true}
             }
         return u
         })
     }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map ( u => {
                    if (u.id === action.userID){
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case SET_USERS: {
            return {...state, users: [...state.users, ...action.users]}
        }
        default:
            return state
    }


}
export const followAC= (userID) => ({type: FOLLOW, userID})
export const unFollowAC = (userID) => ({type: UNFOLLOW, userID})
export const setUserAC = (users) => ({type: SET_USERS, users})
export default usersReduser