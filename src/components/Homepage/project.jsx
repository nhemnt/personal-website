import React from 'react'

function Project({ title, imageUrl, description, tags, githubUrl, demoUrl }) {
  return (
    <div className="col-12 col-sm-8 col-md-6 col-lg-4 mb-3">
      <div className="card">
        <img className="card-img" src={imageUrl} alt={title + '-image'} />
        <div className="card-body">
          <h4 className="card-title">{title}</h4>
          <p className="card-text truncate-overflow ">{description}</p>
          <div className="stats">
           	{tags.map(tag => (
               <span key={tag}>
                {`#${tag} `}
               </span>
             ))}
          </div>
        </div>
        <div className="card-footer text-muted d-flex bg-transparent border-top-0">
          <a href={githubUrl} target="blank" className="btn ">
            Github
          </a>
          <a href={demoUrl} target="blank" className="btn ml-2">
            Demo
          </a>
        </div>
      </div>
    </div>
  )
}

export default Project
