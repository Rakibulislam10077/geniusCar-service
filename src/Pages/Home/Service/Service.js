import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
    const { id, name, img, price, description } = service;
    const navigate = useNavigate();
    const handleServiceDetails = (id) => {
        navigate(`/service/${id}`);
    }
    return (
        <div className='bg-gray-300 rounded-lg p-4'>
            <img className='w-full rounded' src={img} alt="this is service images" />
            <h2 className='text-2xl mb-3 mt-2'>Price: {price}</h2>
            <p><span className='font-bold'>Description: </span>{description}</p>
            <button onClick={() => handleServiceDetails(id)} className='text-2xl bg-red-400 text-white shadow-lg hover:bg-opacity-90 px-3 py-2 rounded my-3'>Name: {name}</button>
        </div>
    );
};

export default Service;