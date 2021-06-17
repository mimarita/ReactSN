const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';


let initialState = {
users: [
    { id: 1, followed: false, fullName: 'Groot', status: 'I am superhero!', location: { planet: 'X', country: 'Dendraria' }, avatar: 'https://animeslayers.ru/wp-content/uploads/2018/12/dlyasteam4.jpg' },
    { id: 2, followed: true, fullName: 'Anthony Edward Stark', status: 'I am superhero!', location: { planet: 'Earth', country: 'USA' }, avatar: 'https://animeslayers.ru/wp-content/uploads/2018/12/dlyasteam4.jpg' },
    { id: 3, followed: true, fullName: 'Wanda Maximoff', status: 'I am superhero!', location: { planet: 'Earth', country: 'Sokovia' }, avatar: 'https://animeslayers.ru/wp-content/uploads/2018/12/dlyasteam4.jpg' },
    { id: 4, followed: false, fullName: 'Loki Laufeyson', status: 'I am superhero!', location: { planet: 'TVA', country: 'office' }, avatar: 'https://animeslayers.ru/wp-content/uploads/2018/12/dlyasteam4.jpg' },
    { id: 5, followed: true, fullName: 'Robert Bruce Banner', status: 'I am superhero!', location: { planet: 'Earth', country: 'USA' }, avatar: 'https://animeslayers.ru/wp-content/uploads/2018/12/dlyasteam4.jpg' },
    { id: 6, followed: true, fullName: 'Natasha Romanoff', status: 'I am superhero!', location: { planet: 'Earth', country: 'Russia' }, avatar: 'https://animeslayers.ru/wp-content/uploads/2018/12/dlyasteam4.jpg' }
]};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u;
                }),
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u;
                }),
            }
            
            case SET_USERS:{
                return {
                    ...state, 
                    users: [...state.users, ...action.users]
                }
            }
        default:
            return state;
    }
}
// AC = action creator, то есть ниже написано followAC = follow action creator
export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({type: SET_USERS, users});


export default usersReducer;