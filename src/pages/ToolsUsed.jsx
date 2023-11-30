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

const categories = [...new Set(skillsData.map((skill) => skill.category))];

export { skillsData, categories };