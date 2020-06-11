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
            path: '/',
            component: {
                kind: 'react',
                element: () => (
                    <BookmarksPlane />
                ),
            },
        },
    ];

    const configuration: PluridPartialConfiguration = {
        theme: 'plurid',
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

    return (
        <StyledPlurimarks>
            <PluridApplication
                planes={planes}
                view={[
                    '/',
                ]}
                configuration={configuration}
            />
        </StyledPlurimarks>
    );
}


export default Plurimarks;
