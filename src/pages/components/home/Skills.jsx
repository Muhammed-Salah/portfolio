import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { skillsData, categories } from '../../ToolsUsed';

const Skills = () => {
    const maxLinesToShow = 3;
    const [expandedCategories, setExpandedCategories] = useState([]);

    const toggleCategoryExpansion = (category) => {
        setExpandedCategories((prevExpandedCategories) => {
            if (prevExpandedCategories.includes(category)) {
                return prevExpandedCategories.filter((cat) => cat !== category);
            } else {
                return [...prevExpandedCategories, category];
            }
        });
    };

    return (
        <div className='p-14'>
            <div className='container mx-auto'>
                <h1 className="text-4xl font-medium mb-6 text-center">What I use?</h1>
                <div className="flex flex-col lg:flex-row items-center pb-14 justify-center">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                        {categories.map((category, categoryIndex) => (
                            <div key={categoryIndex} className="p-4 text-center rounded-md shadow-md hover:bg-button-hover border-2 border-dashed border-slate-600 hover:border-slate-400 my-2">
                                <h2 className="text-xl font-bold mb-2 text-center">{category}</h2>
                                <div className="flex flex-wrap justify-center">
                                    {skillsData
                                        .filter((skill) => skill.category === category)
                                        .map((skill, index) => (
                                            <div key={index} className={`p-4 text-center rounded-md shadow-md border-2 border-dashed border-slate-900 mx-2 my-2 hover:scale-110 duration-300 ${expandedCategories.includes(category) || index < maxLinesToShow * 2 ? '' : 'hidden'}`}>
                                                <div className="flex items-center justify-center">
                                                    <Icon icon={skill.icon} className="text-5xl text-slate-300" />
                                                </div>
                                                <p className="text-sm mt-2">{skill.name}</p>
                                            </div>
                                        ))}
                                </div>
                                {skillsData.filter((skill) => skill.category === category).length > maxLinesToShow && (
                                    <button
                                        className="text-secondary hover:underline mt-2"
                                        onClick={() => toggleCategoryExpansion(category)}
                                    >
                                        {expandedCategories.includes(category) ? 'View Less' : 'View More'}
                                    </button>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
