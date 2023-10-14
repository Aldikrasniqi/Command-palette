import React from 'react'

function ContentProjects(data) {
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
        return 'rounded-tl rounded-bl text-white';
    }
  };
  return (
    <div>
       <table className='w-full'>
        <thead className='text-left bg-gray-100 text-gray-500 font-normal'>
          <tr>
            <th className='font-normal'>Project</th>
            <th className='font-normal'>Project Members</th>
            <th className='font-normal'>Last Updated</th>
            <th className='font-normal'></th>
          </tr>
        </thead>
        <tbody className='text-left'>
          {data.data.map((item) => (
            <tr key={item.id}>
              <td className='p-3'><span className={`${statusColor(item.title)} w-2 h-2 rounded-full`}></span> </td>
              <td>{item.members}</td>
              <td>{item.created_at}</td>
              <td><button className='text-[#6d78d9]'>Edit</button></td>
            </tr>
          ))}
        </tbody>
       </table>
    </div>
  )
}

export default ContentProjects