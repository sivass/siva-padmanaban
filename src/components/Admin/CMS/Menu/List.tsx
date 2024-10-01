import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';

interface MenuItem {
  id: number;
  name: string;
  category: string;
  price: number;
}

const MenuList: React.FC = () => {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Sample data
  const menuItems: MenuItem[] = [
    { id: 1, name: 'Cheeseburger', category: 'Main Course', price: 8.99 },
    { id: 2, name: 'Caesar Salad', category: 'Salad', price: 7.49 },
    { id: 3, name: 'Spaghetti Carbonara', category: 'Pasta', price: 10.99 },
    { id: 4, name: 'Margherita Pizza', category: 'Pizza', price: 9.99 },
    { id: 5, name: 'Chocolate Cake', category: 'Dessert', price: 4.99 },
    { id: 6, name: 'Lemonade', category: 'Beverage', price: 2.99 },
    { id: 7, name: 'Grilled Salmon', category: 'Main Course', price: 14.99 },
    { id: 8, name: 'Greek Salad', category: 'Salad', price: 6.99 },
    { id: 9, name: 'Fettuccine Alfredo', category: 'Pasta', price: 11.99 },
    { id: 10, name: 'Pepperoni Pizza', category: 'Pizza', price: 10.99 },
  ];

  const filteredItems = menuItems.filter(item => 
    (item.name.toLowerCase().includes(search.toLowerCase()) || 
     item.category.toLowerCase().includes(search.toLowerCase())) &&
    (filter === 'all' || item.category.toLowerCase() === filter)
  );

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const currentItems = filteredItems.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-lg font-semibold mb-4">Menu List</h2>
      <div className="mb-4 flex space-x-4">
        <input
          type="text"
          placeholder="Search menu items..."
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
          <option value="main course">Main Course</option>
          <option value="salad">Salad</option>
          <option value="pasta">Pasta</option>
          <option value="pizza">Pizza</option>
          <option value="dessert">Dessert</option>
          <option value="beverage">Beverage</option>
        </select>
        <a href='/admin/cms/menu/add' className="px-4 py-2 rounded-lg border focus:outline-none focus:ring-2">Add Menu</a>
      </div>

      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {currentItems.map(item => (
            <tr key={item.id}>
              <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{item.category}</td>
              <td className="px-6 py-4 whitespace-nowrap">${item.price.toFixed(2)}</td>
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

export default MenuList;
