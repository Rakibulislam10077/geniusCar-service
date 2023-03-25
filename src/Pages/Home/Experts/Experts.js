import React from 'react';
import expert1 from '../../../images/Experts/expert-1.jpg';
import expert2 from '../../../images/Experts/expert-2.jpg';
import expert3 from '../../../images/Experts/expert-3.jpg';
import expert4 from '../../../images/Experts/expert-4.jpg';
import expert5 from '../../../images/Experts/expert-5.jpg';
import expert6 from '../../../images/Experts/expert-6.png';
import Expert from '../Expert/Expert';



const experts = [
    { id: 1, name: 'will Smith', img: expert1, spe: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, facilis!Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, facilis!' },
    { id: 2, name: 'Chris Rock', img: expert2, spe: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, facilis!Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, facilis!' },
    { id: 3, name: 'Dwayne Rock', img: expert3, spe: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, facilis!Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, facilis!' },
    { id: 4, name: 'Messy Vai', img: expert4, spe: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, facilis!Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, facilis!' },
    { id: 5, name: 'Ronaldo Bro', img: expert5, spe: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, facilis!Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, facilis!' },
    { id: 6, name: 'Stachy Jhonson', img: expert6, spe: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, facilis!Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, facilis!' }
]


const Experts = () => {

    return (
        <div>
            <h1 className='text-6xl text-center mb-8 mt-12 bg-blue-400 py-8 px-4'>Our Expert Engineer</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-6 mx-8'>
                {
                    experts.map(expert => <Expert
                        key={expert.id}
                        expert={expert}
                    ></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;