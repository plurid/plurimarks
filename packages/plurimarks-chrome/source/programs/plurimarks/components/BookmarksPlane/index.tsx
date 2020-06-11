import React, {
    useState,
    useEffect,
} from 'react';

import {
    StyledBookmarksPlane,
} from './styled';

import {
    chromePromise,
} from '../../../../services/utilities/chrome';



export interface BookmarksPlaneProperties {
}

const BookmarksPlane: React.FC<BookmarksPlaneProperties> = () => {
    /** state */

    /** effects */
    useEffect(() => {
        const loadData = async () => {
            const bookmarksTree = await chromePromise.getTree();
            console.log('bookmarksTree', bookmarksTree);
        }

        loadData();
    }, []);


    /** render */
    return (
        <StyledBookmarksPlane>

        </StyledBookmarksPlane>
    );
}


export default BookmarksPlane;
