import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';


const Services = () => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch(`service.json`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])


    return (
        <div>
            <h1 className='text-6xl text-center mb-8 mt-4 bg-red-400 py-8 px-4'>Our services</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  mx-8 gap-6'>
                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;