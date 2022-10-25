import React from 'react';
import { Link } from 'react-router-dom';

const Course = ({ course }) => {
    const { id, name, img } = course;

    return (
        <div className="transition duration-300 transform bg-gray-300 rounded shadow-sm hover:-translate-y-1 hover:shadow md:text-center">
            <div className="relative">
                <img
                    className=" object-fill w-full h-60 rounded-t lg:h-60 xl:h-80"
                    src={img}
                    alt=""
                />
                <div className="absolute inset-0 bg-gray-800 bg-opacity-25" />
            </div>
            <div className="py-2 border border-t-0 rounded-b sm:px-8">
                <h5 className="mb-2  font-medium leading-none ">
                    {name}
                </h5>
                <Link to={`/course/${id}`}>
                    <button

                        className=" w-full h-12  font-medium tracking-wide  text-white transition duration-200 rounded shadow-md bg-sky-500 hover:bg-sky-700 focus:shadow-outline focus:outline-none"
                    >
                        Details
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Course;