import React from 'react';
import NavBar from '../components/NavBar';
import ContentProjects from './ContentProjects';
import { data } from '../data/data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
function HomePage() {
    const statusColor = (status) => {
      console.log(status);
      switch (status) {
        case 'Android Developer': 
          return 'bg-green-600 rounded-tl rounded-bl text-white';
        case 'iOS Developer':
          return 'bg-blue-600 rounded-tl rounded-bl text-white';
        case 'Web Developer':
          return 'bg-yellow-600 rounded-tl rounded-bl text-white';
        case 'UX Designer':
          return 'bg-red-600 rounded-tl rounded-bl text-white';
        case 'UI Designer':
          return 'bg-purple-600 rounded-tl rounded-bl text-white';
        case 'Product Manager':
          return 'bg-pink-600 rounded-tl rounded-bl text-white';
        case 'React Developer':
          return 'bg-indigo-600 rounded-tl rounded-bl text-white';
        case 'GraphQl API':
          return 'bg-amber-600 rounded-tl rounded-bl text-white';
        case 'Product Designer':
          return 'bg-blue-600 rounded-tl rounded-bl text-white';
        default:
          return ' rounded-tl rounded-bl text-white';
      }
    };
    
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
          <h1 className='text-slate-700 py-3 px-4 text-base tracking-tight font-medium'>PINNED PROJECTS</h1>
          <div className="border-b p-5 flex flex-wrap justify-start">
          {/* pinned project to do */}
            {data.map((item) => (
              <div key={item.id} className="w-[300px] h-24 p-3 " >
                <Link
                  href="#"
                  className="flex flex-col items-center bg-white border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100  h-full"
                >
                  <div className={`${statusColor(item.title)} w-full h-full flex justify-center items-center`}>
                    <h1>{item.initials}</h1>
                  </div>
                  <div className="flex lg:flex-col justify-between p-2 lg:mt-2 leading-normal w-full">
                    <h5 className="text-base font-medium text-gray-900 ">
                      {/* if title has more than 9 charachters add three dots ... */}
                      {item.title.length > 9 ? item.title.substring(0, 9) + '...' : item.title}
                    </h5>
                    <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">
                      {item.members} members
                    </p>
                  </div>
                  <div className="flex flex-col items-center justify-center w-12 rotate-90 text-gray-400">
                    <FontAwesomeIcon icon={faEllipsisH} />
                  </div>
                </Link>
              </div>
      ))}
        </div>
        <div className="h-screen overflow-auto">
          <ContentProjects data={data} />
        </div>
      </section>
    </div>
  );
}

export default HomePage;
