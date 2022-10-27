import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ReactToPdf from "react-to-pdf";
import { FaCopy, FaStar } from "react-icons/fa";




const CourseDetails = () => {
    const courseInfo = useLoaderData();
    const { img, id, name, about, email, phone, duration, price, review } = courseInfo;

    // console.log(courseInfo);

    const ref = React.createRef();
    const options = {
        orientation: 'landscape',
        unit: 'in',
        format: [12, 8]
    };

    return (
        <div ref={ref}>

            <div  style={{ wide: '100px', height: '100vh' }} className="relative flex flex-col-reverse m-5 lg:py-0 lg:flex-col">
                <div className="w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8  lg:max-w-screen-xl">
                    <div className="mb-0 lg:max-w-lg lg:pr-8 xl:pr-6">

                        {/* fdf element  */}
                        <div className='flex'>

                            <ReactToPdf targetRef={ref} filename="div-blue.pdf" options={options} x={.5} y={.5} scale={0.8}>
                                {({ toPdf }) => (

                                    <FaCopy className='text-sky-800 ml-7 mr-5 text-2xl' onClick={toPdf}></FaCopy>

                                )}
                            </ReactToPdf>


                            <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:text-center">
                                {name}
                            </h2>
                        </div>

                        <div className='h-80 overflow-y-auto'>
                            <p className="mb-5 text-base text-gray-700 md:text-lg ">
                                {about}
                            </p>
                        </div>
                        <div className="mt-5">
                            <div className='flex items-center justify-between text-green-500'>
                                <p>Duration: {duration} <small>hours</small></p>
                                <p>Price: ${price} </p>
                                <div className='flex'>
                                <div className='text-yellow-500 flex items-center mr-1'><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar> <FaStar></FaStar><FaStar></FaStar></div>
                                <p className='text-orange-500'> {review} </p>
                                </div>
                            </div>


                        </div>

                        <div className="mt-5 md:flex items-center justify-between text-center md:mb-6 lg:mb-5">
                            <div>
                                <p>Email: {email} </p>
                                <p className='md:ml-[-81px]'>Phone: {phone} </p>
                            </div>
                            <Link
                                to={`/checkout/${id}`}
                                className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-sky-500 hover:bg-sky-700 focus:shadow-outline focus:outline-none"
                            >
                                Get premium access
                            </Link>
                        </div>

                    </div>
                </div>
                <div className="inset-y-0 top-0 right-0  w-full max-w-xl px-4 mx-auto mb-6 md:px-0 lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0">
                    <img
                        className="object-fill w-full h-56 sm:h-64 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-96"
                        src={img}
                        alt=""
                    />
                </div>
            </div>

        </div >
    );
};

export default CourseDetails;

