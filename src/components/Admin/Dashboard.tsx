import React, { useState } from "react";
import UserTraffic from "./Charts/UserTraffic";
import ArticleTraffic from "./Charts/ArticleTraffic";
import SourceTraffic from "./Charts/SourceTraffic";

const Dashboard: React.FC = () => {
  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Replace with your content */}
        <div className="py-4">
          <div className="h-96">
            <div className="grid grid-cols-2 gap-4 py-4">
              <UserTraffic />
              <SourceTraffic />
            </div>
            <div className="grid grid-cols gap-4 py-4">
              <ArticleTraffic />
            </div>
          </div>
        </div>
        {/* /End replace */}
      </div>
    </div>
  );
};

export default Dashboard;
