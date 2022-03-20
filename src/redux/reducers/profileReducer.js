import {
    ADD_POST, DELETE_POST,
    GET_USER_STATUS,
    SET_USER_PROFILE
} from "../actionTypes/actionTypes";

let initialState = {
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
    newPostText: "It-kamasutra",
    userProfile: null,
    status: ""
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 4,
                messagePost: action.postText,
                likes: 33
            }
            return  {
                ...state,
                postData: [...state.postData, newPost]
            };
        }
        case DELETE_POST: {
            return {
                ...state,
                postData: state.postData.filter(postId => postId.id != action.postId)
            }
        }
        case GET_USER_STATUS:
            return {
                ...state, status: action.status
            }
        case SET_USER_PROFILE: {
            return  {
                ...state, userProfile: action.userProfile
            }
        }


        default:
            return state;
    }
}



export default profileReducer;