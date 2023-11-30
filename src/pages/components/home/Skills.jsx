import React from 'react';
import { Icon } from '@iconify/react';
import { skillsData, categories } from '../../ToolsUsed';

const Skills = () => {
  return (
    <div>
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-stroke text-center">What I use?</h1>
        <div className="flex flex-col lg:flex-row items-center px-14 pb-14 gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 ">
            {categories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="p-4 text-center rounded-md shadow-md hover:bg-button-hover border-2 border-dashed border-slate-600 hover:border-slate-400 mx-2 my-2">
                    <h2 className="text-xl font-bold mb-2 text-center">{category}</h2>
                    <div className="flex flex-wrap justify-center">
                        {skillsData
                        .filter((skill) => skill.category === category)
                        .map((skill, index) => (
                            <div key={index} className="p-4 text-center rounded-md shadow-md border-2 border-dashed border-slate-900 mx-2 my-2 hover:scale-110 duration-300">
                                <div className="flex items-center justify-center">
                                    <Icon icon={skill.icon} className="text-5xl text-slate-300" />
                                </div>
                                <p className="text-sm mt-2">{skill.name}</p>
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
