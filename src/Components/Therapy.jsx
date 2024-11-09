import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';
import './Premium.css'; 

const Therapy = () => {
    const Events = [
        {
            name: 'Kisi Ko Btana Mat ft. Anubhav Singh Bassi',
            loc: 'Indira Priyanshi Au',
            img: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAxMSBKYW4gb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00355125-kjfzzlbvvn-portrait.jpg',
        },
        {
            name: 'Laughathon ft. Amit Tandon',
            loc: 'Kamani Auditorium',
            img: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCAxNSBOb3Ygb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00131954-kfsqvpncqw-portrait.jpg',
        },
        {
            name: 'Stand-Up ft. Zakir Khan',
            loc: 'Siri Fort Auditorium',
            img: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCAxNSBOb3Ygb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end:l-image,i-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,lx-15,ly-15,w-50,l-end/et00135461-qwtgywhtju-portrait.jpg',
        },
        {
            name: 'Comic Relief with Kanan Gill',
            loc: 'Phoenix Market City',
            img: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCA2IERlYw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end:l-image,i-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,lx-15,ly-15,w-50,l-end/et00316295-mrlfzkrlas-portrait.jpg',
        },
        {
            name: 'Comedy Central ft. Kenny Sebastian',
            loc: 'The Habitat',
            img: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCA5IE5vdiBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end:l-image,i-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,lx-15,ly-15,w-50,l-end/et00312421-mzmjfachrd-portrait.jpg',
        },
        {
            name: 'Open Mic Night ft. Varun Thakur',
            loc: 'Canvas Laugh Club',
            img: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCA2IERlYw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00393085-smaucushqm-portrait.jpg',
        },
        {
            name: 'Comedy Night ft. Sumukhi Suresh',
            loc: 'JLN Stadium',
            img: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCAxNSBOb3Ygb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end:l-image,i-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,lx-15,ly-15,w-50,l-end/et00373752-fezeeebtyn-portrait.jpg',
        },
    ];
    

    return (
        <div className="w-full text-white mt-8 py-4 px-6">
            <h1 className=' text-lg font-bold' style={{fontSize:'1.6rem', color:'#333333'}}>Laughter Therapy</h1>
            <Swiper
                slidesPerView={4}
                spaceBetween={20}
                navigation
                pagination={{ clickable: true }}
                modules={[Navigation, Pagination]}
                className="mt-6 relative custom-swiper"
            >
                {Events.map((show, index) => (
                    <SwiperSlide key={index} className="rounded-lg overflow-hidden shadow-xl transition-transform duration-300 hover:scale-105">
                        <div style={{ width: '250px', height: '300px', overflow: 'hidden', margin: 'auto', borderRadius: '8px' }}>
                            <img
                                src={show.img}
                                alt={show.name}
                                style={{ width: '250px', height: '300px', objectFit: 'cover' }}
                            />
                        </div>
                        <div className="p-3 text-black text-center">
                            <h3 className="text-lg font-semibold">{show.name}</h3>
                            <p className="text-sm text-gray-400">{show.loc}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Therapy;
