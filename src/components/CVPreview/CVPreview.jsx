import PropTypes from 'prop-types';
import { useMemo } from 'react';
import getPreviewSectionMap from '../../constants/previewSectionConfig.js';
import '../../styles/CVPreview.css';

export default function CVPreview({ data }) {
  const { contact, profile, workExperience, education, projects, skills } =
    data;
  // CV sections
  const previewSectionMap = useMemo(() => {
    // Memoize for performance
    return getPreviewSectionMap({
      contact,
      profile,
      workExperience,
      education,
      projects,
      skills,
    });
  }, [contact, profile, workExperience, education, projects, skills]);

  return (
    <div className="cv-container">
      <div className="cv">
        {/* Loop through the data in the map and render whatever is in the map*/}
        {Object.entries(previewSectionMap).map(([key, section]) => {
          if (!section?.Component) return null; // Skip if not correctly configured

          const Component = section.Component; // This is the rendering component

          return <Component key={key} sectionName={key} {...section.props} />; // Pass props in and render
        })}
      </div>
    </div>
  );
}

CVPreview.propTypes = {
  data: PropTypes.shape({
    contact: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
    workExperience: PropTypes.array.isRequired,
    education: PropTypes.array.isRequired,
    projects: PropTypes.array.isRequired,
    skills: PropTypes.array.isRequired,
  }).isRequired,
};
