
import React from 'react';
import { Link } from 'react-router-dom';

const CheckOutInfo = ({img}) => {
    return (
        <div className='ml-16 lg:ml-0'>
            <div className="  mb-0 px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
                <div className="relative sm:w-full transition-shadow duration-300 hover:shadow-xl">
                    <img
                        className="object-fill w-full h-56 rounded shadow-lg sm:h-64 md:h-72 "
                        src={img}
                        alt=""
                    />
                    <Link
                        href="/"
                        aria-label="Play Video"
                        className="absolute inset-0 flex items-center justify-center w-full h-full transition-colors duration-300 bg-gray-900 bg-opacity-50 group hover:bg-opacity-25"
                    >
                        <div className="flex items-center justify-center w-16 h-16 transition duration-300 transform bg-gray-100 rounded-full shadow-2xl group-hover:scale-110">
                            <svg
                                className="w-10 text-gray-900"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M16.53,11.152l-8-5C8.221,5.958,7.833,5.949,7.515,6.125C7.197,6.302,7,6.636,7,7v10 c0,0.364,0.197,0.698,0.515,0.875C7.667,17.958,7.833,18,8,18c0.184,0,0.368-0.051,0.53-0.152l8-5C16.822,12.665,17,12.345,17,12 S16.822,11.335,16.53,11.152z" />
                            </svg>
                        </div>
                    </Link>
                </div>
            </div>

            <div className="px-4 w-full mt-0 mx-auto sm:max-w-full md:max-w-full lg:max-w-screen-xl py-6">

                <div className="max-w-lg space-y-3 sm:mx-auto lg:max-w-xl">
                    <div className="flex items-center p-2 transition-colors duration-200 border rounded shadow group hover:bg-deep-purple-accent-400 hover:border-deep-purple-accent-400">
                        <div className="mr-2">
                            <svg
                                className="w-6 h-6 transition-colors duration-200 text-deep-purple-accent-400 group-hover:text-white sm:w-8 sm:h-8"
                                stroke="currentColor"
                                viewBox="0 0 52 52"
                            >
                                <polygon
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    fill="none"
                                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                                />
                            </svg>
                        </div>
                        <span className="text-gray-800 transition-colors duration-200 group-hover:text-white">
                            Milestonee 1 - Lesson 1
                        </span>
                    </div>
                    <div className="flex items-center p-2 transition-colors duration-200 border rounded shadow group hover:bg-deep-purple-accent-400 hover:border-deep-purple-accent-400">
                        <div className="mr-2">
                            <svg
                                className="w-6 h-6 transition-colors duration-200 text-deep-purple-accent-400 group-hover:text-white sm:w-8 sm:h-8"
                                stroke="currentColor"
                                viewBox="0 0 52 52"
                            >
                                <polygon
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    fill="none"
                                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                                />
                            </svg>
                        </div>
                        <span className="text-gray-800 transition-colors duration-200 group-hover:text-white">
                            Milestone 1 - Lesson 2
                        </span>
                    </div>
                    <div className="flex items-center p-2 transition-colors duration-200 border rounded shadow group hover:bg-deep-purple-accent-400 hover:border-deep-purple-accent-400">
                        <div className="mr-2">
                            <svg
                                className="w-6 h-6 transition-colors duration-200 text-deep-purple-accent-400 group-hover:text-white sm:w-8 sm:h-8"
                                stroke="currentColor"
                                viewBox="0 0 52 52"
                            >
                                <polygon
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    fill="none"
                                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                                />
                            </svg>
                        </div>
                        <span className="text-gray-800 transition-colors duration-200 group-hover:text-white">
                            Milestone 1 - Lesson 3
                        </span>
                    </div>
                    <div className="flex items-center p-2 transition-colors duration-200 border rounded shadow group hover:bg-deep-purple-accent-400 hover:border-deep-purple-accent-400">
                        <div className="mr-2">
                            <svg
                                className="w-6 h-6 transition-colors duration-200 text-deep-purple-accent-400 group-hover:text-white sm:w-8 sm:h-8"
                                stroke="currentColor"
                                viewBox="0 0 52 52"
                            >
                                <polygon
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    fill="none"
                                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                                />
                            </svg>
                        </div>
                        <span className="text-gray-800 transition-colors duration-200 group-hover:text-white">
                            Milestone 1 - Lesson 4
                        </span>
                    </div>
                    <div className="flex items-center p-2 transition-colors duration-200 border rounded shadow group hover:bg-deep-purple-accent-400 hover:border-deep-purple-accent-400">
                        <div className="mr-2">
                            <svg
                                className="w-6 h-6 transition-colors duration-200 text-deep-purple-accent-400 group-hover:text-white sm:w-8 sm:h-8"
                                stroke="currentColor"
                                viewBox="0 0 52 52"
                            >
                                <polygon
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    fill="none"
                                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                                />
                            </svg>
                        </div>
                        <span className="text-gray-800 transition-colors duration-200 group-hover:text-white">
                            Milestone 1 - Lesson 5
                        </span>
                    </div>
                    <div className="flex items-center p-2 transition-colors duration-200 border rounded shadow group hover:bg-deep-purple-accent-400 hover:border-deep-purple-accent-400">
                        <div className="mr-2">
                            <svg
                                className="w-6 h-6 transition-colors duration-200 text-deep-purple-accent-400 group-hover:text-white sm:w-8 sm:h-8"
                                stroke="currentColor"
                                viewBox="0 0 52 52"
                            >
                                <polygon
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    fill="none"
                                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                                />
                            </svg>
                        </div>
                        <span className="text-gray-800 transition-colors duration-200 group-hover:text-white">
                            Milestone 1 - Lesson 6
                        </span>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CheckOutInfo;