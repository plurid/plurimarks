import React, {
    useState,
    useEffect,
    useContext,
} from 'react';

import {
    graphql,
} from '@plurid/plurid-functions';

import Context from '../../context';

import {
    StyledPopup,
    StyledPopupContainer,
    StyledPopupContainerItemsView,
    StyledViewOptionsButton,
} from './styled';

import {
    chromeStorage,
} from '../../../../services/utilities';

import client from '../../../../services/graphql/client';
import {
    CURRENT_OWNER,
} from '../../../../services/graphql/query';
import {
    LOGOUT,
} from '../../../../services/graphql/mutate';



const Popup: React.FC<any> = (properties) => {
    // const context: any = useContext(Context);
    // const {
    //     theme,
    // } = context;


    return (
        <StyledPopup
            // theme={theme}
        >

        </StyledPopup>
    );
}


export default Popup;
