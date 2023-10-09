import React from 'react'

function ContentProjects(data) {
    console.log(data.data);
  return (
    <div>
       <table className='w-full'>
        <thead className='text-left bg-gray-400 text-white'>
          <tr>
            <th>Project</th>
            <th>Project Description</th>
            <th>Project Link</th>
            <th>Actions</th>
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