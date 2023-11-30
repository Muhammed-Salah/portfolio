import React from 'react';
import pic from '/assets/Half pic.jpg';

const AboutMe = () => {
    return (
        <div className="flex flex-col-reverse sm:flex-row items-center sm:items-start p-8 pt-0">
            <div className="sm:w-3/5 sm:mr-8">
                <p className="text-lg mt-4">
                Hi, I'm <span className='text-secondary'>Muhammed Salah K&nbsp;T</span>, a dynamic software developer with a strong foundation in C/C++, Python, and expertise in React, PHP-Laravel, HTML, CSS, and MySQL. I've played a pivotal role at PIKIT LLP, contributing to the maintenance of a food delivery app and leading impactful projects like developing a website for a Blood Donors organization. My passion extends to graphic design—crafting compelling posters, flyers, brochures, and logos. Beyond coding and design, I'm also a mentor, running Python tuition sessions and guiding others in web development.
                <br></br><br></br>
                In addition to my tech journey, I'm on a learning path exploring Psychology, NLP, Hypnosis, Enneagram, and CBT. Join me at the intersection of technology and creativity, where I continue to push boundaries and make a meaningful impact. Let's create something extraordinary together!
                </p>
            </div>

            <div className="sm:w-2/5 sm:flex">
                <img
                    src={pic}
                    alt="Your Name"
                    className="w-72 h-96 object-cover rounded-md m-auto"
                />
            </div>
        </div>

    );
};

export default AboutMe;
