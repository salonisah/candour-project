


import React from "react";


import {
  BarChart, Bar, XAxis, YAxis, Tooltip as RechartsTooltip,
  LineChart, Line, AreaChart, Area, CartesianGrid, ResponsiveContainer
} from "recharts";

const ReportsDashboard = () => {
  const categoryData = [
    { name: "Design", value: 44 },
    { name: "Medical", value: 42 },
    { name: "Art", value: 39 },
    { name: "Technology", value: 37 },
    { name: "Dance", value: 26 },
    { name: "Music", value: 20 },
    { name: "Leisure & Lifestyle", value: 26 },
    { name: "Fashion", value: 12 },
    { name: "Photography", value: 10 },
  ];

  const revenueData = [
    { day: 1, earned: 100, redeemed: 50 },
    { day: 8, earned: 950, redeemed: 1000 },
    { day: 15, earned: 800, redeemed: 900 },
    { day: 22, earned: 450, redeemed: 400 },
    { day: 32, earned: 300, redeemed: 360 },
  ];

  const ageGroupData = [
    { age: "16 - 20", male: 10, female: 5 },
    { age: "21 - 30", male: 20, female: 35 },
    { age: "31 - 40", male: 10, female: 15 },
    { age: "41 - 50", male: 5, female: 8 },
    { age: "51 - 60", male: 3, female: 4 },
    { age: "60+", male: 2, female: 3 },
  ];

  const publisherData = [
    { name: "Publisher 1", views: 2700 },
    { name: "Publisher 2", views: 1890 },
    { name: "Publisher 3", views: 1754 },
    { name: "Publisher 4", views: 1489 },
    { name: "Publisher 5", views: 1254 },
    { name: "Publisher 6", views: 1103 },
    { name: "Publisher 7", views: 512 },
    { name: "Publisher 8", views: 174 },
  ];

  return (
    <section className="reports-revenue">
      <h1
        className="mb-2"
        style={{
          fontFamily: 'Lato, sans-serif',
          fontSize: '24px',
          fontWeight: '600',
          color: '#333333',
          background: '#FFFFFF',
        }}
      >
        Reports & Metrics
      </h1>
<div className="bg-white p-4 rounded shadow col-span-1 xl:col-span-2" style={{ paddingTop: '19px',background:"#E6E6E6" ,margin: '20px 0px' }}>
  <ResponsiveContainer width="100%" height={350}>
    <BarChart data={categoryData}>
      <XAxis dataKey="name" />
      <YAxis domain={[0, 48]} tickCount={10} />
      <RechartsTooltip />
      <CartesianGrid stroke="#e0e0e0" strokeDasharray="0" vertical={false} />
      <Bar dataKey="value" fill="#34D399" barSize={30} radius={[4, 4, 0, 0]} />
    </BarChart>
  </ResponsiveContainer>
  <h2
    className="font-lato font-semibold text-[20px] text-[#484848] mb-[37px]"
    style={{ padding: '20px' }}
  >
    Reports by Category
  </h2>
</div>
      <div className="r-user" style={{ display: 'flex', gap: '20px' }}>
        <div className="bg-white p-4 rounded shadow" style={{ width: "70%" }}>
          <h2 className="text-lg font-semibold mb-2">Report by Revenue</h2>
          <ResponsiveContainer width="100%" height={250}>
            <AreaChart data={revenueData}>
              <defs>
                <linearGradient id="colorEarned" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#34D399" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#34D399" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorRedeemed" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#F87171" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#F87171" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <XAxis dataKey="day" />
              <YAxis />
              <RechartsTooltip />
              <Area type="monotone" dataKey="earned" stroke="#34D399" fillOpacity={1} fill="url(#colorEarned)" />
              <Area type="monotone" dataKey="redeemed" stroke="#F87171" fillOpacity={1} fill="url(#colorRedeemed)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-white p-4 rounded shadow" style={{ width: "30%" }}>
          <h2 className="text-lg font-semibold mb-2">User Age Group</h2>
          {ageGroupData.map((item, index) => (
            <div key={index} className="flex items-center justify-between my-1">
              <span className="text-sm w-16">{item.age}</span>
              <div className="flex-1 mx-2">
                <div className="flex">
                  <div className="bg-yellow-400 h-2 mr-1" style={{ width: `${item.male * 3}px` }}></div>
                  <div className="bg-green-400 h-2" style={{ width: `${item.female * 3}px` }}></div>
                </div>
              </div>
            </div>
          ))}
          <div className="flex justify-between text-xs text-gray-500 mt-2">
            <span>Male</span>
            <span>Female</span>
          </div>
        </div>
      </div>
      <div className="r-user" style={{ display: 'flex', gap: '20px' }}>
        <div className="bg-white p-4 rounded shadow" style={{ width: "70%" }}>
          <h2 className="text-lg font-semibold mb-2">Top 8 Publisher</h2>
          {publisherData.map((item, index) => (
            <div key={index} className="mb-2">
              <div className="flex justify-between">
                <span className="text-sm">{item.name}</span>
                <span className="text-sm text-gray-600">{item.views} views</span>
              </div>
              <div className="bg-gray-200 h-2 rounded">
                <div
                  className="bg-green-500 h-2 rounded"
                  style={{ width: `${(item.views / 2700) * 100}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-white p-4 rounded shadow col-span-1 xl:col-span-3" style={{ width: "30%" }}>
          <h2 className="text-lg font-semibold mb-2">Top 5 Articles</h2>
          {[...Array(5)].map((_, index) => (
            <div key={index} className="border-b py-2">
              <p className="font-mediumsmaller horizontal lines">5 ways to start crocheting</p>
              <p className="text-sm text-gray-500">Anusha Puri · 4K Views · 1st Feb, 2025</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReportsDashboard;
