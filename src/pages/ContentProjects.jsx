import React from 'react'

function ContentProjects(data) {
  return (
    <div>
       <table className='w-full'>
        <thead className='text-left bg-gray-100 text-gray-500 font-normal'>
          <tr>
            <th className='font-normal'>Project</th>
            <th className='font-normal'>Project Description</th>
            <th className='font-normal'>Project Link</th>
            <th className='font-normal'>Actions</th>
          </tr>
        </thead>
        <tbody className='text-left'>
          {data.data.map((item) => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>{item.team}</td>
              <td>{item.initials}</td>
              <td><button className='text-[#6d78d9]'>Edit</button></td>
            </tr>
          ))}
        </tbody>
       </table>
    </div>
  )
}

export default ContentProjects