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
  {
    id: 'external-3',
    type: 'external',
    title: 'From Documents to Answers: How RAG Works',
    excerpt: 'A practical look at how documents become searchable context, and how cosine similarity helps retrieve a useful answer.',
    tags: ['Learning', 'Vector Search'],
    published_at: '2026-02-22',
    reading_time: 8,
    external_url: 'https://dev.to/ifrah_ashraf_a3600e049d51/from-documents-to-answers-how-rag-works-ofc',
    platform: 'Dev.to',
  },
];
