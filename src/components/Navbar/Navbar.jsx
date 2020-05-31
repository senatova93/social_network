import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

class Navbar extends React.Component {
    state = {
        isMenu: false
    }
    toggleMenu = ()=> {
        this.setState({
            isMenu: !this.state.isMenu
        })
    }
    render = () => {
        let classForMenu1 = this.state.isMenu ? s.menuIconActive + ' ' + s.menuIcon : s.menuIcon

        return (

            <nav className={s.nav}>
                <div className={classForMenu1}
                onClick={this.toggleMenu}></div>

                { this.state.isMenu && <div>
                    <div className={s.item}>
                        <NavLink to="/profile" activeClassName={s.active}>Profile </NavLink>
                    </div>
                    <div className={s.item}>
                    <NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/news" activeClassName={s.active}>News</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/music" activeClassName={s.active}>Music</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/settings" activeClassName={s.active}>Settings</NavLink>
                </div>
                    <div className={s.item}>
                    <NavLink to="/users" activeClassName={s.active}>Users</NavLink>
                </div>

                    </div> }

            </nav>
        )
    }
}
export default Navbar;