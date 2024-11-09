import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#333338] text-gray-300 py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-between mb-8">
                    <div className="flex items-center space-x-4">
                        <span className="text-white font-semibold text-lg">List your Show</span>
                        <span className="text-gray-400">Got a show, event, activity or a great experience? Partner with us & get listed on BookMyShow</span>
                    </div>
                    <button className="bg-[#EC5E71] text-white py-2 px-4 rounded mt-4 md:mt-0">
                        Contact today!
                    </button>
                </div>

                <div className="flex justify-center space-x-10 lg:space-x-20 mb-8 bg-[#404043] p-4 rounded">
                    <div className="text-center">
                        <div className="text-5xl mb-2">👤</div>
                        <p className="text-gray-400">24/7 CUSTOMER CARE</p>
                    </div>
                    <div className="text-center">
                        <div className="text-5xl mb-2">🎟️</div>
                        <p className="text-gray-400">RESEND BOOKING CONFIRMATION</p>
                    </div>
                    <div className="text-center">
                        <div className="text-5xl mb-2">✉️</div>
                        <p className="text-gray-400">SUBSCRIBE TO THE NEWSLETTER</p>
                    </div>
                </div>

                <div className="text-gray-400 mb-8">
                    <section>
                        <h6 className="text-white text-[0.7rem]">MOVIES NOW SHOWING IN JABALPUR</h6>
                        <p className="text-[0.7rem] mb-2">Bhool Bhulaiyaa 3 | Singham Again | Venom: The Last Dance | Amaran | I am Kathalan</p>
                    </section>
                    <section>
                        <h3 className="text-white text-[0.7rem]">UPCOMING MOVIES IN JABALPUR</h3>
                        <p className="text-[0.7rem] mb-2">Chhath Ke Baratiya | Premier League (Chelsea vs Arsenal) | Kanguva | Devaki Nandana Vasudeva | Matka | Naad - The Hard Love | Sun Sajana | Sector 17 | Bhairathi Ranagal | FussClass Dabhade</p>
                    </section>
                    <section>
                        <h3 className="text-white text-[0.7rem]">MOVIES BY GENRE</h3>
                        <p className="text-[0.7rem] mb-2">Drama Movies | Action Movies | Thriller Movies | Adventure Movies | Bollywood Movies | Classic Movies | Devotional Movies | Biography Movies | Mystery Movies | Political Movies</p>
                    </section>
                    <section>
                        <h3 className="text-white text-[0.7rem]">MOVIES BY LANGUAGE</h3>
                        <p className="text-[0.7rem] mb-2">Movies in Hindi | Movies in Bengali | Movies in English | Movies in Nepali | Movies in Kannada | Movies in Sindhi | Movies in Chattisgarhi | Movies in Konkani | Movies in Japanese | Movies in Gujarati</p>
                    </section>
                    <section>
                        <h3 className="text-white text-[0.7rem]">SPORTS EVENTS IN JABALPUR</h3>
                        <p className="text-[0.7rem] mb-2">Running | Kabaddi | Chess | Football | Basketball | Baseball | Boat Race | Bowling | E Sports | Horse Race</p>
                    </section>
                    <section>
                        <h3 className="text-white text-[0.7rem]">PLAYS IN TOP CITIES</h3>
                        <p className="text-[0.7rem] mb-2">Plays in Mumbai | Plays in Delhi-NCR | Plays in Chennai | Plays in Bengaluru | Plays in Hyderabad | Plays in Pune | Plays in Ahmedabad | Plays in Kolkata | Plays in Kochi</p>
                    </section>
                    <section>
                        <h3 className="text-white text-[0.7rem]">ACTIVITIES IN TOP CITIES</h3>
                        <p className="text-[0.7rem] mb-2">Activities in Mumbai | Activities in Delhi-NCR | Activities in Chennai | Activities in Bengaluru | Activities in Hyderabad | Activities in Pune | Activities in Ahmedabad | Activities in Kolkata | Activities in Kochi</p>
                    </section>
                    <section>
                        <h3 className="text-white text-[0.7rem]">MOVIES NOW SHOWING</h3>
                        <p className="text-[0.7rem] mb-2">Bhool Bhulaiyaa 3 | Singham Again | Amaran | Lucky Baskhar | KA (2024) | Bagheera | The House of Dead Horror | Wild Roller Coaster | Prehistoric Adventure | Appudo Ippudo Eppudo</p>
                    </section>
                    <section>
                        <h3 className="text-white text-[0.7rem]">COUNTRIES</h3>
                        <p className="text-[0.7rem] mb-2">Indonesia | Singapore | UAE | Sri Lanka | West Indies</p>
                    </section>
                    <section>
                        <h3 className="text-white text-[0.7rem]">HELP</h3>
                        <p className="text-[0.7rem] mb-2">About Us | Contact Us | Current Opening | Press Release | Press Coverage | Sitemap | FAQs | Terms and Conditions | Privacy Policy</p>
                    </section>
                </div>

                <div className="text-gray-400 mb-8">
                    <h3 className="text-white text-[0.7rem]">BOOKMYSHOW EXCLUSIVES</h3>
                    <p className='text-[0.7rem]'> Lollapalooza India | Superstar | BookAChange | Corporate Vouchers | Gift Cards | List My Show | Offers | Stream | Trailers</p>
                </div>

                <hr className="border-gray-700 my-8" />
                <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
                    <div className="text-white text-xl font-semibold w-full">
                        <img src="//in.bmscdn.com/webin/common/icons/logo.svg" alt="" className="mx-auto block" />
                    </div>
                    <div className="flex justify-center space-x-6 mb-4">
                        {/* Replace # with actual links */}
                        <a href="#" className="text-gray-400 hover:text-white">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white">
                            <i className="fab fa-youtube"></i>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white">
                            <i className="fab fa-pinterest"></i>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white">
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </div>
                </div>

                <div className="text-center px-4 text-gray-400">
                    <p className='text-[0.7rem]'>Copyright 2024 © Bigtree Entertainment Pvt. Ltd. All Rights Reserved.</p>
                    <p className='text-[0.7rem]'>
                        The content and images used on this site are copyright protected and copyrights vest
                        with the respective owners. The usage of the content and images on this website is
                        intended to promote the works and no endorsement of the artist shall be implied.
                        Unauthorized use is prohibited and punishable by law.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
