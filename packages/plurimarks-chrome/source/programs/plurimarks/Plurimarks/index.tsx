import React, {
    useState,
    useContext,
    useEffect,
} from 'react';

import {
    PluridApplication,
    PluridPlane,
    PluridPartialConfiguration,
} from '@plurid/plurid-react';

import {
    graphql,
} from '@plurid/plurid-functions';

import Context from '../context';

import {
    StyledPlurimarks,
} from './styled';

import BookmarksPlane from '../components/BookmarksPlane';

import {
    chromePromise,
} from '../../../services/utilities';

import {
    plurimark,
} from '../../../services/utilities';

import {
    ChromeBookmark,
} from '../../../data/interfaces';

import {
    BOOKMARKS_BAR,
    OTHER_BOOKMARKS,
} from '../../../data/constants';



interface PlurimarksProperties {
}

const Plurimarks: React.FC<PlurimarksProperties> = () => {
    // const context: any = useContext(Context);
    // const {
    //     theme,
    //     setTheme,
    // } = context;

    const planes: PluridPlane[] = [
        {
            route: '/:id',
            component: {
                kind: 'react',
                element: BookmarksPlane,
            },
        },
    ];

    const configuration: PluridPartialConfiguration = {
        global: {
            theme: 'plurid',
        },
        space: {
            center: true,
        },
        elements: {
            plane: {
                controls: {
                    show: false,
                },
                width: typeof window !== 'undefined'
                    ? window.innerWidth < 800
                        ? 1 : 0.5
                        : undefined,
            },
            viewcube: {
                show: typeof window !== 'undefined'
                    ? window.innerWidth < 800
                        ? false : true
                        : undefined,
            },
        },
    };


    /** effects */
    useEffect(() => {
        const loadData = async () => {
            const bookmarksTree: ChromeBookmark[] = await chromePromise.bookmarks.getTree();

            const bookmarksBar = plurimark.getNode(BOOKMARKS_BAR, bookmarksTree);
            const otherBookmarks = plurimark.getNode(OTHER_BOOKMARKS, bookmarksTree);

            console.log('bookmarksTree', bookmarksTree);
            console.log('bookmarksBar', bookmarksBar);
            console.log('otherBookmarks', otherBookmarks);
        }

        loadData();
    }, []);


    /** render */
    return (
        <StyledPlurimarks>
            <PluridApplication
                planes={planes}
                view={[
                    '/dashboard',
                ]}
                configuration={configuration}
            />
        </StyledPlurimarks>
    );
}


export default Plurimarks;
