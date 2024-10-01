import React, { useState } from 'react';
import { PlusIcon, XIcon } from '@heroicons/react/outline';

const MenuAdd: React.FC = () => {
  const [menuItem, setMenuItem] = useState({
    name: '',
    category: '',
    price: '',
    hasSubmenu: false,
    submenu: [{ name: '', price: '' }],
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setMenuItem((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmenuChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const newSubmenu = [...menuItem.submenu];
    newSubmenu[index] = { ...newSubmenu[index], [name]: value };
    setMenuItem((prev) => ({ ...prev, submenu: newSubmenu }));
  };

  const addSubmenu = () => {
    setMenuItem((prev) => ({
      ...prev,
      submenu: [...prev.submenu, { name: '', price: '' }],
    }));
  };

  const removeSubmenu = (index: number) => {
    const newSubmenu = menuItem.submenu.filter((_, i) => i !== index);
    setMenuItem((prev) => ({ ...prev, submenu: newSubmenu }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Menu Item:', menuItem);
    // Reset form after submission
    setMenuItem({
      name: '',
      category: '',
      price: '',
      hasSubmenu: false,
      submenu: [{ name: '', price: '' }],
    });
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-lg font-semibold mb-4">Add Menu Item</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Menu Item Name</label>
          <input
            type="text"
            name="name"
            value={menuItem.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Category</label>
          <select
            name="category"
            value={menuItem.category}
            onChange={handleChange}
            required
            className="mt-1 block w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Category</option>
            <option value="Main Course">Main Course</option>
            <option value="Salad">Salad</option>
            <option value="Pasta">Pasta</option>
            <option value="Pizza">Pizza</option>
            <option value="Dessert">Dessert</option>
            <option value="Beverage">Beverage</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Price</label>
          <input
            type="number"
            name="price"
            value={menuItem.price}
            onChange={handleChange}
            required
            className="mt-1 block w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            name="hasSubmenu"
            checked={menuItem.hasSubmenu}
            onChange={() => setMenuItem((prev) => ({ ...prev, hasSubmenu: !prev.hasSubmenu }))}
            className="mr-2"
          />
          <label className="text-sm font-medium text-gray-700">Add Submenu</label>
        </div>

        {menuItem.hasSubmenu && (
          <div className="mt-4">
            <h3 className="text-md font-semibold mb-2">Submenu Items</h3>
            {menuItem.submenu.map((subItem, index) => (
              <div key={index} className="flex items-center space-x-2 mb-2">
                <input
                  type="text"
                  name="name"
                  placeholder="Submenu Name"
                  value={subItem.name}
                  onChange={(e) => handleSubmenuChange(index, e)}
                  className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <input
                  type="number"
                  name="price"
                  placeholder="Price"
                  value={subItem.price}
                  onChange={(e) => handleSubmenuChange(index, e)}
                  className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <button
                  type="button"
                  onClick={() => removeSubmenu(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  <XIcon className="h-5 w-5" />
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={addSubmenu}
              className="mt-2 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <PlusIcon className="h-5 w-5 mr-2" />
              Add Submenu Item
            </button>
          </div>
        )}

        <button
          type="submit"
          className="mt-4 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        >
          Create Menu Item
        </button>
      </form>
    </div>
  );
};

export default MenuAdd;
