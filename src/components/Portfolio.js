import React from 'react';
import { ProjectsData } from '../data/projects-data.js';
import corse from '../assets/corse.svg';

export default function Portfolio() {
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const formatDate = (dateObj) => {
    if (!dateObj) return '';

    const { year, month } = dateObj;
    if (!year && year !== 0) return '';

    if (!month) return `${year}`;

    const mIndex = month - 1; // month is 1-12
    if (mIndex < 0 || mIndex > 11) return `${year}`;
    return `${monthNames[mIndex]} ${year}`;
  };

  const calculateDuration = (startDateObj, endDateObj) => {
    if (!startDateObj || !startDateObj.year) return { years: 0, months: 0 };

    const now = new Date();

    const start = new Date(startDateObj.year, (startDateObj.month ?? 1) - 1);
    const end = endDateObj
      ? new Date(endDateObj.year, (endDateObj.month ?? 1) - 1)
      : new Date(now.getFullYear(), now.getMonth());

    const years = end.getFullYear() - start.getFullYear();
    const months = end.getMonth() - start.getMonth();

    let adjustedYears = years;
    let adjustedMonths = months;

    if (adjustedMonths < 0) {
      adjustedYears -= 1;
      adjustedMonths += 12;
    }

    return { years: adjustedYears, months: adjustedMonths };
  };

  const formatDuration = ({ years, months }) => {
    const parts = [];

    if (years > 0) {
      parts.push(`${years} yr${years > 1 ? 's' : ''}`);
    }

    if (months > 0) {
      parts.push(`${months} mo${months > 1 ? 's' : ''}`);
    }

    return parts.join(' ');
  };

  const projectBlocks = ProjectsData.map((project) => {
    const companyName = project.company || project.title || '';
    const employmentType = project.employmentType || 'Project';

    return (
      <div key={project.id} className="project-block reveal-on-scroll">
        <div className="project-block-header">
          <h3 className="project-block-title">{project.title}</h3>
          {project.shortDescription && (
            <p className="project-block-short">{project.shortDescription}</p>
          )}
        </div>

        {project.games && project.games.length > 0 ? (
          <div className="project-block-visual">
            <div
              className={`project-block-games-grid${
                project.games.length === 2
                  ? ' project-block-games-grid--two'
                  : ''
              }`}
            >
              {project.games.map((game) => (
                // Some game screenshots need "top aligned" cropping.
                <a
                  key={game.title}
                  href={game.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-block-game-link"
                  title={game.title}
                >
                  <img
                    className={`project-block-game-img${
                      game.title === 'Rock Paper Scissors' ||
                      game.title === 'Snake Game'
                        ? ' project-block-game-img--top-third'
                        : ''
                    }`}
                    src={game.img}
                    alt={game.title}
                  />
                  <div className="project-block-game-overlay" />
                  <img
                    className="project-block-game-overlay-img"
                    src={corse}
                    alt=""
                  />
                </a>
              ))}
            </div>
          </div>
        ) : project.img ? (
          <div className="project-block-visual">
            {companyName.toLowerCase() === 'tassyir' ? (
              <a
                href="https://tassyir.io"
                target="_blank"
                rel="noopener noreferrer"
                className="project-block-main-link"
                title="Open tassyir.io"
              >
                <img
                  className="project-block-img"
                  src={project.img}
                  alt={project.title}
                />
                <div className="project-block-main-overlay" />
                <img
                  className="project-block-main-overlay-img"
                  src={corse}
                  alt=""
                />
              </a>
            ) : (
              <img className="project-block-img" src={project.img} alt={project.title} />
            )}
          </div>
        ) : null}

        <div className="project-block-body">
          {project.startDate && (
            <>
              {(() => {
                const duration = calculateDuration(project.startDate, project.endDate);
                const durationText = formatDuration(duration);
                const startText = formatDate(project.startDate);
                const endText = project.endDate ? formatDate(project.endDate) : 'Present';

                return (
                  <div className="project-block-section project-block-experience">
                    <div className="experience-item">
                      <div className="experience-title">{project.role || ''}</div>

                      <div className="experience-meta">
                        <span>{companyName}</span>
                        <span className="experience-dot">·</span>
                        <span>{employmentType}</span>
                      </div>

                      <div className="experience-meta">
                        <span>{startText}</span>
                        <span className="experience-en-dash">–</span>
                        <span>{endText}</span>
                        {durationText ? (
                          <>
                            <span className="experience-dot">·</span>
                            <span>{durationText}</span>
                          </>
                        ) : null}
                      </div>
                    </div>
                  </div>
                );
              })()}
            </>
          )}

          {project.sections && project.sections.length > 0 && (
            <div className="project-block-section">
              <h4 className="project-block-label">What I Built</h4>
              {project.sections.map((section) => (
                <div key={section.title} className="project-block-subsection">
                  <p className="project-block-subtitle">{section.title}</p>
                  <ul className="project-block-list">
                    {section.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {project.challenges && project.challenges.length > 0 && (
            <div className="project-block-section">
              {!project.sections || project.sections.length === 0 ? (
                <h4 className="project-block-label">What I Built</h4>
              ) : null}
              <ul className="project-block-list">
                {project.challenges.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {project.stack && project.stack.length > 0 && (
            <div className="project-block-section">
              <h4 className="project-block-label">Tech Stack</h4>
              <p className="project-block-text">
                {project.stack.join(' · ')}
              </p>
            </div>
          )}

          {/* Links intentionally hidden per design request */}
        </div>
      </div>
    );
  });

  return (
    <section id="Portfolio" className="Portfolio-section reveal-on-scroll">
      <h2 className="Portfolio-title">
        MY PROJECT
      </h2>
      <div className="projects-container">{projectBlocks}</div>
    </section>
  );
}
