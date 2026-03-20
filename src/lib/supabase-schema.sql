-- Run this in your Supabase SQL editor to set up the blogs table

CREATE TABLE IF NOT EXISTS blogs (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  type TEXT NOT NULL CHECK (type IN ('internal', 'external')),
  title TEXT NOT NULL,
  excerpt TEXT,
  content TEXT,
  cover_image TEXT,
  tags TEXT[] DEFAULT '{}',
  published_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  reading_time INTEGER,
  external_url TEXT,
  platform TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE blogs ENABLE ROW LEVEL SECURITY;

-- Allow public read access
CREATE POLICY "Public blogs are viewable by everyone"
  ON blogs FOR SELECT
  USING (true);

-- Example: Insert an internal blog post
-- INSERT INTO blogs (type, title, excerpt, content, tags, reading_time)
-- VALUES (
--   'internal',
--   'My First Blog Post',
--   'A brief excerpt of the post...',
--   '# My First Blog Post\n\nHello world! This is written in **Markdown**.\n\n## Section 1\n\nContent here...',
--   ARRAY['Engineering', 'Learning'],
--   5
-- );

-- Example: Insert an external blog post
-- INSERT INTO blogs (type, title, excerpt, tags, reading_time, external_url, platform)
-- VALUES (
--   'external',
--   'My Medium Article',
--   'Short description...',
--   ARRAY['Tech', 'Career'],
--   4,
--   'https://medium.com/your-article-url',
--   'Medium'
-- );
