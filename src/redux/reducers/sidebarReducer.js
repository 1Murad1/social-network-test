let initialState = {
    sidebarData: [
        {
            id: 1,
            linkName: "Profile",
            pathName: "/profile"
        },
        {
            id: 2,
            linkName: "Dialogs",
            pathName: "/dialogs"
        },
        {
            id: 3,
            linkName: "Users",
            pathName: "/users"
        },
        {
            id: 4,
            linkName: "News",
            pathName: "/news"
        },
        {
            id: 5,
            linkName: "Music",
            pathName: "/music"
        },
        {
            id: 6,
            linkName: "Friends",
            pathName: "/friends"
        },
        {
            id: 7,
            linkName: "Settings",
            pathName: "/settings"
        }
    ]
}

const sidebarReducer = (state = initialState, action) => {


    return state
}

export default sidebarReducer;