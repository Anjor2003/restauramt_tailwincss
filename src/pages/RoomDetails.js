import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';

// componentes
import AdultsDropdown from '../components/AdultsDropdown';
import KidsDropdown from '../components/KidsDropdown';
import CheckIn from '../components/CheckIn';
import CheckOut from '../components/CheckOut';
// scroll top componentes
import ScrollToTop from '../components/ScrollToTop';
// context 
import { RoomContext } from '../context/RoomContext';
// Iconos 
import { FaCheck } from 'react-icons/fa';


const RoomDetails = () => {
  const {rooms} = useContext(RoomContext)
  const { id } = useParams();
  
  // cogemos habitacion
  const room = rooms.find((room) => {
    return room.id === Number(id);
  });
  // destructuramos habitacion
  const { name, description, facilities, imageLg, price} = room

  return (
    <section>
      <ScrollToTop />
      {/* banner */}
      <div className="bg-room  bg-cover bg-center h-[560px] relative flex justify-center items-center">
        {/* overlay */}
        <div className="absolute w-full h-full bg-black/70"></div>
        {/* title */}
        <h1 className="text-6xl text-white z-20 font-primary text-center">
          {name} Details
        </h1>
      </div>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row h-full py-24">
          {/* left */}
          <div className="w-full h-full lg:w-[60%] px-3 lg:px-6">
            <h2 className='h2'>{name}</h2>
            <p className='mb-8'>{description}</p>
            <img className='mb-8' src={imageLg} alt="imagen grande" />
            {/* facioities */}
            <div  className='mt-12'>
              <h3 className='h3 mb-3'>Room facilities</h3>
              <p  className='mb-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, modi quibusdam qui nostrum inventore voluptas est accusamus, pariatur labore amet ad ipsum voluptatibus non laboriosam quidem, repellat maiores eum tempore. Sint, hic.</p>
              {/* grid */}
              <div className='grid grid-cols-3 gap-6 mb-12'>
                {facilities.map((item, index)=> {
                  // destructure item
                  const { name, icon } = item;
                  return (
                    <div
                      className="flex flex-1 items-center gap-x-3"
                      key={index}
                    >
                      <div className="text-2xl text-accent lg:text-3xl">
                        {icon}
                      </div>
                      <div className="text-base ">{name}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          {/* Right */}
          <div className="w-full h-full lg:w-[40%]">
            {/* reservation */}
            <div className='py-8 px-6 bg-accent/20 mb-12'>
              <div className='flex flex-col space-y-4 mb-4'>
                <h3>Your Reservation</h3>
                <div className='h-[60px]'>
                  <CheckIn />
                </div>
                <div className='h-[60px]'>
                  <CheckOut/>
                </div>
                <div className='h-[60px]'>
                  <AdultsDropdown />
                </div>
                <div className='h-[60px]'>
                  <KidsDropdown />
                </div>
              </div>
              <button className='btn btn-lg btn-primary w-full'>book now for {price} €</button>
            </div>
            {/* rules */}
            <div>
              <h3 className='h3'>Hotel Rules</h3>
              <p className='mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ducimus facere aut.</p>
              <ul className='flex flex-col gap-y-4'>
                <li className='flex items-center gap-x-4'>
                  <FaCheck className='text-accent' />
                  Check-in: 3:00 PM - 9:00 PM
                </li>
                <li className='flex items-center gap-x-4'>
                  <FaCheck className='text-accent' />
                  Check-out: 12:00 AM
                </li>
                <li className='flex items-center gap-x-4'>
                  <FaCheck className='text-accent' />
                  No Pets 
                </li>
                <li className='flex items-center gap-x-4'>
                  <FaCheck className='text-accent' />
                  No Smoking
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoomDetails;
