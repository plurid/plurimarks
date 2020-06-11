import React, {
    useState,
    useContext,
    useEffect,
} from 'react';

import themes from '@plurid/plurid-themes';

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

import {
    chromeStorage,
} from '../../../services/utilities';

import client from '../../../services/graphql/client';
import {
    CURRENT_OWNER,
} from '../../../services/graphql/query';
import {
    LOGOUT,
} from '../../../services/graphql/mutate';



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
                    <div>
                        bookmarks
                    </div>
                ),
            },
        },
    ];

    const configuration: PluridPartialConfiguration = {
        theme: 'plurid',
        space: {
            // opaque: false,
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
        <StyledPlurimarks
            // theme={theme}
        >
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
