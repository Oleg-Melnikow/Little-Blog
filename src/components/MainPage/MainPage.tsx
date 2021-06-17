import React from 'react';
import {postType} from "../../state/blogReducer";
import {Grid} from "@material-ui/core";
import {PostCard} from "../PostCard/PostCard";
import s from "./MainPage.module.css"
import {PaginationRounded} from "../Pagination/Pagination";

type MainPagePropsType = {
    posts: Array<postType>,
    currentPage: number,
    pageSize: number,
    handlerNextPage: (page: number) => void
}

export class MainPage extends React.Component<MainPagePropsType> {

    nextPage = (page: number) => {
        this.props.handlerNextPage(page);
    }

    componentWillUnmount() {
        this.props.handlerNextPage(1);
    }

    render() {

        let pageCount = Math.ceil(this.props.posts.length / this.props.pageSize);
        let lowerBound = this.props.currentPage * this.props.pageSize - this.props.pageSize;
        let upperBound = this.props.currentPage * this.props.pageSize;

        return (
            <div>
                <Grid container direction="row" justify="center"  style={{minHeight: "600px"}}>
                    {this.props.posts.filter(p => p.id > lowerBound && p.id <= upperBound)
                        .map(post => {
                            return <PostCard key={post.id} post={post}/>
                        })}
                </Grid>
                {pageCount >= 2 && <div className={s.pagination}>
                    <PaginationRounded currentPage={this.props.currentPage} totalPages={pageCount} isDisabled={false}
                                       nextPage={this.nextPage}/>
                </div>}
            </div>
        )
    }
}