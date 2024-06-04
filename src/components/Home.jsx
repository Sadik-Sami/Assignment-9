import React, { useContext, useEffect, useState } from 'react';
import bannerImg from '../assets/All Images/P3OLGJ.png'
import Jobs from './Jobs';
import { useLoaderData } from 'react-router-dom';
const Home = () => {
    const applicableJobs = useLoaderData();
    const [applyForJobs, setApplyForJobs] = useState([]);
    useEffect(() => {
            setApplyForJobs(applicableJobs)
    },[applicableJobs])
    const [showMore, setShowMore] = useState(false);
    return (
        <div>
            <section className='md:flex my-container'>
                <div>
                    <h1 className='text-2xl w-full lg:leading-tight sm:text-4xl lg:text-7xl lg:max-w-3xl font-manrope'>One Step Closer To Your <span className='title-text'>Dream Job</span></h1>
                    <p className='font-manrope'>
                        Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
                    </p>
                    <button className='btn-primary'>Get Started</button>
                </div>
                <div>
                    <img src={bannerImg} alt="" />
                </div>
            </section>
            <section className='my-container'>
                <div className='font-manrope text-center space-y-4'>
                    <h1 className='font-extrabold text-5xl'>Job Category List</h1>
                    <p className='text-[#757575] text-md'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div>
                <div className='grid justify-center gap-6 sm:grid-cols-4 mt-12'>
                    <div className='flex flex-col items-center'>
                        <img src="../src/assets/Icons/accounts.png" alt="Accounts & Finance" />
                        <div className='mt-8 space-y-4 text-center'>
                            <h3 className='font-extrabold font-manrope text-[#474747] text-xl'>Accounts & Finance</h3>
                            <small className='text-[#A3A3A3] font-manrope text-center'>1500 jobs available</small>
                        </div>
                    </div>
                    <div className='flex flex-col items-center'>
                        <img src="../src/assets/Icons/business.png" alt="Business Idealist" />
                        <div className='mt-8 space-y-4 text-center'>
                            <h3 className='font-extrabold font-manrope text-[#474747] text-xl'>Business Idealist</h3>
                            <small className='text-[#A3A3A3] font-manrope text-center'>1200 jobs available</small>
                        </div>
                    </div>
                    <div className='flex flex-col items-center'>
                        <img src="../src/assets/Icons/mkt.png" alt="Marketing & Sales" />
                        <div className='mt-8 space-y-4 text-center'>
                            <h3 className='font-extrabold font-manrope text-[#474747] text-xl'>Marketing & Sales</h3>
                            <small className='text-[#A3A3A3] font-manrope text-center'>800 jobs available</small>
                        </div>
                    </div>
                    <div className='flex flex-col items-center'>
                        <img src="../src/assets/Icons/chip.png" alt="Technician" />
                        <div className='mt-8 space-y-4 text-center'>
                            <h3 className='font-extrabold font-manrope text-[#474747] text-xl'>Technician</h3>
                            <small className='text-[#A3A3A3] font-manrope text-center'>600 jobs available</small>
                        </div>
                    </div>
                </div>
            </section>
            <section className='my-container'>
                <div className='font-manrope text-center space-y-4'>
                    <h1 className='font-extrabold text-5xl'>Featured Jobs</h1>
                    <p className='text-[#757575] text-md'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div>
                <div className='grid justify-center gap-6 sm:grid-cols-2 mt-12'>
                    {
                        showMore ? applyForJobs.map((job) => <Jobs job={job} key={job.id}></Jobs>) : applyForJobs.slice(0, 4).map((job) => <Jobs job={job} key={job.id}></Jobs>)
                    }
                </div>
                <div className='flex justify-center items-center mt-32'>
                    <button onClick={() => setShowMore(!showMore)} className='btn-primary'>{showMore ? "Show Less" : "Show More"}</button>
                </div>
            </section>
        </div>
    );
};

export default Home;