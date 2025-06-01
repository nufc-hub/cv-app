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

export default function CVPreview({
  contact,
  profile,
  education,
  experience,
  projects,
  skills,
}) {
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
  contact: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    city: PropTypes.string,
    country: PropTypes.string,
    link: PropTypes.string,
  }).isRequired,
  education: PropTypes.arrayOf(
    PropTypes.shape({
      universityName: PropTypes.string,
      city: PropTypes.string,
      country: PropTypes.string,
      degree: PropTypes.string,
      startDate: PropTypes.string,
      endDate: PropTypes.string,
    })
  ).isRequired,
  experience: PropTypes.arrayOf(
    PropTypes.shape({
      jobTitle: PropTypes.string,
      company: PropTypes.string,
      startDate: PropTypes.string,
      endDate: PropTypes.string,
      description: PropTypes.string,
    })
  ),
  contactLabel: PropTypes.objectOf(PropTypes.string).isRequired,
  educationLabel: PropTypes.objectOf(PropTypes.string).isRequired,
  experienceLabel: PropTypes.objectOf(PropTypes.string).isRequired,
};
