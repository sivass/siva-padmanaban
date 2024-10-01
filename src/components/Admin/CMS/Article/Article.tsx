import React, { useState, useEffect } from 'react';
import { SearchIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';

interface ArticleData {
  id: number;
  title: string;
  author: string;
  date: string;
  status: 'draft' | 'published';
}

const Article: React.FC = () => {
  const [articles, setArticles] = useState<ArticleData[]>([]);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const ArticlesPerPage = 10;

  useEffect(() => {
    // Mock API call - replace with actual data fetching
    const fetchArticles = async () => {
      const response = await new Promise<ArticleData[]>((resolve) =>
        setTimeout(() => resolve([
          { id: 1, title: 'First Article', author: 'John Doe', date: '2023-04-01', status: 'published' },
          { id: 2, title: 'Second Article', author: 'Jane Smith', date: '2023-04-02', status: 'draft' },
          // ... more Articles
        ]), 500)
      );
      setArticles(response);
    };

    fetchArticles();
  }, []);

  const filteredArticles = articles.filter(Article =>
    (Article.title.toLowerCase().includes(search.toLowerCase()) ||
     Article.author.toLowerCase().includes(search.toLowerCase())) &&
    (filter === 'all' || Article.status === filter)
  );

  const pageCount = Math.ceil(filteredArticles.length / ArticlesPerPage);
  const indexOfLastArticle = currentPage * ArticlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - ArticlesPerPage;
  const currentArticles = filteredArticles.slice(indexOfFirstArticle, indexOfLastArticle);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Articles</h1>
      
      <div className="mb-4 flex space-x-4">
        <div className="relative flex-grow">
          <input
            type="text"
            placeholder="Search Articles..."
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
        <a href='/admin/cms/article/add' className="px-4 py-2 rounded-lg border focus:outline-none focus:ring-2">Add Article</a>
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
            {currentArticles.map(Article => (
              <tr key={Article.id}>
                <td className="px-6 py-4 whitespace-nowrap">{Article.title}</td>
                <td className="px-6 py-4 whitespace-nowrap">{Article.author}</td>
                <td className="px-6 py-4 whitespace-nowrap">{Article.date}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    Article.status === 'published' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {Article.status}
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

export default Article;
