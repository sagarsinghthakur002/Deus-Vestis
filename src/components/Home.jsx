import React from "react";

function Home() {
  return (
    <main className="relative w-full min-h-screen z-[3] flex justify-between items-center px-8">
      <div className="flex flex-col items-start">
        <h1 className="text-white text-[30px] font-semibol ml-[20]d">
          Deus Vestis
        </h1>
        <p className="text-white md:pl-[5rem]">Genderless premium streetwear</p>
        <img className="h-[20em] ml-[40rem]" src="/images/log.png" />

        {/* <div className='h-3'>
          <img src='/images/log.png'/>
        </div> */}


        

        <div className="m-5 ">
          <button className="bg-yellow-700 rounded-[10px] text-white p-2 button-0 mt-4 ">
            Buy now
          </button>
          <button className="bg-yellow-700 rounded-[10px] text-white p-2 button-0 mt-4 ml-3">
            Book Now
          </button>
        </div>
      </div>

      {/* Image Container */}
      <div className="relative">
        <img
          className="w-full h-auto object-cover"
          src="/images/page.png"
          alt="Premium streetwear"
        />
      </div>
    </main>
  );
}

export default Home;
