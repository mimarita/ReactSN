let initialState = {
    friends: [
        { id: 1, name: 'Vagrid', avatar: 'https://animeslayers.ru/wp-content/uploads/2018/12/dlyasteam4.jpg' },
        { id: 2, name: 'Era', avatar: 'https://animeslayers.ru/wp-content/uploads/2018/12/dlyasteam4.jpg' },
        { id: 3, name: 'Ika', avatar: 'https://animeslayers.ru/wp-content/uploads/2018/12/dlyasteam4.jpg' },
    ]
}

const sideBarReducer = (state = initialState, action) => {
    return state;
}
export default sideBarReducer