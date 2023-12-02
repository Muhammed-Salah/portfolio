import React, { useState } from 'react';
import ViewProject from './components/projects/ViewProject';
import projects from './projects.json';

const ProjectThumbnail = ({ project, openModal }) => (
  <div
    className="pb-2 rounded-md shadow-md hover:shadow-lg hover:scale-105 duration-300"
    onClick={() => openModal(project)}
  >
    {/* Use the actual image path from the project data */}
    <img
      src={project.imagePath}
      alt={`Project ${project.id}`}
      className="h-60 w-60 object-cover rounded-md"
    />
  </div>
);

const Pagination = ({ currentPage, totalPages, onPrevClick, onNextClick }) => (
  <div className="flex justify-center mt-4">
    <button
      className="bg-primary text-white px-4 py-2 rounded-md mr-2 hover:bg-primary-dark"
      onClick={onPrevClick}
      disabled={currentPage === 1}
    >
      Previous
    </button>
    <span className="text-gray-600">
      Page {currentPage} of {totalPages}
    </span>
    <button
      className="bg-primary text-white px-4 py-2 rounded-md ml-2 hover:bg-primary-dark"
      onClick={onNextClick}
      disabled={currentPage === totalPages}
    >
      Next
    </button>
  </div>
);

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const itemsPerPage = 8;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  const totalProjects = filteredProjects.length;
  // const totalPages = Math.ceil(totalProjects / itemsPerPage);
  // const currentProjects = filteredProjects.slice(startIndex, endIndex);
  const currentProjects = filteredProjects;

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setIsModalOpen(false);
  };

  // const handlePrevClick = () => setCurrentPage(currentPage - 1);
  // const handleNextClick = () => setCurrentPage(currentPage + 1);

  return (
    <div className='p-4'>
      <div className="container mx-auto">
        <h1 className="text-4xl font-medium mb-6 text-center">What I have done?</h1>

        {/* Category filter */}
        <div className="flex justify-center mb-4">
          <button
            className={`mr-2 px-3 py-1 rounded-md ${selectedCategory === 'all' && 'bg-primary text-white'} hover:scale-105 duration-200`}
            onClick={() => setSelectedCategory('all')}
          >
            All
          </button>
          {/* Add buttons for each category */}
          {['Web Development', 'Graphic Designing'].map(category => (
            <button
              key={category}
              className={`mr-2 px-3 py-1 rounded-md ${selectedCategory === category && 'bg-primary text-white'} hover:scale-105 duration-200`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
          {/* Add more buttons for other categories as needed */}
        </div>

        <div className="flex justify-center items-center h-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
            {currentProjects.map(project => (
              <ProjectThumbnail key={project.id} project={project} openModal={openModal} />
            ))}
          </div>
        </div>

        {/* <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPrevClick={handlePrevClick}
          onNextClick={handleNextClick}
        /> */}

        {isModalOpen && selectedProject && (
          <ViewProject closeModal={closeModal} selectedProject={selectedProject} />
        )}
      </div>
    </div>
  );
};

export default Projects;
