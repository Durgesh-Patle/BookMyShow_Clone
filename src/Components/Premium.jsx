import React from 'react';

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
            name: 'Speek No Evil',
            language: 'English',
            img: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00398661-qvhefzbeuc-portrait.jpg',
        },
        {
            name: 'The exocism',
            language: 'English',
            img: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00397455-zspcesjcyb-portrait.jpg',
        },
        {
            name: 'The Great Escaper',
            language: 'English',
            img: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00393536-qemhuxjrph-portrait.jpg',
        },
        {
            name: 'Abb To Sab Bhagwan bharose',
            language: 'English',
            img: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00370489-unxypwbqex-portrait.jpg',
        },
        {
            name: 'Starnge Darling',
            language: 'English',
            img: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00405555-ttqjkjhkks-portrait.jpg',
        },
    ];

    return (
        <div style={{ width: '100%', backgroundColor: '#2B3148', color: 'white',marginTop:'5%' }}>
            <div style={{ padding: '14px' }}>
                <img src="/premiere.avif" alt="Premieres" style={{ borderRadius: '8px' }} />
                <h1 style={{fontSize:'1.8rem'}}>Premieres</h1>
                <p>Brand new releases every Friday</p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(190px, 1fr))', gap: '40px', marginTop:'3%'}}>
                    {Premiere.map((show, index) => (
                        <div key={index} style={{ borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
                            <img src={show.img} alt={show.name} style={{ width: '100%', height: 'auto' }} />
                            <div style={{ padding: '10px' }}>
                                <h3>{show.name}</h3>
                                <p>{show.language}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Premium;
