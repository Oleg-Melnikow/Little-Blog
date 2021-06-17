import React from 'react';
import {postType} from "../../state/blogReducer";
import {Grid} from "@material-ui/core";
import {PostCard} from "../PostCard/PostCard";

type MainPagePropsType = {
    posts: Array<postType>,
}

export function MainPage(props: MainPagePropsType) {
    return (
        <div>
            <Grid container direction="row" justify="center" style={{minHeight: "600px"}}>
                {props.posts.map(post => {
                    return <PostCard key={post.id} post={post}/>
                })}
            </Grid>
        </div>
    )
}