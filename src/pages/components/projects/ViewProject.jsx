import React, { useEffect, useState } from 'react';

const ViewProject = ({ closeModal, selectedProject }) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(true);
  }, []);

  const handleClose = () => {
    setIsActive(false);
    setTimeout(() => closeModal(), 300);
  };

  const handleOverlayClick = (e) => {
    // Close the modal only if the click is on the overlay
    if (e.target.classList.contains('overlay')) {
      handleClose();
    }
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-black pt-32 bg-opacity-50 ${isActive ? 'active' : ''} overlay`}
      onClick={handleOverlayClick}
    >
      <div className={`bg-primary p-4 rounded-md duration-300 scale-${isActive ? '100' : '0'}`} style={{ display: 'flex' }}>
        {/* Left side (image) */}
        <div className="mr-4">
          <img
            src={selectedProject.imagePath}
            alt={`Project ${selectedProject.name}`}
            style={{ width: '200px', height: 'auto', marginBottom: '16px' }}
          />
        </div>

        {/* Right side (title, description, buttons) */}
        <div>
          <button className="absolute top-2 right-2" onClick={handleClose}>
            &#10006;
          </button>
          <h2 className="text-2xl font-bold mb-4">{selectedProject.name}</h2>
          <p className="text-md mb-4">{selectedProject.description}</p>

          {/* Buttons */}
          {selectedProject.github && (
            <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="bg-primary text-white px-4 py-2 rounded-md mr-2 hover:bg-primary-dark">
              GitHub Repo
            </a>
          )}

          {selectedProject.website && (
            <a href={selectedProject.website} target="_blank" rel="noopener noreferrer" className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark">
              Visit Website
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewProject;
