import React from 'react';
import { useParams } from 'react-router-dom';

function ProjectPage({ data }) {
  const { id } = useParams();
  console.log(id);

  // map into object with array of projects
  const projects = data.reduce((acc, cur) => {
    acc[cur.id] = cur;
    return acc;
  }, {});

  if (!projects) {
    return <div>Project not found</div>;
  }

  return (
    <div>
      <h1>{projects[id].title}</h1> 
    </div>
  );
}

export default ProjectPage;
