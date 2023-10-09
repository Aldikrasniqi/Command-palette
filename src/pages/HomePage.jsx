import React from 'react';
import NavBar from '../components/NavBar';
import ContentProjects from './ContentProjects';
import { data } from '../data/data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
function HomePage() {
  return (
    <div className="flex min-h-screen font-body">
      <NavBar />
      <section className="flex-1">
        <div className="border-b">
          <div className="flex m-4 justify-between items-center">
            <h1 className="text-slate-700 font-semibold text-2xl">Home</h1>
            <div className="flex gap-2">
              <button className="border border-gray-400 rounded px-2.5 py-1.5 font-semibold text-slate-900 text-sm">
                Share
              </button>
              <button className="bg-[#6d78d9] text-white font-semibold px-2.5 py-1.5 rounded text-sm">
                Create
              </button>
            </div>
          </div>
        </div>
        <div className="border-b p-5">
          <h1 className='text-slate-700 text-base tracking-tight font-medium'>PINNED PROJECTS</h1>
          {/* pinned project to do */}
          <div className=" w-[300px] h-24 p-2">
            <Link
              href="#"
              className="flex flex-col items-center bg-white  border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 h-full"
            >
              <div className=" bg-white w-full h-full flex justify-center items-center"><h1>IL</h1></div>
              <div className="flex flex-col justify-between p-4 mt-2 leading-normal w-full">
                <h5 className=" text-sm font-bold  text-gray-900 dark:text-white">
                 Graph Ql team
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">12 members</p>
              </div>
              <div className="flex flex-col items-center justify-center w-12 rotate-90 text-white">
                <FontAwesomeIcon icon={faEllipsisH} />
                </div>
            </Link>
          </div>
        </div>
        <div className="h-screen overflow-auto">
          <ContentProjects data={data} />
        </div>
      </section>
    </div>
  );
}

export default HomePage;
