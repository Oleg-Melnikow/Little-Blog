import {AppBar, Toolbar, Typography} from '@material-ui/core';
import React from 'react';
import { NavLink } from 'react-router-dom';
import {SocialMedia} from "./SocialMedia";
import {MenuBar} from "./Menu";

export function Header() {

    return (
        <header style={{flexGrow: 1}}>
            <AppBar position="static" style={{background: "#222"}}>
                <Toolbar>
                    <MenuBar/>
                    <NavLink to="/">
                        <Typography variant="h6">
                            Little blog
                        </Typography>
                    </NavLink>
                    <div style={{flexGrow: 1}}/>
                    <SocialMedia/>
                </Toolbar>
            </AppBar>
        </header>
    )
}
