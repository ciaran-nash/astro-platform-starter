// sanity.d.ts
declare module '@sanity/client' {
    import type { SanityClient as BaseSanityClient } from '@sanity/client'

    export interface SanityClient extends BaseSanityClient {
        fetch<T>(query: string): Promise<T>
    }
}

export interface SanityPost {
    _id: string;
    title: string;
    description: string;
    image: {
        asset: {
            _ref: string;
            _type: string;
        };
    };
    exhibitionDetails: {
        dates: string;
        days: string;
        location: string;
        accessInfo: string;
    };
    credits: any; // Adjust this type as necessary
    // Add other fields as necessary
}


