import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';
import RightSideNav from '../RightSideNav/RightSideNav';

const Courses = () => {
    const courses = useLoaderData([]);
    // console.log(courses);
    return (
        <div className="lg:grid grid-cols-4 block gap-4">
            
            <div className="px-4 py-16 col-span-3 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="grid max-w-screen-lg gap-8 row-gap-5 md:row-gap-8 sm:mx-auto lg:grid-cols-3">
                    {
                        courses.map(course => <Course
                            key={course.id}
                            course={course}
                        ></Course>)
                    }

                </div>
            </div>
            <div >
                <RightSideNav></RightSideNav>
            </div>
        </div >
    );
};

export default Courses;

