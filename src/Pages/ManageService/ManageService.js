import React from 'react';
import useService from '../../Pages/hooks/useService';

const ManageService = () => {
    const [services, setServices] = useService()

    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure.! you want to delete.?')
        if (proceed) {
            fetch(`http://localhost:5000/service/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    setServices(services.filter(service => service._id !== id))
                })
        }
    }
    return (
        <div>
            <h1>manage your service</h1>
            {
                services.map(service => <div
                    key={service._id}
                    className='w-1/2 mx-auto'>
                    <h4 className='my-2 text-2xl'>{service.name} <button
                        onClick={() => handleDelete(service._id)}
                        className='bg-red-400 rounded p-2'
                    >X</button></h4>
                </div>)
            }
        </div>
    );
};

export default ManageService;