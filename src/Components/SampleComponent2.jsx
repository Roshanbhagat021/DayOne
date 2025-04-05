import React from 'react'

export default function SampleComponent2({img,heading,para }) {
  return (
    <div className={`flex justify-center min-[840px]:-ml-[75px] mt-4 items-center max-[840px]:flex-col w-[90%] m-auto`}>
      <img src={img} alt="" className='w-[100%] max-w-[700px]' />
      <div className='max-w-[70%] max-[700px]:max-w-[100%] min-[840px]:-ml-[50px] text-[#333b40] mt-4'>
        <h1 className='text-5xl/16 max-[780px]:text-4xl '>{heading}</h1>
        <p className='text-lg/8 mt-4 '>
          {para}
        </p>
      </div>
    </div>
  )
}
