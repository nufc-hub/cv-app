import ContactDetails from './ContactDetails.jsx';
import EducationExperience from './EducationExperience.jsx';
import PracticalExperience from './PracticalExperience.jsx';
import PropTypes from 'prop-types';

export default function CVPreview({ contact, education, experience }) {
  return (
    <form>
      <ContactDetails contact={contact} />
      <EducationExperience education={education} />
      <PracticalExperience experience={experience} />
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
};
