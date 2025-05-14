import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SummaryCard from '../components/SummaryCard';
import Button from '../components/Button'
import PerformanceChart from '../components/PerformanceChart';
import ReportPanel from '../components/ReportPanel';
export default function Dashboard() {
  
  return (
    <div className='msc-container'>
    <div className='dashboard'>
    <div className='h-db'>
    <h1>My Summary</h1>
    <Button
     
            text="This month"
            icon="⏷"
            newcl=" db-btn"
          />
    </div>
    <div className='db-container'>
    <SummaryCard/>
    <PerformanceChart/>
    </div>
    </div>
    <ReportPanel/>
    </div>
  );
}
