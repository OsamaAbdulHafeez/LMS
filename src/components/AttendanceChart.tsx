"use client";
import Image from "next/image";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Mon",
    present: 60,
    absent: 40,
  },
  {
    name: "Tue",
    present: 65,
    absent: 35,
  },
  {
    name: "Wed",
    present: 95,
    absent: 80,
  },
  {
    name: "Thu",
    present: 50,
    absent: 50,
  },
  {
    name: "Fri",
    present: 40,
    absent: 60,
  },
];
const AttendanceChart = () => {
  return (
    <div className="bg-white rounded-xl h-full w-full p-4">
      {/* TITLE */}
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Students</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      {/* CHART */}
        <ResponsiveContainer width="100%" height="90%">
          <BarChart width={500} height={300} data={data} barSize={20}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd"/>
            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill:"#d1d5dd"}}/>
            <YAxis axisLine={false} tickLine={false} tick={{fill:"#d1d5dd"}}/>
            <Tooltip contentStyle={{borderRadius:'10px',borderColor:'light'}}/>
            <Legend align="left" verticalAlign="top" wrapperStyle={{paddingTop:'20px',paddingBottom:'40px'}}/>
            <Bar
              dataKey="present"
              fill="#FAE27C"
              legendType="circle"
              radius={[10,10,0,0]}
            />
            <Bar
              dataKey="absent"
              fill="#C3EBFA"
              legendType="circle"
              radius={[10,10,0,0]}
            />
          </BarChart>
        </ResponsiveContainer>
    </div>
  );
};

export default AttendanceChart;
