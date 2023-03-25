import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { serviceId } = useParams()
    return (
        <div>
            <h1 className='text-3xl'>this is service detail page: {serviceId}</h1>
        </div>
    );
};

export default ServiceDetail;