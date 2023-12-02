import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { skillsData } from '../../ToolsUsed';
import { Icon } from '@iconify/react';

const ToolsSlideshow = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 8,
        slidesToScroll: 1,
        autoplay: true,
        speed: 10000,
        autoplaySpeed: 0,
        pauseOnHover: true,
        initialSlide: 0,
        prevArrow: <></>,
        nextArrow: <></>,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1350,
                settings: {
                    slidesToShow: 7,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="p-10 relative">
            <h1 className="text-4xl sm:text-4xl  font-medium mb-10 text-center">What I Use?</h1>
            <div className="relative h-14">
                <Slider {...settings}>
                    {skillsData.map((tools) => (
                        <div key={tools.name} className="overflow-hidden px-1">
                            <Icon icon={tools.icon} className='text-4xl'/>
                        </div>
                    ))}
                </Slider>
                <div className="absolute inset-0 linear-gradient pointer-events-none" />
            </div>
        </div>
    );
}

export default ToolsSlideshow