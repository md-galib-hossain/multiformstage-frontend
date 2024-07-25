"use client"
import React, { useEffect, useState } from 'react'
import { TStep } from './Steps'
import { useAppSelector } from '@/redux/hooks'

const Step = ({step} : {step : TStep}) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  const currentStep = useAppSelector((state)=> state.form.currentStep)
    const {number,title} = step

  return (
    <div className="flex flex-col md:flex-row items-center gap-3 ">
    {
      isClient ? <>  <div
      className={`w-8 h-8  text-slate-50 border border-slate-50 rounded-full flex items-center justify-center font-bold flex-shrink-0 ${
        number === currentStep ? "bg-blue-300 border-0" : ""
      }`}
    >
      {number}
    </div>
    <div className="flex-col flex  justify-center">
      <h4 className="text-slate-200 text-sm uppercase  md:block hidden">Step {number}</h4>
      <h3 className="uppercase text-sm text-white font-bold lg:block  hidden">{title}</h3>
    </div></> : null
    }
    </div>
  )
}

export default Step