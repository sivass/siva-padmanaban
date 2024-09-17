import React from 'react';

const projects = [
  { id: 1, title: 'Project 1', image: '/project1.jpg' },
  { id: 2, title: 'Project 2', image: '/project2.jpg' },
  { id: 3, title: 'Project 3', image: '/project3.jpg' },
  { id: 4, title: 'Project 4', image: '/project4.jpg' },
];

const ProjectsSection: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 transition-all duration-300 hover:shadow-xl">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Projects</h2>
      <div className="grid grid-cols-2 gap-4">
        {projects.map((project) => (
          <div key={project.id} className="bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105">
            <img src={project.image} alt={project.title} className="w-full h-32 object-cover" />
            <div className="p-2">
              <h3 className="text-sm font-semibold text-gray-800 dark:text-white">{project.title}</h3>
            </div>
          </div>
        ))}
      </div>
      <a href="/projects" className="mt-4 inline-block text-blue-500 hover:text-blue-600 font-medium transition-colors duration-300">
        View all projects →
      </a>
    </div>
  );
};

export default ProjectsSection;
