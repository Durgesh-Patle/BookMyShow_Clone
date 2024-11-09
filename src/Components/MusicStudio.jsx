import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';
import './Premium.css'; 

const MusicStudio = () => {
    const musicStudio = [
        {
            name: 'Piyush Mishra -UdhanKhatola Tour -Indore',
            loc: 'The Park: Indore Concerts',
            img: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAzMCBOb3Y%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00412541-uhugfwxscq-portrait.jpg',
        },
        {
            name: 'Shillong Cherry Blossom Festival 2024',
            loc: 'RBDSA Sports Complex: Shilong Concerts',
            img: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCAxNSBOb3Ygb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00410180-umabuntbvh-portrait.jpg',
        },
        {
            name: 'bandland 2024 ft. A7X, Exterme, Bloodywood ....',
            loc: 'Nice Grounds, BISC: Bengluru Concerts',
            img: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAyMyBOb3Ygb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00406791-njvcryufzg-portrait.jpg',
        },
        {
            name: 'Lollaplooza India 2025',
            loc: 'Mumbai Concerts',
            img: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCA4IE1hciBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00409511-tlsbwzbnhl-portrait.jpg',
        },
        {
            name: 'The Under 25 Summit',
            loc: 'Royal Plams:Pune Food',
            img: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAzMCBOb3Y%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00412000-qsmhybpmug-portrait.jpg',
        },
        {
            name: 'maroon 5 India 2025',
            loc: 'Mahalaxmii race Cource.... Concerts',
            img: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VHVlLCAzIERlYw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00417872-yybdxenhcc-portrait.jpg',
        },
        {
            name: 'TVS MotoSoul 2024',
            loc: 'Hilltop Vagator: Goa Concerts',
            img: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCA2IERlYw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00418508-azlefvkppp-portrait.jpg',
        },
    ];

    return (
        <div className="w-full text-white mt-10 py-4 px-6">
            <h1 className='text-lg font-bold' style={{fontSize:'1.5rem',color:'#333333'}}>Your Music Studio</h1>
            <Swiper
                slidesPerView={4}
                spaceBetween={20}
                navigation
                pagination={{ clickable: true }}
                modules={[Navigation, Pagination]}
                className="mt-6 relative custom-swiper"
            >
                {musicStudio.map((show, index) => (
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

export default MusicStudio;
