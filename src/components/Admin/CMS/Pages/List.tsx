import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';

interface Page {
  id: number;
  title: string;
  category: string;
  date: string;
}

const PageList: React.FC = () => {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Sample data
  const pages: Page[] = [
    { id: 1, title: 'Introduction to React', category: 'Tutorial', date: '2023-01-01' },
    { id: 2, title: 'Understanding JavaScript', category: 'Article', date: '2023-02-15' },
    { id: 3, title: 'CSS Flexbox Guide', category: 'Tutorial', date: '2023-03-10' },
    { id: 4, title: 'Building a REST API', category: 'Guide', date: '2023-04-05' },
    { id: 5, title: 'SEO Best Practices', category: 'Article', date: '2023-05-20' },
    { id: 6, title: 'Advanced React Patterns', category: 'Tutorial', date: '2023-06-15' },
    { id: 7, title: 'Understanding TypeScript', category: 'Article', date: '2023-07-01' },
    { id: 8, title: 'Web Accessibility Guidelines', category: 'Guide', date: '2023-08-10' },
    { id: 9, title: 'Introduction to GraphQL', category: 'Tutorial', date: '2023-09-05' },
    { id: 10, title: 'JavaScript ES6 Features', category: 'Article', date: '2023-10-20' },
  ];

  const filteredPages = pages.filter(page =>
    (page.title.toLowerCase().includes(search.toLowerCase()) || 
     page.category.toLowerCase().includes(search.toLowerCase())) &&
    (filter === 'all' || page.category.toLowerCase() === filter)
  );

  const totalPages = Math.ceil(filteredPages.length / itemsPerPage);
  const currentItems = filteredPages.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-lg font-semibold mb-4">Page List</h2>
      <div className="mb-4 flex space-x-4">
        <input
          type="text"
          placeholder="Search pages..."
          className="flex-grow pl-4 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All Categories</option>
          <option value="tutorial">Tutorial</option>
          <option value="article">Article</option>
          <option value="guide">Guide</option>
        </select>
        <a href='/admin/cms/pages/add' className="px-4 py-2 rounded-lg border focus:outline-none focus:ring-2">Add Page</a>
      </div>

      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {currentItems.map(page => (
            <tr key={page.id}>
              <td className="px-6 py-4 whitespace-nowrap">{page.title}</td>
              <td className="px-6 py-4 whitespace-nowrap">{page.category}</td>
              <td className="px-6 py-4 whitespace-nowrap">{page.date}</td>
            </tr>
          ))}
        </tbody>
      </table>

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
          Page {currentPage} of {totalPages}
        </span>
        <button
          className="flex items-center px-4 py-2 border rounded-md text-sm"
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Next
          <ChevronRightIcon className="h-5 w-5 ml-2" />
        </button>
      </div>
    </div>
  );
};

export default PageList;
