import React from 'react';

const Home = () => {
    return (
        <div>
            <div className="flex flex-col items-center justify-center px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:pt-32 md:px-0">
                <div className="flex flex-col items-center max-w-2xl md:px-8">
                    <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                        <div>
                            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                                Start Course
                            </p>
                        </div>
                        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                            <span className="relative inline-block">
                                <svg
                                    viewBox="0 0 52 24"
                                    fill="currentColor"
                                    className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                                >
                                    <defs>
                                        <pattern
                                            id="192913ce-1f29-4abd-b545-0fbccfd2b0ec"
                                            x="0"
                                            y="0"
                                            width=".135"
                                            height=".30"
                                        >
                                            <circle cx="1" cy="1" r=".7" />
                                        </pattern>
                                    </defs>
                                    <rect
                                        fill="url(#192913ce-1f29-4abd-b545-0fbccfd2b0ec)"
                                        width="52"
                                        height="24"
                                    />
                                </svg>
                                <span className="relative">Search</span>
                            </span>{' '}
                            Your Course
                        </h2>
                        <p className="text-base text-gray-700 md:text-lg">
                            Start learning from
                            the world's best institutions

                        </p>
                    </div>
                    <form className="flex flex-col items-center w-full mb-4 md:flex-row">
                        <input
                            placeholder="Name"
                            required=""
                            type="text"
                            className="flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-sky-500 focus:outline-none focus:shadow-outline"
                        />
                        <input
                            placeholder="Email"
                            required=""
                            type="text"
                            className="flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-sky-500 focus:outline-none focus:shadow-outline"
                        />
                        <button
                            type="submit"
                            className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-sky-500 hover:bg-sky-500-700 focus:shadow-outline focus:outline-none"
                        >
                            Subscribe
                        </button>
                    </form>
                    <p className="max-w-md mb-10 text-xs text-gray-600 sm:text-sm md:text-center">
                        The world is constantly changing and growing, and so are all the wonderful things to learn in it. From changing perspectives on history and studies of people to the world of deep AI and computer science, there’s more to know than ever before.
                    </p>
                </div>
                <img
                    src="https://kitwind.io/assets/kometa/half-browser.png"
                    className="w-full max-w-screen-sm mx-auto rounded shadow-2xl md:w-auto lg:max-w-screen-md"
                    alt=""
                />
            </div>

        </div>
    );
};

export default Home;