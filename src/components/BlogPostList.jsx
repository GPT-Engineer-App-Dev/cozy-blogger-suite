import React from 'react';
import { Link } from 'react-router-dom';

const BlogPostList = () => {
  const posts = [
    { id: 1, title: 'My First Blog Post', excerpt: 'This is the beginning of my blogging journey...', date: '2023-03-15' },
    { id: 2, title: 'Reflections on React', excerpt: 'After using React for a year, here are my thoughts...', date: '2023-03-20' },
    { id: 3, title: 'The Power of Tailwind CSS', excerpt: 'How Tailwind CSS has revolutionized my workflow...', date: '2023-03-25' },
  ];

  return (
    <div className="space-y-8">
      {posts.map((post) => (
        <article key={post.id} className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-2">
            <Link to={`/post/${post.id}`} className="text-blue-600 hover:text-blue-800">
              {post.title}
            </Link>
          </h2>
          <p className="text-gray-600 mb-4">{post.excerpt}</p>
          <div className="flex justify-between items-center text-sm text-gray-500">
            <span>{post.date}</span>
            <Link to={`/post/${post.id}`} className="text-blue-600 hover:text-blue-800">
              Read more →
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
};

export default BlogPostList;