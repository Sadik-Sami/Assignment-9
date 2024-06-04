import React, { useEffect, useState } from 'react';
import data from '../../public/applyJobs.json'
import dateIcon from "../assets/Icons/date.png";
import phoneIcon from "../assets/Icons/phone.png"
import dollarIcon from "../assets/Icons/dollar.png";
import mapIcon from "../assets/Icons/map.png"
import emailIcon from "../assets/Icons/email.png"
import { Link, useParams } from 'react-router-dom';
import { addToDb, checkStatus } from '../utilities/fakedb';


const JobDetails = () => {
    const { id } = useParams();
    const [job, setJob] = useState({})
    useEffect(() => {
        if (data) {
            const foundJobDetails = data.find(sJob => sJob.id === parseInt(id))
            setJob(foundJobDetails);
        }
    }, [id])
    const handleApplyToJob = (id) => {
        addToDb(id);
    }
    const checkAdd = checkStatus(job.id);


    return (
        <div>
            <div className='bg-header-texture bg-auto h-56 bg-no-repeat flex justify-center items-center'>
                <h1 className='text-4xl font-manrope font-bold'>Job Details</h1>
            </div>
            <div className='grid grid-cols-3 my-container gap-x-8'>
                <div className='col-span-2'>
                    <div className='space-y-4'>
                        <p className='font-manrope text-[#757575]'><span className='font-bold text-black'>Job Description: </span>A UI/UX (User Interface/User Experience) designer is responsible for designing and creating engaging and effective interfaces for software and web applications. This includes designing the layout, visual design, and interactivity of the user interface.</p>
                        <p className='font-manrope text-[#757575]'><span className='font-bold text-black'>Job Responsibility:</span> Collaborating with cross-functional teams: UI/UX designers often work closely with other teams, including product management, engineering, and marketing, to ensure that the user interface is aligned with business and technical requirements. You will need to be able to effectively communicate your design ideas and gather feedback from other team members.</p>
                        <p className='font-manrope text-[#757575]'><span className='font-bold text-black'>Educational Requirements:</span><br />Bachelor degree to complete any reputational university.</p>
                        <p className='font-manrope text-[#757575]'><span className='font-bold text-black'>Experiences:</span><br />2-3 Years in this field</p>
                    </div>
                </div>

                <div>
                    <h2 className='font-manrope font-extrabold text-xl'>Job Details</h2>
                    <div className='h-[1px] bg-gray-300 my-4' />
                    <div className='font-manrope space-y-2 mb-8'>
                        <p className='flex gap-2'><img src={dollarIcon} alt="" /><span className='font-extrabold'>salary:</span> {job.salary}</p>
                        <p className='flex gap-2'><img src={dateIcon} alt="" /><span className='font-extrabold'>Job Title:</span> {job.title}</p>
                    </div>
                    <h2 className='font-manrope font-extrabold text-xl'>Contact Information</h2>
                    <div className='h-[1px] bg-gray-300 my-4' />
                    <div className='font-manrope space-y-2'>
                        <p className='flex gap-2'><img src={phoneIcon} alt="" /><span className='font-extrabold'>phone:</span> 01750-00 00 00</p>
                        <p className='flex gap-2'><img src={emailIcon} alt="" /><span className='font-extrabold'>email:</span>  info@gmail.com</p>
                        <p className='flex gap-2'><img src={mapIcon} alt="" /><span className='font-extrabold'>adress:</span> {job.location}</p>
                    </div>
                    <Link to="/">
                        <button onClick={() => handleApplyToJob(id)} className='btn-primary w-full mt-8'>{checkAdd ? "Already Applied" : "Apply Now"}</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;