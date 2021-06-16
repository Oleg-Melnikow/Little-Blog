import {AppBar, Toolbar, Typography} from '@material-ui/core';
import React from 'react';
import {SocialMedia} from "./SocialMedia";

export function Header() {

    return (
        <header style={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6">
                        Little blog
                    </Typography>
                    <div style={{flexGrow: 1}}/>
                    <SocialMedia/>
                </Toolbar>
            </AppBar>
        </header>
    )
}
