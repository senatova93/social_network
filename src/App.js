import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom"



const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route exaxt path='/dialogs' render={() =>
                        <Dialogs state={props.state.messagePage}/>}/>
                    <Route path='/profile' render={() => <Profile
                        profilePage={props.state.profilePage}
                        newPostText={props.state.newPostText}
                        dispatch={props.dispatch}>

                    </Profile>}/>
                </div>

            </div>

        </BrowserRouter>)
}


export default App;
