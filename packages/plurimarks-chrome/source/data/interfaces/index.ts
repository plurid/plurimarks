export interface ChromeBookmark {
    children?: ChromeBookmark[];
    dateAdded: number;
    dateGroupModified?: number;
    id: string;
    index?: number;
    parentId?: string;
    title: string;
    url?: string;
}

export interface Plurimark {
    source: string;
}
