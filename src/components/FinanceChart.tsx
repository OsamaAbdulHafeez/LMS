"use client"
import Image from "next/image"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Jan',
    income: 4000,
    expense: 2400,
  },
  {
    name: 'Feb',
    income: 3000,
    expense: 1398,
  },
  {
    name: 'Mar',
    income: 2000,
    expense: 9800,
  },
  {
    name: 'Apr',
    income: 2780,
    expense: 3908,
  },
  {
    name: 'May',
    income: 1890,
    expense: 4800,
  },
  {
    name: 'Jun',
    income: 2390,
    expense: 3800,
  },
  {
    name: 'Jul',
    income: 3490,
    expense: 4300,
  },
  {
    name: 'Aug',
    income: 3490,
    expense: 4300,
  },
  {
    name: 'Sep',
    income: 3490,
    expense: 4300,
  },
  {
    name: 'Oct',
    income: 3490,
    expense: 4300,
  },
  {
    name: 'Nov',
    income: 3490,
    expense: 4300,
  },
  {
    name: 'Dec',
    income: 3490,
    expense: 4300,
  },
];
const FinanceChart = () => {
  return (
    <div className="bg-white rounded-xl h-full w-full p-4">
    {/* TITLE */}
    <div className="flex justify-between items-center">
      <h1 className="text-lg font-semibold">Finance</h1>
      <Image src="/moreDark.png" alt="" width={20} height={20} />
    </div>
    <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#ddd"/>
          <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill:"#d1d5dd"}}/>
          <YAxis axisLine={false} tickLine={false} tick={{fill:"#d1d5dd"}} tickMargin={10}/>
          <Tooltip />
          <Legend align="center" verticalAlign="top" wrapperStyle={{paddingTop:'10px',paddingBottom:'30px'}}/>
          <Line type="monotone" dataKey="income" stroke="#C3FBFA" strokeWidth={5}/>
          <Line type="monotone" dataKey="expense" stroke="#CFCEFF" strokeWidth={5}/>
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default FinanceChart
