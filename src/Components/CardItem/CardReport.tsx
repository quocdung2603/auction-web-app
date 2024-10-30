import React from "react";

interface CardReportProps{
    sum: number,
    content: string,
    percent?: number
}
const cardReport:React.FC<CardReportProps>=({content,percent,sum})=> {
    return ( 
        <div className='bg-white rounded-md border border-gray-100 p-6 shadow-md shadow-black/5'>
            <div className='flex justify-between mb-4'>
              <div>
                <div className='flex items-center mb-1'>
                  <div className='text-2xl font-semibold'>{sum}</div>
                  {
                    percent && 
                    <div className='p-1 rounded bg-emerald-500/10 text-emerald-500 text-[12px] font-semibold leading-none ml-2'>
                    +{percent}%
                  </div>
                  }
                </div>
                <div className='text-sm font-medium text-gray-400'>
                  {content}
                </div>
              </div>
            </div>
            <a
              href='/dierenartsen'
              className='text-[#f84525] font-medium text-sm hover:text-red-800'
            >
              View
            </a>
          </div>
     );
}

export default cardReport;