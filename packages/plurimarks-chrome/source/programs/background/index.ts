// import client from '../../services/graphql/client';

// import {
//     chromeStorage,
// } from '../../services/utilities/chrome';



function backgroundMain() {
    chrome.browserAction.onClicked.addListener(function (tab) {
        chrome.tabs.create({
            url: 'chrome://bookmarks',
        });
    });
}

backgroundMain();
