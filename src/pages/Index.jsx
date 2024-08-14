import React from 'react';
import Header from '../components/Header';
import BlogPostList from '../components/BlogPostList';
import Sidebar from '../components/Sidebar';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-2/3">
            <BlogPostList />
          </div>
          <div className="md:w-1/3">
            <Sidebar />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;