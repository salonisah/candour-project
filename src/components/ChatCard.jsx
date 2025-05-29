import React from "react";
import ChatCard from "../components/ChatCard";
import PerformanceChart from "../components/PerformanceChart";
import CategoryChart from "../components/CategoryChart";
import RevenueReport from "../components/RevenueReport";
import UserAgeGroup from "../components/UserAgeGroup";
import TopPublishers from "../components/TopPublishers";
import TopArticles from "../components/TopArticles";

const ReportsAndMetrics = () => {
  return (
    <div className="reports-page" style={{ padding: "20px", display: "flex", flexDirection: "column", gap: "40px" }}>
      <h2>Reports & Metrics</h2>

      {/* Full Width: Reports by Category */}
      <div>
        <h3>Reports by Category</h3>
        <CategoryChart />
      </div>

      {/* 70:30 Row: Revenue & Age Group */}
      <div style={{ display: "flex", gap: "24px" }}>
        <div style={{ flex: 7 }}>
          <h3>Report by Revenue</h3>
          <RevenueReport />
        </div>
        <div style={{ flex: 3 }}>
          <h3>User Age Group</h3>
          <UserAgeGroup />
        </div>
      </div>

      {/* 70:30 Row: Top Publishers & Top Articles */}
      <div style={{ display: "flex", gap: "24px" }}>
        <div style={{ flex: 7 }}>
          <h3>Top Publishers</h3>
          <TopPublishers />
        </div>
        <div style={{ flex: 3 }}>
          <h3>Top Articles</h3>
          <TopArticles />
        </div>
      </div>

      {/* Optional: Team Conversations (existing section) */}
      <div>
        <h3>Team Conversations</h3>
        <div className="chat-list" style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
          <ChatCard
            name="John Doe"
            time="10:30 AM"
            avatar="https://i.pravatar.cc/50?img=1"
            role="Support Agent"
          />
          <ChatCard
            name="Jane Smith"
            time="11:00 AM"
            avatar="https://i.pravatar.cc/50?img=2"
            role="Manager"
          />
        </div>
      </div>
    </div>
  );
};

export default ReportsAndMetrics;
