import React from 'react'

function Home() {
  return (
    <main className=' w-full h-full z-[3] flex justify-between '>
        <div>
          <h1 className='text-white text-[30px] pt-[8rem] px-[5rem] font-semibold'>Deus Vestis</h1>
          <p className='text-white  pl-[5rem] '>Genderless premium streetwear</p>
        </div>

        <div className="">
        <img className='bottom-0 right-0'  src='/images/page.png' alt=' page '/>
        </div >
      
    </main>
  )
}

export default Home
