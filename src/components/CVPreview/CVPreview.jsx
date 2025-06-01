import ObjectPreviewSection from './ObjectPreviewSection.jsx';
import ArrayPreviewSection from './ArrayPreviewSection.jsx';
import {
  contactLabel,
  profileLabel,
  educationLabel,
  experienceLabel,
  projectsLabel,
  skillsLabel,
} from '../../constants/labels.js';
import PropTypes from 'prop-types';

export default function CVPreview({ data }) {
  const { contact, profile, education, experience, projects, skills } = data;

  return (
    <form>
      <ObjectPreviewSection data={contact} labels={contactLabel} />
      <ArrayPreviewSection
        title="Education"
        data={education}
        labels={educationLabel}
      />
      <ArrayPreviewSection
        title="Work Experience"
        data={experience}
        labels={experienceLabel}
      />
    </form>
  );
}

CVPreview.propTypes = {
  data: PropTypes.shape({
    contact: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
    education: PropTypes.array.isRequired,
    experience: PropTypes.array.isRequired,
    projects: PropTypes.array.isRequired,
    skills: PropTypes.array.isRequired,
  }).isRequired,

  contactLabel: PropTypes.objectOf(PropTypes.string).isRequired,
  educationLabel: PropTypes.objectOf(PropTypes.string).isRequired,
  experienceLabel: PropTypes.objectOf(PropTypes.string).isRequired,
};
