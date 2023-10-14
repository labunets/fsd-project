// <path, scroll position <px>>
export type ScrollSchema = Record<string, number>;

export interface UISchema {
    scroll: ScrollSchema;
}
