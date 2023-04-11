import React from 'react';
import { useForm } from "react-hook-form";

const AddUser = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/service', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    };



    return (
        <div className='w-1/3 mx-auto'>
            <h1 className='text-3xl bg-red-400 rounded py-1 px-2 my-2 text-center text-white'>Add Service</h1>
            <div className='bg-red-400 rounded p-3'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className='block w-96 my-2 h-8 px-1' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                    <input className='block w-96 my-2 h-8 px-1' placeholder='Description'  {...register("description")} />
                    <input className='block w-96 my-2 h-8 px-1' placeholder='Price' type="number" {...register("price")} />
                    <input className='block w-96 my-2 h-8 px-1' placeholder='PhotoURL' type="text" {...register("img")} />
                    <input className='bg-blue-500 rounded py-2 px-3 cursor-pointer text-white font-semibold' type="submit" value='Add service' />
                </form>
            </div>
        </div>
    );
};

export default AddUser;