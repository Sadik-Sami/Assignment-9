import React from 'react';
import { Link } from 'react-router-dom';
import dollarIcon from "../assets/Icons/dollar.png";
import mapIcon from "../assets/Icons/map.png";

const AppliedJobsCard = ({ job }) => {
    const { company, job_type, location, salary, logo, id, title, type } = job;
    return (
        <div className='flex items-center justify-between'>
            <div className='flex items-center'>
                <img src={logo} className='w-60' alt="" />
                <div>
                    <h1 className='font-manrope text-Dark_02 font-extrabold text-2xl'>{title}</h1>
                    <h3 className='font-manrope text-Dark_03 font-semibold text-2xl'>{company}</h3>
                    <div className='space-x-2'>
                        <button className='btn-outlined'>{job_type}</button>
                        <button className='btn-outlined'>{type}</button>
                    </div>
                    <div className='flex gap-4 my-4'>
                        <p className='flex items-center justify-center text-Dark_03 font-manrope text-xl font-semibold'><img src={mapIcon} alt="" />{location}</p>
                        <p className='flex items-center justify-center text-Dark_03 font-manrope text-xl font-semibold'><img src={dollarIcon} alt="" />{salary}</p>
                    </div>
                </div>
            </div>
            <Link to={`/job/${id}`}>
                <button className='btn-primary'>View Details</button>
            </Link>
        </div>
    );
};

export default AppliedJobsCard;