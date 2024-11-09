import React from 'react';

const trendingData = [
    { title: 'Singham Again', category: 'Movies' },
    { title: "McDowell's Soda Yaari Jam Anuv Jain And Zaeden", category: 'Events' },
    { title: 'Maroon 5 India 2024', category: 'Events' },
    { title: 'Bhool Bhulaiyaa 3', category: 'Movies' },
    { title: 'Pushpa: The Rule - Part 2', category: 'Movies' },
    { title: 'Lucky Bhaskar', category: 'Movies' },
    { title: "MARTIN GARRIX - World's Biggest Holi", category: 'Events' },
    { title: 'Amaran', category: 'Movies' },
    { title: 'HUMARE RAM Ft Ashutosh Rana and Rahul R Bhuchar', category: 'Plays' },
    { title: 'Venom: The Last Dance', category: 'Movies' },
];

const TrendingSearch = () => {
    return (
        <div className="w-full p-6 bg-gray-100 text-gray-800">
            <h2 className="text-2xl font-bold mb-4 text-gray-700">Trending Searches Right Now</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {trendingData.map((item, index) => (
                    <div
                        key={index}
                        className="p-4 bg-white rounded-lg shadow-md text-center transition-transform transform hover:scale-105 cursor-pointer"
                    >
                        <span className="block text-pink-700 font-semibold text-lg mb-1">{item.title}</span>
                        <span className="text-sm text-gray-600">{item.category}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TrendingSearch;
