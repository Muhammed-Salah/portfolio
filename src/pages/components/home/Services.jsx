import React from 'react';
import { Icon } from '@iconify/react';

const Services = ({ isDesktop }) => {
  const servicesData = [
    {
      title: 'Web Developer',
      icon: 'mdi-language-html5',
      description: 'Experience with Laravel, MERN stack, etc.',
    },
    {
      title: 'Graphic Designer',
      icon: 'iconoir:design-nib-solid',
      description: 'Designing posters, flyers, brochures, logos, etc.',
    },
    {
      title: 'Mentor',
      icon: 'basil:user-outline',
      description: 'Running Python tuition, mentoring in web development, graphic designing.',
    },
    {
      title: 'Psyche Learner',
      icon: 'fluent:brain-circuit-20-regular',
      description: 'Learning Psychology, NLP, Hypnosis, Enneagram, CBT.',
    },
  ];

  return (
    <div className="p-14">
      <div className='container mx-auto flex flex-col items-center'>
        <h1 className="text-4xl sm:text-4xl font-medium mb-6">What I do?</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {servicesData.map((service, index) => (
            <div key={index} className="p-4 text-center rounded-md shadow-md hover:bg-button-hover border-2 border-dashed border-slate-600 hover:border-slate-400 hover:scale-105 duration-300">
              <div className="flex items-center justify-center mb-2">
                <Icon icon={service.icon} className="text-5xl text-slate-300" />
              </div>
              <h2 className="text-xl font-bold mb-2 text-center">{service.title}</h2>
              <p className="text-sm text-gray-600 text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Services;
