import React, {useEffect} from 'react';
import {postType} from "../../state/blogReducer";
import Button from "@material-ui/core/Button";
import {NavLink, RouteComponentProps, withRouter} from "react-router-dom";
import {Container} from "@material-ui/core";
import s from "./PostPage.module.css"

type PostPagePropsType = {
    post: postType | null,
    readPost: (postId: number) => void
}

type PathParamsType = {
    postId: string
}

type PropsType = RouteComponentProps<PathParamsType> & PostPagePropsType;

const PostPage = (props: PropsType) => {
    debugger
    let {post, readPost, match} = props
    let postId: number = +match.params.postId;

    useEffect(() => {
        readPost(postId)
    }, [readPost, postId])

    return(
         <Container>
             {post && <div className={s.post}>
                 <header>
                     <h2 className={s.title}>{post.title}</h2>
                     <div className={s.info}>
                         <span>{post.dateAdd}</span>
                         <div className={s.author}>
                             <img src={post.author.avatar} alt="avatar"/>
                             <span>{post.author.name}</span>
                         </div>
                     </div>
                 </header>
                 <div className={s.description}>
                     {post.description}
                 </div>
             </div>}
                <NavLink to="/">
                    <Button variant="outlined" size="small" color="default">
                        Back to home
                    </Button>
                </NavLink>
            </Container>
    )
}

export default withRouter(PostPage);