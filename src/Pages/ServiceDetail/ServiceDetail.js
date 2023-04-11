import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { serviceId } = useParams()
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/service/${serviceId}`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className=' mt-12 w-1/2 mx-auto p-4 rounded-md'>
            <h1 className='text-3xl my-2 bg-blue-400 rounded py-1 px-2 text-center text-white'>service Details </h1>
            <div className='bg-blue-300 p-4 rounded'>
                <div>
                    <img className='w-full' src={services.img} alt="" />
                </div>
                <h1 className='bg-gray-400 rounded py-1 px-2 mt-2 text-2xl text-white'>{services.name}</h1>
                <h3 className='text-black mt-2 font-semibold'>Price: {services.price}</h3>
                <p><span className='font-bold'>Description:</span> {services.description}</p>
            </div>
        </div>
    );
};

export default ServiceDetail;