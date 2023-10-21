import React from 'react';

function TeamsComponent() {
  return (
    <div className="mt-5 flex flex-col gap-3">
      <h3 className="text-gray-600 opacity-90 font-body font-semibold text-sm">
        TEAMS
      </h3>
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 bg-green-600 rounded-full"></span>
        <h3 className="text-gray-600 opacity-90 font-body font-semibold text-sm">
          Design
        </h3>
      </div>
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 bg-red-600 rounded-full"></span>
        <h3 className="text-gray-600 opacity-90 font-body font-semibold text-sm">
          Development
        </h3>
      </div>
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
        <h3 className="text-gray-600 opacity-90 font-body font-semibold text-sm">
          Marketing
        </h3>
      </div>
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 bg-yellow-600 rounded-full"></span>
        <h3 className="text-gray-600 opacity-90 font-body font-semibold text-sm">
          Engineering
        </h3>
      </div>
    </div>
  );
}

export default TeamsComponent;
