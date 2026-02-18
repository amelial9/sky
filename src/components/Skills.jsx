import './Skills.css';

const skillsData = {
  programmingLanguages: ['Python', 'Java', 'SQL', 'JavaScript', 'HTML/CSS'],
  tools: ['Azure SQL Database', 'Git/GitHub', 'Jupyter Notebook', 'Docker', 'Unity'],
};

const Skills = () => {
  return (
    <div className="skills-section">
      <h2 className="section-title">Technical Skills</h2>
      <div className="skills-content">
        <div className="skills-group">
          <h3 className="skills-subtitle">Programming Languages</h3>
          <div className="skills-tags">
            {skillsData.programmingLanguages.map((skill, index) => (
              <span key={index} className="skill-tag">{skill}</span>
            ))}
          </div>
        </div>
        <div className="skills-group">
          <h3 className="skills-subtitle">Tools</h3>
          <div className="skills-tags">
            {skillsData.tools.map((skill, index) => (
              <span key={index} className="skill-tag">{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
