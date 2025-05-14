
  
import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { name: '0', value: 300 },
  { name: '1', value: 700 },
  { name: '2', value: 100 },
  { name: '3', value: 500 },
  { name: '4', value: 800 },
  { name: '5', value: 1500 },
  { name: '6', value: 1000 },
  { name: '7', value: 1300 },
];

const PerformanceChart = () => {
  return (
    <div style={{ width: '100%' ,height:'290px'}}>
      <ResponsiveContainer width="100%" height="100%" minWidth= "470px" >
        <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#4CAF50" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#4CAF50" stopOpacity={0.1} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="value" stroke="#4CAF50" fill="url(#colorFill)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PerformanceChart;
