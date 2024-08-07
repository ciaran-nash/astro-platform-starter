declare module '@sanity/client' {
    import type { SanityClient as BaseSanityClient } from '@sanity/client'

    export interface SanityClient extends BaseSanityClient {
        fetch<T>(query: string): Promise<T>
    }
}

export interface SanityPost {
    _id: string;
    title: string;
    // Add other fields as necessary
}
