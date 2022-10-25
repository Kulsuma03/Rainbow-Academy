import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const courseInfo = useLoaderData();
    const { img, name, about, email, phone, duration, price, review } = courseInfo
    console.log(courseInfo);
    return (
        <div>
            <div className="relative flex flex-col-reverse m-5 lg:py-0 lg:flex-col">
                <div className="w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8  lg:max-w-screen-xl">
                    <div className="mb-0 lg:max-w-lg lg:pr-8 xl:pr-6">
                        <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:text-center">
                            {name}
                        </h2>
                        <div className='h-80 overflow-y-auto'>
                            <p className="mb-5 text-base text-gray-700 md:text-lg md:text-center">
                                {about}
                            </p>
                        </div>
                        <div className="mt-5">
                            <div className='flex items-center justify-between text-green-500'>
                            <p> {duration} <small>hours</small></p>
                            <p> {price} </p>
                            <p className='text-orange-500'> {review} </p>
                            </div>
                            <div>
                            <p>Email: {email} </p>
                            <p>Phone: {phone} </p>
                            </div>

                        </div>
                        <div className="mt-5 text-center md:mb-6 lg:mb-5">
                            <Link
                                to="/"
                                className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-sky-500 hover:bg-sky-700 focus:shadow-outline focus:outline-none"
                            >
                                Buy Now
                            </Link>
                        </div>

                    </div>
                </div>
                <div className="inset-y-0 top-0 right-0 w-full max-w-xl px-4 mx-auto mb-6 md:px-0 lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0">
                    <img
                        className="object-fill w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
                        src={img}
                        alt=""
                    />
                </div>
            </div>

        </div>
    );
};

export default CourseDetails;

