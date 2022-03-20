import React from "react";
import './App.css';
import Footer from "./components/Footer/Footer";
import {Routes, Route, BrowserRouter, HashRouter} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import FriendsContainer from "./containers/FriendsContainer";
import SidebarContainer from "./containers/SidebarContainer";
import UsersContainer from "./containers/UsersContainer";
import SettingsContainer from "./containers/SettingsContainer";
import HeaderContainer from "./containers/HeaderContainer";
import Login from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {setInitializedThunkCreator} from "./redux/actions/appAction";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/reduxStore";
import {WithSuspense} from "./HOC/WithSuspense";

const DialogsContainer = React.lazy(() => import('./containers/DialogsContainer'));
const ProfileUserContainer = React.lazy(() => import('./containers/ProfileUserContainer'));

const ProfileUserContainerHOC = WithSuspense(ProfileUserContainer);
const DialogsContainerHOC = WithSuspense(DialogsContainer);

class App extends React.Component {

    componentDidMount() {
        this.props.setInitialized()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <SidebarContainer/>
                <div className="content">
                    <Routes>
                        <Route path="/profile" element={<ProfileUserContainerHOC />}>
                            <Route path=":userId" element={<ProfileUserContainer/>}/>
                        </Route>
                        <Route path="/dialogs/*" element={<DialogsContainerHOC />}/>
                        <Route path="/users" element={<UsersContainer/>}/>
                        <Route path="/news" element={<News/>}/>
                        <Route path="/music" element={<Music/>}/>
                        <Route path="/friends" element={<FriendsContainer/>}/>
                        <Route path="/settings" element={<SettingsContainer/>}/>
                        <Route path="/login" element={<Login/>}/>
                    </Routes>
                </div>
                <Footer/>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setInitialized: () => {
            dispatch(setInitializedThunkCreator())
        }
    }
}

let AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

const SocialApp = (props) => {
    return (
        <HashRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </HashRouter>
    )
}

export default SocialApp;