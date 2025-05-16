import React from 'react';
import SummaryCard from '../components/SummaryCard';
import Button from '../components/Button';
import PerformanceChart from '../components/PerformanceChart';
import ReportPanel from '../components/ReportPanel';
import Articles from './Articles';
import RecentChats from '../components/RecentChats';
import RecentlyAdded from '../components/RecentlyAdded'; // Added import for RecentlyAdded
import ChatList from '../components/ChatList';

export default function Dashboard() {
  // Existing chat data for RecentChats
  const chatData = Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    name: `User ${i + 1}`,
    time: `${5 + i}m ago`,
    avatar: `https://i.pravatar.cc/150?img=${i % 70 + 1}`,
    message: `Message ${i + 1} from User ${i + 1}`,
  }));

  // Define roles for variety in the RecentlyAdded section
  const roles = ['Developer', 'Designer', 'Manager', 'Tester', 'Admin'];

  // Generate dummy user data for RecentlyAdded
  const userData = Array.from({ length: 4 }, (_, i) => ({
    name: `User ${i + 1}`,
    role: roles[i % roles.length], // Cycles through roles
    avatar: `https://i.pravatar.cc/150?img=${i % 70 + 1}`,
  }));

  return (
    <>
<section className='dashboard-container'>
      <div className="msc-container">
        <div className="dashboard">
          <div className="h-db">
            <h1>My Summary</h1>
            <Button text="This month" icon="⏷" newcl="db-btn" />
          </div>
          <div className="db-container">
            <SummaryCard />
            <PerformanceChart />
          </div>
          <div className="recent-articles">
        <Articles />
      </div>
        </div>
        <div className="right-container">
          <div className="report-pannel">
            <ReportPanel />
          </div>
          <div className="recent-chats">
            <RecentChats chats={chatData} />
          </div>
          {/* Add RecentlyAdded component here */}
          <div className="recently-added2">
            <RecentlyAdded users={userData} />
          </div>
        </div>
      </div>
       
</section>
    
    </>
  );
}