import React from 'react'


export default function SampleComponent({ direction, img, heading, para }) {
  return (
    <div className={`flex justify-center items-center gap-16 ${direction == "toRight"?'flex-row-reverse':''}  max-[780px]:gap-8 max-[780px]:flex-col max-w-[90%] m-auto`}>
      <img src={img} alt="" className='max-w-[280px]' />
      <div className='max-w-[37%] max-[780px]:max-w-[100%] text-[#333b40]'>
        <h1 className='text-5xl/16 max-[780px]:text-4xl '>{heading}</h1>
        <p className='text-lg/8 mt-4 '>
          {para}
        </p>
      </div>
    </div>
  )
}
