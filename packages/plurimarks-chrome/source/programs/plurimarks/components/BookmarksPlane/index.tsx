import React from 'react';

import {
    PluridLink,
} from '@plurid/plurid-react';

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
            <PluridLink
                path="/1"
            >
                Main Bookmarks
            </PluridLink>

            <PluridLink
                path="/2"
            >
                Other Bookmarks
            </PluridLink>

        </StyledBookmarksPlane>
    );
}


export default BookmarksPlane;
