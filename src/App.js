import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {BrowserRouter, Route} from "react-router-dom"
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/USERS/UsersContainer";



const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route exaxt path='/dialogs' render={() =>
                        <DialogsContainer />}/>
                    <Route path='/profile' render={() =>
                        <Profile/>}/>


                        <Route path='/users' render={() =>
                        <UsersContainer/> }/>
                </div>

            </div>

        </BrowserRouter>)
}


export default App;
