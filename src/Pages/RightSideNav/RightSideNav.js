import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const RightSideNav = () => {
    const categories = useLoaderData([]);
    console.log(categories);

    return (
        <div className='w-full '>

            {/* categories section start  */}
            <div className='bg-gray-100 shadow-lg px-2 py-11 mb-0'>
                <h2 className='company text-center mb-5'>All Category </h2>
                <div>
                    {
                        categories.map(category => <p 
                            className='my-3 hover:text-sky-500'
                            key={category.id}>
                                <Link to={`/course/${category.id}`}>{category.name}</Link>
                            </p>)
                    }
                </div>
            </div>

            {/* categories section end */}

            {/* video section start  */}

            <div className="mt-0 pb-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-2 lg:py-20">
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                    <div>

                    </div>
                    <h2 className="max-w-lg mt-0 font-sans text-3xl font-medium leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">

                        Get Start Your Course
                    </h2>

                </div>
                <div className="">
                    <div className="relative w-full transition-shadow duration-300 hover:shadow-xl">
                        <img
                            className="object-cover w-full h-56 rounded shadow-lg sm:h-64 md:h-80 lg:h-96"
                            src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
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
            </div>
        </div>
    );
};

export default RightSideNav;

