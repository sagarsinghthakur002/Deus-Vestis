import React from 'react';

function Home() {
  return (
    <main className="relative w-full min-h-screen z-[3] flex justify-between items-center px-8 md:px-20">
      <div>
        <h1 className="text-white text-[30px] -pt-[10rem] font-semibold">Deus Vestis</h1>
        <p className="text-white md:pl-[5rem]">Genderless premium streetwear</p>
        <button className='bg-yellow-700 rounded-[10px] text-white p-2 button-0'>By now </button>
      </div>

     

      {/* Image Container */}
      <div className="relative">
        <img
          className=" bottom-0 right-0 max-w-full h-auto"
          src="/images/page.png"
          alt="page"
        />
      </div>
    </main>
  );
}

export default Home;
