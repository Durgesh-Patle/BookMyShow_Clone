import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';
import './Premium.css'; 

const OutDoorEvents = () => {
    const Events = [
        {
            name: 'Piyush Mishra -UdhanKhatola Tour -Indore',
            loc: 'The Park: Indore',
            img: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAzMCBOb3Y%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00412541-uhugfwxscq-portrait.jpg',
        },
        {
            name: 'Dropout ft. Haseeb khan',
            loc: 'Jaamun: Jabalpur',
            img: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCA2IERlYw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00393085-smaucushqm-portrait.jpg',
        },
        {
            name: 'Chaess Compionship (Online) For All Page',
            loc: 'Your Place And Your Time : India',
            img: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAxNyBOb3Y%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00415966-lxjjzlzwse-portrait.jpg',
        },
        {
            name: 'Solve The Robicks Cube, Sharpen 6 vital Skills',
            loc: 'happy Skills Events: Ghatkopur',
            img: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAxMCBOb3Y%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00361252-jsvsxfdquu-portrait.jpg',
        },
        {
            name: 'International film festival of India (IFFI)',
            loc: 'Multiple Venus:India',
            img: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-V2VkLCAyMCBOb3Y%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00417392-zlgcurkawy-portrait.jpg',
        },
        {
            name: 'Spartan 10km marathon Get Unique Design Medal.....',
            loc: 'Your Place And Your Time : India',
            img: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAxIERlYyBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00323819-gfyucrjbge-portrait.jpg',
        },
        {
            name: 'Run For Fitness maraThon Get India s Biggest Medal..',
            loc: 'Your Place And Your Time : India',
            img: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAyNCBOb3Ygb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00342542-kjefhywnut-portrait.jpg',
        },
        {
            name: 'Magic Beans, The Wonderfull World for jully',
            loc: 'Online: Streanming',
            img: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VHVlLCAxMiBOb3Ygb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00131524-rdxrjfzglw-portrait.jpg',
        },
        {
            name: 'Kids Chess Championship (Online)',
            loc: 'Your Place And Your Time : India',
            img: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAxNiBOb3Y%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00417515-mazhlmhqqd-portrait.jpg',
        },
    ];

    return (
        <div className="w-full text-white mt-8 py-4 px-6">
            <h1 className=' text-lg font-bold' style={{fontSize:'1.6rem', color:'#333333'}}>Oudoor Events</h1>
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

export default OutDoorEvents;
