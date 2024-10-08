import React, { useState } from 'react';
import { PlusIcon } from '@heroicons/react/outline';

interface AddArticleData {
  title: string;
  content: string;
  author: string;
  status: 'draft' | 'published';
}

const AddArticle: React.FC = () => {
  const [article, setArticle] = useState<AddArticleData>({
    title: '',
    content: '',
    author: '',
    status: 'draft'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setArticle({ ...article, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Saving new Article:', article);
    setArticle({ title: '', content: '', author: '', status: 'draft' });
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-sm">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">Create Article</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={article.title}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 text-xl border-b border-gray-300 focus:border-blue-500 focus:outline-none transition duration-300"
        />
        <textarea
          name="content"
          placeholder="Write your Article content here..."
          rows={8}
          value={article.content}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 text-lg border-b border-gray-300 focus:border-blue-500 focus:outline-none transition duration-300 resize-none"
        ></textarea>
        <div className="flex space-x-4">
          <input
            type="text"
            name="author"
            placeholder="Author"
            value={article.author}
            onChange={handleChange}
            required
            className="flex-1 px-4 py-2 border-b border-gray-300 focus:border-blue-500 focus:outline-none transition duration-300"
          />
          <select
            name="status"
            value={article.status}
            onChange={handleChange}
            className="px-4 py-2 border-b border-gray-300 focus:border-blue-500 focus:outline-none transition duration-300 bg-white"
          >
            <option value="draft">Draft</option>
            <option value="published">Published</option>
          </select>
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-300 flex items-center"
          >
            <PlusIcon className="h-5 w-5 mr-2" />
            Create Article
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddArticle;