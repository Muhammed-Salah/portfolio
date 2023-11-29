import React from 'react';

const AboutMe = () => {
    return (
        <div className="flex flex-col-reverse sm:flex-row items-center sm:items-start p-8">
            <div className="sm:w-3/5 sm:mr-8">
                <p className="text-lg mt-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                    facilisi. Vestibulum eget scelerisque ex. Proin tincidunt rhoncus
                    quam, sed dignissim elit ultricies in. Integer at pharetra libero.
                    Duis auctor hendrerit mauris, ac viverra dolor fermentum sit amet.
                    Fusce facilisis, arcu a malesuada luctus, lectus leo ultricies
                    dolor, vel mattis elit elit sit amet elit.
                    <br></br>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                    facilisi. Vestibulum eget scelerisque ex. Proin tincidunt rhoncus
                    quam, sed dignissim elit ultricies in. Integer at pharetra libero.
                    Duis auctor hendrerit mauris, ac viverra dolor fermentum sit amet.
                    Fusce facilisis, arcu a malesuada luctus, lectus leo ultricies
                    dolor, vel mattis elit elit sit amet elit.
                </p>
            </div>

            <div className="sm:w-2/5 sm:flex">
                <img
                    src="/src/assets/Half pic.jpg"
                    alt="Your Name"
                    className="w-72 h-96 object-cover rounded-md m-auto"
                />
            </div>
        </div>

    );
};

export default AboutMe;
