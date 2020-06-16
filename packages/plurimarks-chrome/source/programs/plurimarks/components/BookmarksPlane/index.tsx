import React, {
    useState,
    useEffect,
} from 'react';

import {
    uuid,
} from '@plurid/plurid-functions';

import {
    PluridLink,
} from '@plurid/plurid-react';

import {
    StyledBookmarksPlane,
} from './styled';

import {
    chromePromise,
} from '../../../../services/utilities';

import {
    ChromeBookmark,
} from '../../../../data/interfaces';



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

    const {
        id,
    } = plurid.route.plane.parameters;

    console.log('PLURID', plurid);

    /** state */
    const [bookmarkTree, setBookmarkTree] = useState<ChromeBookmark[]>([]);


    /** effect */
    useEffect(() => {
        if (id !== 'dashboard') {
            const loadData = async () => {
                const bookmarksTree: ChromeBookmark[] = await chromePromise
                    .bookmarks
                    .getSubTree(id);

                console.log('bookmarksTree', bookmarksTree);
                if (bookmarksTree[0].children) {
                    setBookmarkTree(bookmarksTree[0].children);
                }
            }

            loadData();
        }
    }, [
        id,
    ]);


    /** render */
    if (id === 'dashboard') {
        return (
            <StyledBookmarksPlane>
                <ul>
                    <li>
                        <PluridLink
                            route="/1"
                        >
                            Main Bookmarks
                        </PluridLink>
                    </li>

                    <li>
                        <PluridLink
                            route="/2"
                        >
                            Other Bookmarks
                        </PluridLink>
                    </li>
                </ul>
            </StyledBookmarksPlane>
        );
    }

    return (
        <StyledBookmarksPlane>
            <ul>
                {bookmarkTree.length > 0 && (
                    bookmarkTree.map(bookmark => {
                        return (
                            <li
                                key={uuid.generate()}
                            >
                                <PluridLink
                                    route={`/${bookmark.id}`}
                                >
                                    {bookmark.title}
                                </PluridLink>
                            </li>
                        );
                    })
                )}
            </ul>
        </StyledBookmarksPlane>
    );
}


export default BookmarksPlane;
