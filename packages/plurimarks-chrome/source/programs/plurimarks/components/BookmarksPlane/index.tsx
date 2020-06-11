import React, {
    useState,
    useEffect,
} from 'react';

import {
    StyledBookmarksPlane,
} from './styled';

import {
    ChromeBookmark,
} from '../../../../data/interfaces';

import {
    BOOKMARKS_BAR,
    OTHER_BOOKMARKS,
} from '../../../../data/constants';

import {
    chromePromise,
} from '../../../../services/utilities/chrome';



const getNode = (
    title: string,
    tree: ChromeBookmark[],
): ChromeBookmark | undefined => {
    /**
     * Search the top level first to check if any match.
     */
    for (const node of tree) {
        if (node.title === title) {
            return node;
        }
    }

    /**
     * Search the children after no match at the top level.
     */
    for (const node of tree) {
        if (node.children) {
            return getNode(title, node.children);
        }
    }

    return;
}

export interface BookmarksPlaneProperties {
}

const BookmarksPlane: React.FC<BookmarksPlaneProperties> = () => {
    /** state */

    /** effects */
    useEffect(() => {
        const loadData = async () => {
            const bookmarksTree: ChromeBookmark[] = await chromePromise.bookmarks.getTree();

            const bookmarksBar = getNode('Bookmarks Bar', bookmarksTree);
            const otherBookmarks = getNode('Other Bookmarks', bookmarksTree);

            console.log('bookmarksTree', bookmarksTree);
            console.log('bookmarksBar', bookmarksBar);
            console.log('otherBookmarks', otherBookmarks);
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
