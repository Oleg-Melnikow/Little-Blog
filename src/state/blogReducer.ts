import avatar from "./../assets/images/avatar.png";

export type initialStateType = {
    posts: Array<postType>,
    currentPage: number,
    pageSize: number
}

export type postType = {
    id: number,
    title: string,
    description: string,
    dateAdd: string,
    likesCount: number
    author: {
        name: string,
        avatar: string
    }
}

export const initialState: initialStateType = {
    posts: [
        {
            id: 1,
            title: "hello",
            description: "Hello",
            dateAdd: "Sep 14, 2019",
            likesCount: 12,
            author: {name: "John", avatar: avatar}
        },
        {
            id: 2,
            title: "Post about something",
            description: `It’s no secret that the digital industry is booming. 
        From exciting startups to global brands, companies are reaching out to digital agencies, 
        responding to the new possibilities available. 
        However, the industry is fast becoming overcrowded, 
        heaving with agencies offering similar services — on the surface, at least.\n
            \n
        Producing creative, fresh projects is the key to standing out. 
        Unique side projects are the best place to innovate, but balancing commercially and creatively lucrative work is tricky. 
        So, this article looks at how to make side projects work and why they’re worthwhile, 
        drawing on lessons learned from our development of the ux app.`,
            dateAdd: "Sep 17, 2020",
            likesCount: 11,
            author: {name: "John", avatar: avatar}
        },
        {
            id: 3,
            title: "It’s no secret",
            description: `It’s no secret that the digital industry is booming. 
        From exciting startups to global brands, companies are reaching out to digital agencies, 
        responding to the new possibilities available. 
        However, the industry is fast becoming overcrowded, 
        heaving with agencies offering similar services — on the surface, at least.\n
            \n
        Producing creative, fresh projects is the key to standing out. 
        Unique side projects are the best place to innovate, but balancing commercially and creatively lucrative work is tricky. 
        So, this article looks at how to make side projects work and why they’re worthwhile, 
        drawing on lessons learned from our development of the ux app.`,
            dateAdd: "Sep 21, 2020",
            likesCount: 11,
            author: {name: "John", avatar: avatar}
        },
        {
            id: 4,
            title: "It’s no secret",
            description: `It’s no secret that the digital industry is booming. 
        From exciting startups to global brands, companies are reaching out to digital agencies, 
        responding to the new possibilities available. 
        However, the industry is fast becoming overcrowded, 
        heaving with agencies offering similar services — on the surface, at least.\n
            \n
        Producing creative, fresh projects is the key to standing out. 
        Unique side projects are the best place to innovate, but balancing commercially and creatively lucrative work is tricky. 
        So, this article looks at how to make side projects work and why they’re worthwhile, 
        drawing on lessons learned from our development of the ux app.`,
            dateAdd: "September 24, 2020",
            likesCount: 11,
            author: {name: "John", avatar: avatar}
        },
        {
            id: 5,
            title: "It’s no secret",
            description: `It’s no secret that the digital industry is booming. 
        From exciting startups to global brands, companies are reaching out to digital agencies, 
        responding to the new possibilities available. 
        However, the industry is fast becoming overcrowded, 
        heaving with agencies offering similar services — on the surface, at least.\n
            \n
        Producing creative, fresh projects is the key to standing out. 
        Unique side projects are the best place to innovate, but balancing commercially and creatively lucrative work is tricky. 
        So, this article looks at how to make side projects work and why they’re worthwhile, 
        drawing on lessons learned from our development of the ux app.`,
            dateAdd: "Sep 29, 2020",
            likesCount: 11,
            author: {name: "John", avatar: avatar}
        },
    ],
    currentPage: 1,
    pageSize: 6
}

export const blogReducer = (state: initialStateType = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case "blogReducer/ADD_POST":
            return {
                ...state,
                posts: [...state.posts, {
                    id: state.posts.length + 1,
                    dateAdd: `${formatDate()}`,
                    author: {name: "John", avatar},
                    likesCount: 2,
                    ...action.post
                }]
            }
        case "blogReducer/NEXT_PAGE":
            return {
                ...state,
                currentPage: action.page
            }
        default:
            return state;
    }
}

export const addPost = (post: { title: string, description: string, }) => ({
    type: "blogReducer/ADD_POST",
    post
} as const);

export const nextPage = (page: number) => ({type: "blogReducer/NEXT_PAGE", page} as const);

export type ActionsType = ReturnType<typeof addPost> | ReturnType<typeof nextPage>;

function formatDate() {
    let date = new Date();
    let month = date.toDateString().split(" ").slice(1, 3).join(" ");
    return `${month}, ${date.getFullYear()}`
}
