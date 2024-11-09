// src/components/Premium.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';
import './Premium.css'; 

const Premium = () => {
    const Premiere = [
        {
            name: 'The Defenders',
            language: 'English',
            img: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00393226-jsvqgmqfbt-portrait.jpg',
        },
        {
            name: 'Treasure',
            language: 'English',
            img: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00399961-zkjfrmhmbk-portrait.jpg',
        },
        {
            name: 'Yolo',
            language: 'Mandarin',
            img: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00389476-byhhdpjbpk-portrait.jpg',
        },
        {
            name: 'The Line',
            language: 'English',
            img: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00417711-dbmenxtqnx-portrait.jpg',
        },
        {
            name: 'Transformers One',
            language: 'English',
            img: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00399519-vqwblafcrv-portrait.jpg',
        },
        {
            name: 'Speak No Evil',
            language: 'English',
            img: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00398661-qvhefzbeuc-portrait.jpg',
        },
    ];

    return (
        <div className="w-full bg-[#2B3148] text-white mt-10 py-4 px-6">
            <div className=" mb-4">
                <img src="/premiere.avif" alt="Premieres" className="rounded-lg mb-2 mx-auto" />
                <h1 className="text-2xl font-bold">Premieres</h1>
                <p className="text-sm text-gray-300">Brand new releases every Friday</p>
            </div>

            <Swiper
                slidesPerView={4}
                spaceBetween={20}
                navigation
                pagination={{ clickable: true }}
                modules={[Navigation, Pagination]}
                className="mt-6 relative custom-swiper"
            >
                {Premiere.map((show, index) => (
                    <SwiperSlide key={index} className="rounded-lg overflow-hidden shadow-xl transition-transform duration-300 hover:scale-105">
                        <div style={{ width: '250px', height: '300px', overflow: 'hidden', margin: 'auto', borderRadius: '8px' }}>
                            <img
                                src={show.img}
                                alt={show.name}
                                style={{ width: '250px', height: '300px', objectFit: 'cover' }}
                            />
                        </div>
                        <div className="p-3  text-left">
                            <h3 className="text-lg font-semibold">{show.name}</h3>
                            <p className="text-sm text-gray-400">{show.language}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Premium;
