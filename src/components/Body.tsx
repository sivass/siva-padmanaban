import React from 'react';
import Blog from './Blog';
import AboutSection from './AboutSection';
import ProjectsSection from './ProjectsSection';
import ContactSection from './ContactSection';

const projects = [
  { id: 1, title: 'Project 1', image: '/project1.jpg' },
  { id: 2, title: 'Project 2', image: '/project2.jpg' },
  { id: 3, title: 'Project 3', image: '/project3.jpg' },
  { id: 4, title: 'Project 4', image: '/project4.jpg' },
];

const Body: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* First column: Blog posts */}
        <div className="lg:col-span-2 space-y-8">
          <h2 className="text-2xl font-bold mb-4">Latest Blog Posts</h2>
          <Blog />
        </div>

        {/* Second column: About, Projects, Contact */}
        <div className="space-y-8">
          <AboutSection />
          <ProjectsSection />
          <ContactSection />
        </div>
      </div>
    </div>
  );
};

export default Body;
