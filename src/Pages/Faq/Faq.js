import React from 'react';
import { Link } from 'react-router-dom';

const Faq = () => {
    
    return (
        <div className=''>
            <section className="bg-gray-50 pt-5 text-gray-800">
                <div className="container max-w-5xl px-4 py-12 mx-auto">
                    <div className="grid gap-4 mx-4 sm:grid-cols-12">
                        <div className="col-span-12 sm:col-span-3">
                            <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-sky-600">
                                <h3 className="text-3xl font-semibold">The Best Online Learning Sites and Education Courses for 2022</h3>
                                <Link to='/courses' className='font-bold text text-xl hover:text-sky-500 text-sky-400'>Start Course</Link>
                            </div>
                        </div>
                        <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
                            <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-700">
                                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-sky-600">
                                    <h3 className="text-xl font-semibold tracking-wide">CPA Marketing </h3>
                                    <time className="text-xs tracking-wide uppercase text-gray-400">Dec 2020</time>
                                    <p className="mt-3">The CPA marketing model is an advertising model that consists of a publisher (affiliate), a business (advertiser) and a CPA network (a platform that brings together affiliates who want to earn commissions by promoting products and businesses that want their products promoted).Advertisers typically use a CPA network to find the best affiliate to advertise their product — typically a publisher or influencer who creates related content and has an established</p>
                                </div>
                                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-sky-600">
                                    <h3 className="text-xl font-semibold tracking-wide">Digital Marketing</h3>
                                    <time className="text-xs tracking-wide uppercase text-gray-400">Jul 2019</time>
                                    <p className="mt-3">Digital marketing and inbound marketing are easily confused, and for good reason. Digital marketing uses many of the same tools as inbound marketing—email and online content, to name a few. Both exist to capture the</p>
                                </div>
                                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-sky-600">
                                    <h3 className="text-xl font-semibold tracking-wide">Women's Leadership</h3>
                                    <time className="text-xs tracking-wide uppercase text-gray-400">Jan 2016</time>
                                    <p className="mt-3">Women are powerful agents of change, and the far-reaching benefits of diversity and gender parity in leadership and decision-making are increasingly recognized in all spheres. Still, women continue to be vastly under-represented in decision-making in politics</p>
                                </div>
                                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-sky-600">
                                    <h3 className="text-xl font-semibold tracking-wide">Web Design</h3>
                                    <time className="text-xs tracking-wide uppercase text-gray-400">Jan 2016</time>
                                    <p className="mt-3">Web design refers to the design of websites that are displayed on the internet. It usually refers to the user experience aspects of website development rather than software development. Web design used to be focused on designing websites for desktop browsers; however, since the mid-2010s.</p>
                                </div>
                                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-sky-600">
                                    <h3 className="text-xl font-semibold tracking-wide">Web Development</h3>
                                    <time className="text-xs tracking-wide uppercase text-gray-400">Jan 2016</time>
                                    <p className="mt-3">Web development is the building and maintenance of websites; it's the work that happens behind the scenes to make a website look great, work fast and perform well with a seamless user experience.Web developers,</p>
                                </div>
                                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-sky-600">
                                    <h3 className="text-xl font-semibold tracking-wide">Graphic Design</h3>
                                    <time className="text-xs tracking-wide uppercase text-gray-400">Jan 2016</time>
                                    <p className="mt-3">Graphic design is an ancient craft, dating back past Egyptian hieroglyphs to at least 17,000-year-old cave paintings. It's a term that originated in the 1920s print industry. It continues to cover a range of activities including logo creation. Graphic design in this sense concerns aesthetic appeal and marketing.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Faq;