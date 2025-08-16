import React from "react";
import { Card } from "./ui/card";

function TimelineSkeleton() {
  return (
    <div className="!w-full flex items-center justify-center h-64">
      <Card className="bg-card text-card-foreground w-[90%] flex flex-col gap-6 rounded-xl border border-gray-200 dark:border-gray-700 py-6 px-5 shadow-sm ms-auto">
        <div className="animate-pulse">
          <div className="flex items-center gap-8 mb-4">
            <div className="w-10/12 h-7 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
            <div className="w-14 h-7 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
          </div>
          <div className="w-3/6 h-4 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
          <div className="w-2/6 h-4 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
          <div className="w-11/12 h-3 bg-gray-200 dark:bg-gray-700 rounded mb-2 mt-6"></div>
          <div className="w-8/12 h-3 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
          <div className="w-10/12 h-3 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
          <div className="flex items-center justify-start gap-3 flex-wrap mt-8">
            <div className="w-10 h-6 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
            <div className="w-12 h-6 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
            <div className="w-8 h-6 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
            <div className="w-14 h-6 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
            <div className="w-14 h-6 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
            <div className="w-16 h-6 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default TimelineSkeleton;
