import { useLoaderData } from 'react-router-dom';
import { FaStar } from "react-icons/fa";
import CheckOutInfo from './CheckOutInfo';
import toast from 'react-hot-toast';

const CheckOut = () => {
    const checkoutData = useLoaderData();
    const { img, id, name, duration, price, review } = checkoutData;

    const handleCart = () => {
        toast.success('Congratulation Successfully Access Course')
    }
    return (
        <div>
            <div className='w-full mb-10 mt-2 grid lg:grid-cols-3'>


                <div className="px-2 py-16 col-span-2 lg:ml-20 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">

                    <div className="grid  max-w-md gap-10 row-gap-5 lg:max-w-screen-lg sm:row-gap-10 lg:grid-cols-2 xl:max-w-screen-lg sm:mx-auto">
                        <div className="flex flex-col justify-between p-8 transition-shadow duration-300 bg-white border rounded shadow-sm sm:items-center hover:shadow">
                            <div className="text-center">
                                <div className="text-lg font-semibold">Course structure</div>
                                <div className="flex items-center justify-center mt-2">
                                    <div className="mr-1 text-5xl font-bold">1 Lesson per day</div>
                                </div>
                                <div className="mt-2 space-y-3 ">
                                    <div className="text-gray-700">15 Milestone</div>
                                    <div className="text-gray-700">15 Assignment</div>

                                </div>
                            </div>
                            <div className='w-full'>
                                <a
                                    href="/"
                                    className="inline-flex items-center justify-center w-full h-12 px-6 mt-6 font-medium tracking-wide text-white transition duration-200 bg-sky-500 rounded shadow-md hover:bg-sky-700 focus:shadow-outline focus:outline-none"
                                >
                                    About
                                </a>

                            </div>
                        </div>
                        <div className="relative flex flex-col justify-between p-8 transition-shadow duration-300 bg-white border rounded shadow-sm sm:items-center hover:shadow border-deep-purple-accent-400">
                            <div className="absolute inset-x-0 top-0 flex justify-center -mt-3">
                                <div className="inline-block px-3 py-1 text-xs font-medium tracking-wider text-white uppercase rounded bg-deep-purple-accent-400">
                                    Most Popular
                                </div>
                            </div>
                            <div className="">
                                <div className="text-lg font-semibold">{name}</div>
                                <div className="flex items-center justify-center mt-2">
                                    <div className="mr-1 text-5xl font-bold">
                                        ${price}
                                    </div>

                                </div>
                                <div className="mt-2 space-y-3">
                                    <div className="text-gray-700">Duration: {duration} <small>hour</small> </div>
                                    <div className="text-gray-700">Id: {id}</div>
                                    <div className="text-yellow-500 flex items-center">
                                        <FaStar></FaStar>
                                        <FaStar></FaStar>
                                        <FaStar></FaStar>
                                        <FaStar></FaStar>
                                        <FaStar></FaStar>
                                        <p className="text-gray-700 ml-1">{review}</p>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full'>
                                <button
                                    onClick={handleCart}
                                    className="inline-flex items-center justify-center w-full h-12 px-6 mt-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-green-600 hover:bg-green-700 focus:shadow-outline focus:outline-none"
                                >
                                    Add To Cart
                                </button>

                            </div>
                        </div>

                    </div>
                </div>
                <div>
                    <CheckOutInfo img={img}></CheckOutInfo>
                </div>

            </div>
            
        </div>
    );
};

export default CheckOut;