import React from 'react';

const Blogs = () => {
    return (
        <div className='my-container space-y-6'>
            <div className='bg-slate-200 p-8 rounded-lg shadow-lg'>
                <p className='font-manrope font-semibold text-2xl text-Dark_01'>(1) When should you use context api?</p>
                <p className='font-manrope font-semibold text-xl text-Dark_03'>You should use context api in React when passing data from a parent component to a very deep-level child component without passing it through all intermediate components. This basically makes the data management and prop drilling easier to understand and easier to manage throughout the process</p>
            </div>
            <div className='bg-slate-200 p-8 rounded-lg shadow-lg'>
                <p className='font-manrope font-semibold text-2xl text-Dark_01'>(2) What is custom hook in react?</p>
                <p className='font-manrope font-semibold text-xl text-Dark_03'> custom Hooks in React are a way to encapsulate reusable logic and state within custom functional components. Custom Hooks are typically used for local component state management and can handle specific functionality, such as form validation or API calls.</p>
            </div>
            <div className='bg-slate-200 p-8 rounded-lg shadow-lg'>
                <p className='font-manrope font-semibold text-2xl text-Dark_01'>(3) What is useRef in react?</p>
                <p className='font-manrope font-semibold text-xl text-Dark_03'>The useRef is a hook that allows to directly create a reference to the DOM element in the functional component.It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.</p>
            </div>
            <div className='bg-slate-200 p-8 rounded-lg shadow-lg'>
                <p className='font-manrope font-semibold text-2xl text-Dark_01'>(4) What is useMemo in react?</p>
                <p className='font-manrope font-semibold text-xl text-Dark_03'>The useMemo is a hook used in the functional component of react that returns a memoized value.The useMemo Hook can be used to keep expensive, resource intensive functions from needlessly running.</p>
            </div>
        </div>
    );
};

export default Blogs;