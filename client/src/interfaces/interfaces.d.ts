export interface INews {
    title: string,
    content: string,
    description: string,
    author: string,
    publishedAt: string,
    url: string,
    urlToImage: string,
    source: {
        id: string,
        name: string
    }
}