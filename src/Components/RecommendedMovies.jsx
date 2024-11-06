// src/components/RecommendedMovies.jsx
import React from 'react';

const movies = [
  {
    title: 'Bhool Bhulaiyaa 3',
    type: 'Comedy, Horror',
    imageUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-300,h-400,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ni4yLzEwICAxMjEuMUsgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00353996-apjanrxbau-portrait.jpg'
  },
  {
    title: 'Singham Again',
    type: 'Action, Drama',
    imageUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-300,h-400,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ny8xMCAgOTAuOUsgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00354858-njsmtljekp-portrait.jpg'
  },
  {
    title: 'Amaran',
    type: 'Action, Drama, Thriller',
    imageUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-300,h-400,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS40LzEwICAxMTAuMksgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00388085-szuygyrbqh-portrait.jpg'
  },
  {
    title: 'Venom: The Last Dance',
    type: 'Action, Adventure, Sci-Fi',
    imageUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-300,h-400,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC8xMCAgNTguMksgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00383474-klabltwbvz-portrait.jpg'
  },
];

function RecommendedMovies() {
  return (
    <>
      <div className="my-8 px-4">
        <h2 className="text-2xl font-bold mb-6 text-center md:text-left">Recommended Movies</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {movies.map((movie, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-200 hover:scale-105">
              <img src={movie.imageUrl} alt={movie.title} className="w-full h-64 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{movie.title}</h3>
                <p className="text-gray-500">{movie.type}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="my-10 px-4">
        <img
          src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/stream-leadin-web-collection-202210241242.png"
          alt="Streaming Collection"
          className="w-full rounded-lg shadow-lg"
        />
      </div>
    </>
  );
}

export default RecommendedMovies;
