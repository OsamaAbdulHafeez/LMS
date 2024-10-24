import Announcements from '@/components/Announcements'
import BigCalendar from '@/components/BigCalender'
import EventCalender from '@/components/EventCalender'
import React from 'react'

const ParentPage = () => {
  return (
    <div className='flex-1 p-4 flex flex-col xl:flex-row gap-4'>
    {/* LEFT */}
    <div className='w-full xl:w-2/3 flex flex-col gap-8'>
      <div className='h-full bg-white rounded-md p-4'>
        <h1 className='text-xl font-semibold'>Schedule (Osama)</h1>
        <BigCalendar/>
      </div>
    </div>
    {/* RIGHT */}
    <div className='w-full xl:w-1/3 flex flex-col gap-8'>
      <Announcements/>
    </div>
  </div>
  )
}

export default ParentPage
