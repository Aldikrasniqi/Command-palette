import React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

function MenuPages() {
  const [activeTab, setActiveTab] = useState('home');
  return (
    <div className="flex flex-col justify-center gap-2 font-body">
      <div className="mt-10 w-full bg-gray-50 p-1.5 rounded-sm">
        <FontAwesomeIcon
          icon={['fas', 'home']}
          className="mr-2 text-gray-700"
        />
        <Link to="/" className="text-sm text-gray-700">
          Home
        </Link>
      </div>
      <div className="w-full p-1.5 rounded-sm">
        <FontAwesomeIcon
          icon={['fas', 'tasks']}
          className="mr-2 text-gray-700"
        />
        <Link to="/" className="text-sm text-gray-700">
          My tasks
        </Link>
      </div>
      <div className="w-full p-1.5 rounded-sm">
        <FontAwesomeIcon
          icon={['fas', 'calendar']}
          className="mr-2 text-gray-700"
        />
        <Link to="/" className="text-sm text-gray-700">
          Recent
        </Link>
      </div>
    </div>
  );
}

export default MenuPages;
