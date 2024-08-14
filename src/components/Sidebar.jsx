import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const categories = ['Technology', 'Travel', 'Food', 'Lifestyle'];
  const recentPosts = [
    { id: 3, title: 'The Power of Tailwind CSS' },
    { id: 2, title: 'Reflections on React' },
    { id: 1, title: 'My First Blog Post' },
  ];

  return (
    <aside className="space-y-8">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
        <h3 className="text-xl font-bold mb-4 dark:text-white">Categories</h3>
        <ul className="space-y-2">
          {categories.map((category) => (
            <li key={category}>
              <Link to={`/category/${category.toLowerCase()}`} className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
                {category}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
        <h3 className="text-xl font-bold mb-4 dark:text-white">Recent Posts</h3>
        <ul className="space-y-2">
          {recentPosts.map((post) => (
            <li key={post.id}>
              <Link to={`/post/${post.id}`} className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;