import React from 'react';
import { Icon } from '@iconify/react';

const Skills = () => {
  const skillsData = [
    { name: 'Photoshop', icon: 'logos:adobe-photoshop', category: 'Graphic Designing' },
    { name: 'Illustrator', icon: 'logos:adobe-illustrator', category: 'Graphic Designing' },
    { name: 'InDesign', icon: 'logos:adobe-indesign', category: 'Graphic Designing' },
    { name: 'HTML', icon: 'vscode-icons:file-type-html', category: 'Web Development' },
    { name: 'CSS', icon: 'vscode-icons:file-type-css', category: 'Web Development' },
    { name: 'Bootstrap', icon: 'logos:bootstrap', category: 'Web Development' },
    { name: 'Tailwind', icon: 'logos:tailwindcss-icon', category: 'Web Development' },
    { name: 'JavaScript', icon: 'vscode-icons:file-type-js', category: 'Web Development' },
    { name: 'PHP', icon: 'vscode-icons:file-type-php', category: 'Web Development' },
    { name: 'Laravel', icon: 'logos:laravel', category: 'Web Development' },
    { name: 'React', icon: 'vscode-icons:file-type-reactjs', category: 'Web Development' },
    { name: 'Node.js', icon: 'logos:nodejs', category: 'Web Development' },
    { name: 'MySQL', icon: 'logos:mysql', category: 'Web Development' },
    { name: 'MongoDB', icon: 'vscode-icons:file-type-mongo', category: 'Web Development' },
  ];

  // Get unique categories
  const categories = [...new Set(skillsData.map((skill) => skill.category))];

  return (
    <div>
        <h1 className="text-5xl font-bold mb-6 text-stroke text-center">What I have?</h1>
        <div className="flex flex-col lg:flex-row items-center px-14 pb-14 gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 ">
            {categories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="p-4 text-center rounded-md shadow-md hover:bg-button-hover border-2 border-dashed border-slate-600 hover:border-slate-400 mx-2 my-2">
                    <h2 className="text-xl font-bold mb-2 text-left">{category}</h2>
                    <div className="flex flex-wrap justify-center">
                        {skillsData
                        .filter((skill) => skill.category === category)
                        .map((skill, index) => (
                            <div key={index} className="p-4 text-center rounded-md shadow-md border-2 border-dashed border-slate-900 mx-2 my-2 hover:scale-110 duration-300">
                                <div className="flex items-center justify-center">
                                    <Icon icon={skill.icon} className="text-5xl text-slate-300" />
                                </div>
                                <p className="text-sm text-gray-600 mt-2">{skill.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
            </div>
        </div>
    </div>

  );
};

export default Skills;
