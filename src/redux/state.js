import profileReducer from "./reducers/profileReducer";
import dialogsReducer from "./reducers/dialogsReducer";
import sidebarReducer from "./reducers/sidebarReducer";
import friendsReducer from "./reducers/friendsReducer";

// store
let store = {

    _state: {
        profile: {
            postData: [
                {
                    id: 1,
                    messagePost: "Hello, my name is Murad!",
                    likes: 30
                },
                {
                    id: 2,
                    messagePost: "Hello, my name is Murad!",
                    likes: 20
                },
                {
                    id: 3,
                    messagePost: "Hello, my name is Kate!",
                    likes: 3
                }
            ],
            newPostText: "It-kamasutra"
        },
        dialogs: {
            dialogsData: [
                {
                    id: 1,
                    name: "Алина"
                },
                {
                    id: 2,
                    name: "Амина"
                },
                {
                    id: 3,
                    name: "Сабина"
                },
                {
                    id: 4,
                    name: "Андрей"
                },
                {
                    id: 5,
                    name: "Саня"
                }
            ],
            messagesData: [
                {
                    id: 1,
                    message: "Привет, меня зовут Алина!"
                },
                {
                    id: 2,
                    message: "Как тебя зовут?"
                },
                {
                    id: 3,
                    message: "Как твои дела?"
                },
                {
                    id: 4,
                    message: "Буду работать над проэктом"
                },
                {
                    id: 5,
                    message: "Позвони мне"
                }
            ],
            newMessageText: "Hello, I am the best!"
        },
        friends: {
            friendsData: [
                {
                    id: 1,
                    name: "Амина",
                    imageSrc: "https://image.shutterstock.com/image-vector/female-silhoutte-avatar-default-profile-260nw-1219366543.jpg"
                },
                {
                    id: 2,
                    name: "Алина",
                    imageSrc: "https://spng.pngfind.com/pngs/s/443-4432916_female-woman-profile-silhouette-overlay-pub-dom-silhouette.png"
                },
                {
                    id: 3,
                    name: "Саня",
                    imageSrc: "https://bestprofilepictures.com/wp-content/uploads/2021/04/Cool-Profile-Picture-986x1024.jpg"
                }
            ],
            newFriend: ''
        },
        sidebar: {
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
    },
    getState() {
        return this._state
    },
    _rerenderEntireTree() {
        console.log("this.state was changed")
    },

    dispatch(action) {

        this._state.profile = profileReducer(this._state.profile, action);
        this._state.dialogs = dialogsReducer(this._state.dialogs, action);

        this._state.friends = friendsReducer(this._state.friends, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._rerenderEntireTree(this._state);

    },

    subscribe(observer) {
        this._rerenderEntireTree = observer
    }
};

export default store;
