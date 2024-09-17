import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Generate 20 blog posts
const blogPosts = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  title: `Blog Post ${i + 1}`,
  image: `/blog${(i % 6) + 1}.jpg`, // Cycle through 6 images
  date: new Date(2023, 4, 15 - i).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
  readTime: `${Math.floor(Math.random() * 10) + 3} min read`
}));

const POSTS_PER_PAGE = 6;

const Blog: React.FC = () => {
  const [visiblePosts, setVisiblePosts] = useState(POSTS_PER_PAGE);

  const loadMore = () => {
    setVisiblePosts(prevVisible => Math.min(prevVisible + POSTS_PER_PAGE, blogPosts.length));
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence>
          {blogPosts.slice(0, visiblePosts).map((post) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105"
            >
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{post.title}</h2>
                <div className="flex justify-between items-center text-sm text-gray-600 dark:text-gray-400 mb-4">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
                <a 
                  href={`/blog/${post.id}`}
                  className="inline-block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
                >
                  Read more
                </a>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      {visiblePosts < blogPosts.length && (
        <div className="text-center mt-12">
          <button
            onClick={loadMore}
            className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Load More
          </button>
        </div>
      )}
      </>
  );
};

export default Blog;
