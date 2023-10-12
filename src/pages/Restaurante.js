import React from 'react'
import ScrollToTop from '../components/ScrollToTop';


const Restaurante = () => {
  return (
    <section>
      <ScrollToTop />
      {/* banner */}
      <div className="bg-restaurant  bg-cover bg-center h-[560px] relative flex justify-center items-center">
        {/* overlay */}
        <div className="absolute w-full h-full bg-black/70"></div>
        {/* title */}
        <h1 className="text-6xl text-white z-20 font-primary text-center">
          Proximante Restauracion 
        </h1>
      </div>
    </section>
  );
}

export default Restaurante