import React from 'react';
import { Icon } from '@iconify/react';

const Services = ({isDesktop}) => {
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
    <div className="flex flex-col items-center p-14">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-stroke">What I do?</h1>
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
        
    {/* <div className="flex flex-col lg:flex-row items-center p-14 gap-4">
    <div className="lg:w-1/2">
        <h1 className="text-5xl font-bold mb-6 text-stroke">What I do?</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
            {servicesData.map((service, index) => (
                <div key={index} className="p-4 text-center rounded-md shadow-md hover:bg-button-hover border-2 border-dashed border-slate-600 hover:border-slate-400">
                    <div className="flex items-center justify-center mb-2">
                        <Icon icon={service.icon} className="text-5xl text-slate-300" />
                    </div>
                    <h2 className="text-xl font-bold mb-2 text-center">{service.title}</h2>
                    <p className="text-sm text-gray-600 text-center">{service.description}</p>
                </div>
            ))}
        </div>
    </div>
    <div className="lg:w-1/2 mt-8 lg:mt-0">
        <div className="p-4 rounded-md shadow-md hover:bg-button-hover border-2 border-dashed border-slate-600 hover:border-slate-400">
            <h2 className="text-2xl font-bold mb-4">Unleash the Power of Your Brand's Visual Identity!</h2>
            <p className="text-md text-gray-600">
                Hello, I'm Salah, a versatile web developer and creative graphic designer. With 2 years of Laravel expertise and 4 years in Adobe Creative Cloud, I've collaborated with impactful organizations like Blood Donors Kerala - Qatar, Raking, and startups, shaping their digital presence. Let's enhance your brand's narrative with captivating web solutions and visually compelling designs!
            </p>
        </div>
    </div>
    </div> */}
    </div>
  );
};

export default Services;
