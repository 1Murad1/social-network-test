import {CHANGE_BACKGROUND} from "../actionTypes/actionTypes";
import backgroundOne from '../../assets/images/bg/bg-one.jpg';
import backgroundTwo from '../../assets/images/bg/bg-two.jpeg';
import backgroundThree from '../../assets/images/bg/bg-three.jpg';

let initialState = {
    settingsData: [
        {
            id: 1,
            bgUrl: backgroundOne,
            bgActive: false,

        },
        {
            id: 2,
            bgUrl: backgroundTwo,
            bgActive: false,
        },
        {
            id: 3,
            bgUrl: backgroundThree,
            bgActive: false
        }
    ]
}

const settingsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_BACKGROUND: {
            return {
                ...state,
                settingsData: state.settingsData.map(bg => {
                    if(bg.id === action.id ) {
                        localStorage.setItem('bgId', bg.id)
                        return {
                            ...bg,
                            bgActive: true
                        }
                    }
                    return {
                        ...bg,
                        bgActive: false
                    }
                })
            }
        }
        default:
            return state;
    }
}



export default settingsReducer;