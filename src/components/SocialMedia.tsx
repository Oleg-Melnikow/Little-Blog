import React from 'react';
import {IconButton} from '@material-ui/core';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';

export function SocialMedia() {
    return (
        <div>
            <MediaLink media="instagram" component={<InstagramIcon/>}/>
            <MediaLink media="facebook" component={<FacebookIcon/>}/>
            <MediaLink media="twitter" component={<TwitterIcon/>}/>
        </div>
    )
}

type MediaLinkPropType = {
    media: string,
    component: React.ReactNode
}

const MediaLink = (props: MediaLinkPropType) => {

    const {media, component} = props;

    return (
        <IconButton color="inherit">
            <a href={`https://www.${media}.com/`} target="_blank" rel="noreferrer">{component}</a>
        </IconButton>
    )
}
