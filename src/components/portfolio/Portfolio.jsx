import React from 'react';
import IMG1 from '../../assets/26691.png';


import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'Lorem ipsum',
      img: IMG1,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed imperdiet mauris',
      technologies: 'Django | React',
      link: '',
      github: '',
    },
    {
      id: 2,
      title: 'Lorem ipsum',
      img: IMG1,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed imperdiet mauris',
      technologies: 'Django | React',
      link: '',
      github: '',
    },
    {
      id: 3,
      title: 'Lorem ipsum',
      img: IMG1,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed imperdiet mauris',
      technologies: 'Django | React',
      link: '',
      github: '',
    },
    
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Projects</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Visit Website
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
