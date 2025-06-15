import PropTypes from 'prop-types';
import { useMemo } from 'react';
import getPreviewSectionMap from '../../constants/previewSectionConfig.js';
import '../../styles/CVPreview.css';

export default function CVPreview({ data }) {
  const { contact, profile, education, workExperience, projects, skills } =
    data;
  // CV sections
  const previewSectionMap = useMemo(() => {
    // Memoize for performance
    return getPreviewSectionMap({
      contact,
      profile,
      education,
      workExperience,
      projects,
      skills,
    });
  }, [contact, profile, education, workExperience, projects, skills]);

  return (
    <div className="cv-container">
      {/* Loop through the data in the map and render whatever is in the map*/}
      {Object.entries(previewSectionMap).map(([key, section]) => {
        if (!section?.Component) return null; // Skip if not correctly configured

        const Component = section.Component; // This is the rendering component

        return <Component key={key} {...section.props} />; // Pass props in and render
      })}
    </div>
  );
}

CVPreview.propTypes = {
  data: PropTypes.shape({
    contact: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
    education: PropTypes.array.isRequired,
    workExperience: PropTypes.array.isRequired,
    projects: PropTypes.array.isRequired,
    skills: PropTypes.array.isRequired,
  }).isRequired,
};
