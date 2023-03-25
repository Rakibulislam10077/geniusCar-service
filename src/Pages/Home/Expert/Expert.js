import React from 'react';

const Expert = ({ expert }) => {
    const { name, img, spe } = expert;
    return (
        <div className='bg-blue-400 rounded p-4'>
            <h1 className='text-2xl my-3 '>Name: {name}</h1>
            <img className='w-full rounded' src={img} alt="expert engineer images" />
            <p className='my-3'><span className='font-bold'>Spe:</span> {spe}</p>
        </div>
    );
};

export default Expert;