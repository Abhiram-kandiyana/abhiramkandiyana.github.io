import { useState } from "react";
import profileImage from "../security_badge_suit.png";

import {
  academicExperience,
  about,
  awardsInvitations,
  education,
  contactCards,
  experience,
  highlights,
  iconLinks,
  industryExperience,
  posters,
  profile,
  publications,
  researchAreas,
  skills,
} from "./content/profile";

function SectionHeading({ title, id }) {
  return (
    <div className="section-heading" id={id}>
      <h2>{title}</h2>
    </div>
  );
}

function SidebarBlock({ title, children }) {
  return (
    <section className="sidebar-block">
      <p className="sidebar-label">{title}</p>
      {children}
    </section>
  );
}

function Icon({ name, className = "" }) {
  const classes = `symbol-icon ${className}`.trim();

  if (name === "mail") {
    return (
      <svg viewBox="0 0 24 24" className={classes} aria-hidden="true">
        <path
          d="M3 6.75A1.75 1.75 0 0 1 4.75 5h14.5A1.75 1.75 0 0 1 21 6.75v10.5A1.75 1.75 0 0 1 19.25 19H4.75A1.75 1.75 0 0 1 3 17.25V6.75Zm1.9-.25L12 11.84l7.1-5.34H4.9Zm14.6 11a.25.25 0 0 0 .25-.25V8.38l-7.22 5.43a.9.9 0 0 1-1.06 0L4.25 8.38v8.87c0 .14.11.25.25.25h15Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  if (name === "location") {
    return (
      <svg viewBox="0 0 24 24" className={classes} aria-hidden="true">
        <path
          d="M12 2.75a6.75 6.75 0 0 1 6.75 6.75c0 4.9-5.19 10.25-6.16 11.2a.85.85 0 0 1-1.18 0C10.44 19.75 5.25 14.4 5.25 9.5A6.75 6.75 0 0 1 12 2.75Zm0 15.98c1.56-1.69 5.25-6.15 5.25-9.23a5.25 5.25 0 1 0-10.5 0c0 3.08 3.69 7.54 5.25 9.23Zm0-12.48A3 3 0 1 1 9 9.25a3 3 0 0 1 3-3Zm0 4.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  if (name === "scholar") {
    return (
      <svg viewBox="0 0 24 24" className={classes} aria-hidden="true">
        <path
          d="M12 3 1.5 9 12 15 20.5 10.14V17H22V9L12 3Zm-5.84 9L12 8.66 17.84 12 12 15.34 6.16 12Zm2.34 3.88v2.55C8.5 19.54 10.08 21 12 21s3.5-1.46 3.5-2.57v-2.55L12 17.86 8.5 15.88Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  if (name === "github") {
    return (
      <svg viewBox="0 0 24 24" className={classes} aria-hidden="true">
        <path
          d="M12 .75A11.25 11.25 0 0 0 .75 12a11.25 11.25 0 0 0 7.69 10.69c.56.1.76-.24.76-.54v-2.1c-3.13.68-3.79-1.5-3.79-1.5-.52-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.12.08 1.71 1.15 1.71 1.15 1 .1 1.65-.74 2.05-1.13.1-.72.4-1.22.72-1.5-2.5-.29-5.13-1.25-5.13-5.57 0-1.23.44-2.24 1.16-3.02-.12-.29-.5-1.47.11-3.06 0 0 .95-.3 3.11 1.15a10.8 10.8 0 0 1 5.66 0c2.16-1.46 3.11-1.15 3.11-1.15.61 1.59.23 2.77.11 3.06.72.78 1.16 1.8 1.16 3.02 0 4.33-2.64 5.27-5.15 5.55.41.36.77 1.05.77 2.12v3.14c0 .3.2.65.77.54A11.25 11.25 0 0 0 23.25 12 11.25 11.25 0 0 0 12 .75Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  if (name === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" className={classes} aria-hidden="true">
        <path
          d="M4.98 3.5a1.73 1.73 0 1 1 0 3.46 1.73 1.73 0 0 1 0-3.46ZM3.5 8.25h2.96V20.5H3.5V8.25Zm4.82 0h2.84v1.67h.04c.4-.75 1.36-1.83 2.8-1.83 3 0 3.55 1.98 3.55 4.55v7.86H14.6v-6.97c0-1.66-.03-3.8-2.32-3.8-2.32 0-2.68 1.82-2.68 3.68v7.09H8.32V8.25Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  if (name === "x") {
    return (
      <svg viewBox="0 0 24 24" className={classes} aria-hidden="true">
        <path
          d="M18.9 2.25h2.95l-6.45 7.37 7.6 10.13h-5.95l-4.66-6.1-5.34 6.1H4.1l6.9-7.89L3.7 2.25h6.1l4.21 5.57 4.89-5.57Zm-1.03 15.73h1.64L8.9 3.93H7.14l10.73 14.05Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  return null;
}

function PublicationActions({ links }) {
  const items = [
    { key: "pdf", label: "PDF" },
    { key: "code", label: "Code" },
    { key: "video", label: "Video" },
    { key: "website", label: "Website" },
    { key: "doi", label: "DOI" },
    { key: "details", label: "Details" },
  ].filter((item) => links?.[item.key]);

  if (items.length === 0) {
    return null;
  }

  return (
    <div className="publication-actions">
      {items.map((item) => (
        <a
          key={item.key}
          href={links[item.key]}
          target="_blank"
          rel="noreferrer"
          className="publication-action"
        >
          {item.label}
        </a>
      ))}
    </div>
  );
}

function PublicationCard({ item }) {
  const [openPanel, setOpenPanel] = useState(null);

  const togglePanel = (panel) => {
    setOpenPanel((current) => (current === panel ? null : panel));
  };

  return (
    <article className="publication-card-rich">
      <div className="publication-thumb">
        <div className="publication-thumb-inner">{item.thumbnailLabel}</div>
      </div>
      <div className="publication-body">
        <div className="publication-header-row">
          <div className="publication-main">
            <h3>{item.title}</h3>
            <p className="list-subtitle">{item.authors}</p>
            <p className="publication-venue">
              <em>{item.venue}</em>
            </p>
          </div>
          <p className="publication-year-display">{item.year}</p>
        </div>

        <div className="publication-actions">
          <button
            type="button"
            className={`publication-action publication-action--button ${
              openPanel === "abstract" ? "publication-action--active" : ""
            }`}
            onClick={() => togglePanel("abstract")}
          >
            ABS
          </button>
          <button
            type="button"
            className={`publication-action publication-action--button ${
              openPanel === "citation" ? "publication-action--active" : ""
            }`}
            onClick={() => togglePanel("citation")}
          >
            CITE
          </button>
          <PublicationActions links={item.links} />
        </div>

        {openPanel === "abstract" ? (
          <div className="publication-panel">
            <p>{item.abstract}</p>
          </div>
        ) : null}

        {openPanel === "citation" ? (
          <div className="publication-panel">
            <p>{item.citation}</p>
          </div>
        ) : null}
      </div>
    </article>
  );
}

function App() {
  const [activeTab, setActiveTab] = useState("about");
  const [theme, setTheme] = useState("light");
  const publicationsByYear = publications.reduce((acc, publication) => {
    if (!acc[publication.year]) {
      acc[publication.year] = [];
    }
    acc[publication.year].push(publication);
    return acc;
  }, {});
  const sortedPublicationYears = Object.keys(publicationsByYear).sort(
    (a, b) => Number(b) - Number(a),
  );

  return (
    <div className={`theme-shell theme-${theme}`}>
      <div className="page-shell page-shell--profile">
      <aside className="profile-sidebar">
        <div className="profile-card">
          <div className="profile-image-frame">
            <img
              className="profile-image"
              src={profileImage}
              alt="Abhiram Kandiyana"
            />
          </div>
          <h1>{profile.name}</h1>
          <p className="profile-role-pill">{profile.title}</p>
          <p className="hero-institution">{profile.institution}</p>
          <p className="hero-subline">{profile.institutionSubline}</p>
        </div>

        <SidebarBlock title="Profile">
          <div className="contact-card-list">
            {contactCards.map((item) => (
                <div key={item.label} className="contact-card">
                <div className="contact-card-icon" aria-hidden="true">
                  <Icon name={item.icon} />
                </div>
                <div className="contact-card-copy">
                  <p className="contact-card-label">{item.label}</p>
                  <p className="contact-card-value">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </SidebarBlock>

        <div className="icon-link-row" aria-label="External links">
          {iconLinks.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="icon-link"
              aria-label={link.label}
              title={link.label}
            >
              <Icon name={link.icon} />
            </a>
          ))}
        </div>
      </aside>

      <main className="profile-main">
        <div className="top-controls">
          <button
            type="button"
            className="theme-toggle"
            onClick={() => setTheme((current) => (current === "dark" ? "light" : "dark"))}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          >
            <span className={`theme-toggle-icon ${theme === "light" ? "theme-toggle-icon--active" : ""}`}>
              <svg viewBox="0 0 24 24" className="symbol-icon" aria-hidden="true">
                <path
                  d="M12 4.25a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0V5a.75.75 0 0 1 .75-.75Zm0 12.5a.75.75 0 0 1 .75.75V19a.75.75 0 0 1-1.5 0v-1.5a.75.75 0 0 1 .75-.75Zm7-5.5a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1 0-1.5H19Zm-12.5 0a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1 0-1.5h1.5Zm9.1-4.85a.75.75 0 0 1 1.06 0l1.06 1.06a.75.75 0 1 1-1.06 1.06L15.6 7.46a.75.75 0 0 1 0-1.06Zm-8.26 8.26a.75.75 0 0 1 1.06 0l1.06 1.06a.75.75 0 0 1-1.06 1.06L7.34 15.72a.75.75 0 0 1 0-1.06Zm9.32 1.06a.75.75 0 0 1 1.06 0 .75.75 0 0 1 0 1.06l-1.06 1.06a.75.75 0 0 1-1.06-1.06l1.06-1.06Zm-8.26-8.26a.75.75 0 0 1 0 1.06L7.34 9.58A.75.75 0 0 1 6.28 8.52l1.06-1.06a.75.75 0 0 1 1.06 0ZM12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm0 1.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z"
                  fill="currentColor"
                />
              </svg>
            </span>
            <span className={`theme-toggle-icon ${theme === "dark" ? "theme-toggle-icon--active" : ""}`}>
              <svg viewBox="0 0 24 24" className="symbol-icon" aria-hidden="true">
                <path
                  d="M14.73 2.15a.75.75 0 0 1 .82.95A8.75 8.75 0 1 0 20.9 14.45a.75.75 0 0 1 .95.82A10.25 10.25 0 1 1 14.73 2.15Z"
                  fill="currentColor"
                />
              </svg>
            </span>
          </button>

          <div className="section-tabs">
          <button
            type="button"
            className={`section-tab ${activeTab === "about" ? "section-tab--active" : ""}`}
            onClick={() => setActiveTab("about")}
          >
            About
          </button>
          <button
            type="button"
            className={`section-tab ${activeTab === "academic" ? "section-tab--active" : ""}`}
            onClick={() => setActiveTab("academic")}
          >
            Academic
          </button>
          <button
            type="button"
            className={`section-tab ${activeTab === "publications" ? "section-tab--active" : ""}`}
            onClick={() => setActiveTab("publications")}
          >
            Publications
          </button>
          <button
            type="button"
            className={`section-tab ${activeTab === "awards" ? "section-tab--active" : ""}`}
            onClick={() => setActiveTab("awards")}
          >
            Awards/Invitations
          </button>
        </div>
        </div>

        {activeTab === "about" ? (
          <section className="content-section tab-panel">
            <SectionHeading title="About Me" />
            <div className="accent-bar" />
            <div className="prose-block prose-block--large">
              {about.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="subsection-block">
              <h3 className="subsection-title">Research Interests</h3>
              <div className="about-panel">
                <div className="interest-chip-list">
                  {researchAreas.map((item) => (
                    <span key={item.title} className="interest-chip" title={item.description}>
                      {item.title}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="subsection-block">
              <h3 className="subsection-title">Recent Highlights</h3>
              <div className="about-panel">
                <div className="news-list compact-news">
                {highlights.map((item) => (
                  <article key={`${item.date}-${item.title}`} className="news-item">
                    <p className="list-meta">{item.date}</p>
                    <div className="news-copy">
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  </article>
                ))}
                </div>
              </div>
            </div>
          </section>
        ) : activeTab === "academic" ? (
          <section className="content-section tab-panel">
            <SectionHeading title="Academic Profile" />
            <div className="accent-bar" />

            <div className="academic-sections">
              <section className="academic-section">
                <h3 className="academic-heading">Education</h3>
                <ol className="academic-list">
                  {education.map((item) => (
                    <li key={`${item.degree}-${item.period}`} className="academic-item">
                      <h4>{item.degree}</h4>
                      <p className="academic-org">{item.institution}</p>
                      <p className="academic-period">{item.period}</p>
                      {item.details.map((detail) => (
                        <p key={detail} className="academic-detail">
                          {detail}
                        </p>
                      ))}
                      {item.professors?.length ? (
                        <p className="academic-detail">
                          Major professors:{" "}
                          {item.professors.map((professor, index) => (
                            <span key={professor.name}>
                              <a
                                href={professor.url}
                                target="_blank"
                                rel="noreferrer"
                                className="academic-link"
                              >
                                {professor.name}
                              </a>
                              {index < item.professors.length - 1 ? ", " : ""}
                            </span>
                          ))}
                        </p>
                      ) : null}
                    </li>
                  ))}
                </ol>
              </section>

              <section className="academic-section">
                <h3 className="academic-heading">Research Experience</h3>
                <ol className="academic-list">
                  {academicExperience.map((item) => (
                    <li key={`${item.role}-${item.period}`} className="academic-item">
                      <div className="experience-title-row">
                        <h4>{item.role}</h4>
                        <p className="experience-location">{item.location}</p>
                      </div>
                      <p className="academic-org">
                        {item.organizationUrl ? (
                          <a href={item.organizationUrl} target="_blank" rel="noreferrer">
                            {item.organization}
                          </a>
                        ) : (
                          item.organization
                        )}
                      </p>
                      <p className="academic-period">{item.period}</p>
                      <p className="academic-detail">{item.details}</p>
                    </li>
                  ))}
                </ol>
              </section>

              <section className="academic-section">
                <h3 className="academic-heading">Industry Experience</h3>
                <ol className="academic-list">
                  {industryExperience.map((item) => (
                    <li key={`${item.role}-${item.period}`} className="academic-item">
                      <div className="experience-title-row">
                        <h4>{item.role}</h4>
                        <p className="experience-location">{item.location}</p>
                      </div>
                      <p className="academic-org">{item.organization}</p>
                      <p className="academic-period">{item.period}</p>
                      <p className="academic-detail">{item.details}</p>
                    </li>
                  ))}
                </ol>
              </section>

              <section className="academic-section">
                <h3 className="academic-heading">Technical Skills</h3>
                <div className="service-list">
                  {skills.map((item) => (
                    <p key={item.category}>
                      <strong>{item.category}:</strong> {item.items.join(", ")}
                    </p>
                  ))}
                </div>
              </section>
            </div>
          </section>
        ) : activeTab === "publications" ? (
          <section className="content-section tab-panel">
            <SectionHeading title="Publications" />
            <div className="accent-bar" />

            <div className="publication-year-groups">
              {sortedPublicationYears.map((year) => (
                <section key={year} className="publication-year-group">
                  <p className="publication-year-heading">{year}</p>
                  <div className="publication-list">
                    {publicationsByYear[year].map((item) => (
                      <PublicationCard key={item.id} item={item} />
                    ))}
                  </div>
                </section>
              ))}
            </div>

            <div className="posters-section">
              <h3 className="publication-section-heading">Posters</h3>
              <div className="publication-list">
                {posters.map((item) => (
                  <PublicationCard key={item.id} item={item} />
                ))}
              </div>
            </div>
          </section>
        ) : (
          <section className="content-section tab-panel">
            <SectionHeading title="Awards/Invitations" />
            <div className="accent-bar" />

            <div className="award-list">
              {awardsInvitations.map((item) => (
                <article key={`${item.title}-${item.year}`} className="award-card">
                  <p className="award-year">{item.year}</p>
                  <div className="award-copy">
                    <h3>{item.title}</h3>
                    <p className="award-organization">{item.organization}</p>
                    <p>{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}
      </main>
      </div>
    </div>
  );
}

export default App;
