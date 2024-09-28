import React, { useState, useEffect } from 'react';
import { SearchIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';

interface PostData {
  id: number;
  title: string;
  author: string;
  date: string;
  status: 'draft' | 'published';
}

const Post: React.FC = () => {
  const [posts, setPosts] = useState<PostData[]>([]);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  useEffect(() => {
    // Mock API call - replace with actual data fetching
    const fetchPosts = async () => {
      const response = await new Promise<PostData[]>((resolve) =>
        setTimeout(() => resolve([
          { id: 1, title: 'First Post', author: 'John Doe', date: '2023-04-01', status: 'published' },
          { id: 2, title: 'Second Post', author: 'Jane Smith', date: '2023-04-02', status: 'draft' },
          // ... more posts
        ]), 500)
      );
      setPosts(response);
    };

    fetchPosts();
  }, []);

  const filteredPosts = posts.filter(post =>
    (post.title.toLowerCase().includes(search.toLowerCase()) ||
     post.author.toLowerCase().includes(search.toLowerCase())) &&
    (filter === 'all' || post.status === filter)
  );

  const pageCount = Math.ceil(filteredPosts.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Posts</h1>
      
      <div className="mb-4 flex space-x-4">
        <div className="relative flex-grow">
          <input
            type="text"
            placeholder="Search posts..."
            className="w-full pl-10 pr-4 py-2 rounded-lg border focus:outline-none focus:ring-2"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <SearchIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
        <select
          className="px-4 py-2 rounded-lg border focus:outline-none focus:ring-2"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="published">Published</option>
          <option value="draft">Draft</option>
        </select>
      </div>

      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Author</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {currentPosts.map(post => (
              <tr key={post.id}>
                <td className="px-6 py-4 whitespace-nowrap">{post.title}</td>
                <td className="px-6 py-4 whitespace-nowrap">{post.author}</td>
                <td className="px-6 py-4 whitespace-nowrap">{post.date}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    post.status === 'published' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {post.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <button
          className="flex items-center px-4 py-2 border rounded-md text-sm"
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          <ChevronLeftIcon className="h-5 w-5 mr-2" />
          Previous
        </button>
        <span className="text-sm">
          Page {currentPage} of {pageCount}
        </span>
        <button
          className="flex items-center px-4 py-2 border rounded-md text-sm"
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, pageCount))}
          disabled={currentPage === pageCount}
        >
          Next
          <ChevronRightIcon className="h-5 w-5 ml-2" />
        </button>
      </div>
    </div>
  );
};

export default Post;
