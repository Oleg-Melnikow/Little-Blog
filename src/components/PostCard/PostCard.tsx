import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import {CardContent, Typography} from "@material-ui/core";
import s from "./PostCard.module.css";
import {postType} from "../../state/blogReducer";
import { CardHeader } from '@material-ui/core';
import { Avatar } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

type PostCardPropsTYpe = {
    post: postType,
}

export function PostCard(props: PostCardPropsTYpe) {

    const {title, description, dateAdd, author} = props.post;

    return (
        <Card className={s.root}>
            <CardHeader className={s.cardHeader}
                avatar={
                    <Avatar aria-label="recipe" src={author.avatar}/>
                }
                title={author.name}
                subheader={dateAdd}
            />
            <CardActionArea>
                <CardContent className={s.itemsText}>
                    <Typography gutterBottom variant="h5" component="h3">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={s.button}>
                <NavLink to={`/post/${props.post.id}`}>
                    <Button variant="outlined" size="small" color="default">
                        Continue Reading
                    </Button>
                </NavLink>
            </CardActions>
        </Card>
    );
}
