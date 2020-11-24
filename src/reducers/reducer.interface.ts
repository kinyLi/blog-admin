interface Action<T = unknown> {
    type: string;
    payload?: {
        data?: T;
    };
}

interface CacheImageListInit {
    list: string[];
}

export type { Action, CacheImageListInit };
