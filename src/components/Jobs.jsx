import React from 'react';
import { MapIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';
const Jobs = ({ job }) => {
    const { title, company, job_type, location, salary, logo, id } = job
    return (
        <div>
            <div>
                <img src={logo} alt={title} className='w-64 h-fit' />
            </div>
            <div className='ml-8 font-manrope space-y-3'>
                <h3 className='font-extrabold text-2xl text-[#474747]'>{title}</h3>
                <p className='text-[#757575] font-manrope tracking-wide font-semibold text-xl'>{company}</p>
                <button className='btn-outlined'>{job_type}</button>
                <div className='mt-2 flex gap-x-4'>
                    <div className='flex text-[#757575] justify-center items-center gap-x-1'>
                        <MapIcon className='h-6 w-6'></MapIcon> <p className='font-manrope tracking-wide font-semibold text-xl'>{location}</p>
                    </div>
                    <div className='flex text-[#757575] justify-center items-center gap-x-1'>
                        <CurrencyDollarIcon className='h-6 w-6'></CurrencyDollarIcon><p className='font-manrope tracking-wide font-semibold text-xl'>{salary}</p>
                    </div>
                </div>
                <Link to={`/job/${id}`}>
                    <button className='btn-primary'>View Details</button>
                </Link>
            </div>
        </div>
    );
};

export default Jobs;