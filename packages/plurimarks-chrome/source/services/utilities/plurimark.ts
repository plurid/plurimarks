import {
    ChromeBookmark,
} from '../../data/interfaces';



export const getNode = (
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