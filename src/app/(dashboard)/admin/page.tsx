import AttendanceChart from '@/components/AttendanceChart'
import CountChart from '@/components/CountChart'
import UserCard from '@/components/UserCard'
import React from 'react'

const AdminPage = () => {
  return (
    <div className='p-4 flex flex-col md:flex-row gap-4'>
      <div className='w-full lg:w-2/3 flex flex-col gap-8'>
        <div className='flex gap-4 justify-between flex-wrap'>
          <UserCard type='student'/>
          <UserCard type='teacher'/>
          <UserCard type='parent'/>
          <UserCard type='staff'/>
        </div>
        {/* MIDDLE CHARTS */}
        <div className='flex flex-col gap-4 lg:flex-row'>
          {/* COUNT CHART */}
          <div className='w-full lg:w-1/3 h-[450px]'>
              <CountChart/>
          </div>
          {/* ATTENDANCE CHART */}
          <div className='w-full lg:w-2/3 h-[450px]'>
              <AttendanceChart/>
          </div>
        </div>
        {/* BOTTOM CHARTS */}
        <div>

        </div>
      </div>
      <div className='w-full lg:w-1/3'>
        r
      </div>
    </div>
  )
}

export default AdminPage
