import React from 'react';

import {
    StyledBookmarksPlane,
} from './styled';



export interface BookmarksPlaneProperties {
    plurid: any;
}

const BookmarksPlane: React.FC<BookmarksPlaneProperties> = (
    properties,
) => {
    /** properties */
    const {
        plurid,
    } = properties;

    console.log('plurid', plurid);


    /** render */
    return (
        <StyledBookmarksPlane>

        </StyledBookmarksPlane>
    );
}


export default BookmarksPlane;
