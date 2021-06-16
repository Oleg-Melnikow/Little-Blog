import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from "@material-ui/icons/Menu";
import {IconButton} from "@material-ui/core";
import { NavLink } from 'react-router-dom';

export function MenuBar() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleClick}>
                <MenuIcon />
            </IconButton>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <NavLink to="/add-post" style={{color: "inherit"}}>
                    <MenuItem onClick={handleClose}>Add post</MenuItem>
                </NavLink>
                <NavLink to="/" style={{color: "inherit"}}>
                    <MenuItem onClick={handleClose}>Main page</MenuItem>
                </NavLink>
            </Menu>
        </div>
    );
}
