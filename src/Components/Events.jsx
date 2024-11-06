import React from 'react';

const Events = () => {
  return (
    <div className='mx-4'>
     <h1 style={{ fontSize: '1.6rem', fontWeight: '600' }}>The Best Of Live Events</h1>
      <div style={{ display: 'flex',  flexWrap: 'wrap' }}>
        <img 
          style={{ width: '200px', margin: '5px' }} 
          src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-NSBFdmVudHM%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/workshop-and-more-web-collection-202211140440.png" 
          alt="Workshop and More" 
        />
        <img 
          style={{ width: '200px', margin: '5px' }} 
          src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-NCBFdmVudHM%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/bmshp-desktop-kids-collection-202404190106.png" 
          alt="Kids Collection" 
        />
        <img 
          style={{ width: '200px', margin: '5px' }} 
          src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-NyBFdmVudHM%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/comedy-shows-collection-202211140440.png" 
          alt="Comedy Shows" 
        />
        <img 
          style={{ width: '200px', margin: '5px' }} 
          src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-NiBFdmVudHM%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/music-shows-collection-202211140440.png" 
          alt="Music Shows" 
        />
      </div>
    </div>
  );
};

export default Events;
