export type Blog = {
  id: string;
  type: 'internal' | 'external';
  title: string;
  excerpt: string;
  content?: string;
  tags: string[];
  published_at: string;
  reading_time?: number;
  external_url?: string;
  platform?: string;
};

export const staticBlogs: Blog[] = [
 /*  {
    id: 'external-1',
    type: 'external',
    title: 'Building Multithreaded Scrapers with Go Routines',
    excerpt: 'How I leveraged goroutines to build a high-performance web scraper that processes thousands of URLs concurrently.',
    tags: ['Go', 'Concurrency', 'Performance'],
    published_at: '2024-10-15',
    reading_time: 6,
    external_url: 'https://medium.com',
    platform: 'Medium',
  }, */
  {
    id: 'external-2',
    type: 'external',
    title: 'From Documents to Answers: How RAG Works',
    excerpt: "Learned how basic cosine similarity used in vector search",
    tags: [ 'Learning', 'vector search'],
    published_at: '2024-08-20',
    reading_time: 8,
    external_url: 'https://dev.to/ifrah_ashraf_a3600e049d51/from-documents-to-answers-how-rag-works-ofc',
    platform: 'Dev.to',
  },
];
