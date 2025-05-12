import ContactForm from './ContactForm.jsx';
import EducationForm from './EducationForm.jsx';
import ExperienceForm from './ExperienceForm.jsx';
import PropTypes from 'prop-types';

export default function CVForm({
  contact,
  education,
  experience,
  onContactChange,
  onEducationChange,
  onExperienceChange,
  onAddEducation,
  onAddExperience,
}) {
  return (
    <form>
      <ContactForm contact={contact} onContactChange={onContactChange} />
      <EducationForm
        education={education} // Education array
        onEducationChange={onEducationChange} // Input element functionality
        onAddEducation={onAddEducation} // For button click
      />
      <ExperienceForm
        experience={experience} // Experience array
        onExperienceChange={onExperienceChange} // Input element functionality
        onAddExperience={onAddExperience} // For button click
      />
    </form>
  );
}

CVForm.propTypes = {
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
  ).isRequired,
  onContactChange: PropTypes.func.isRequired,
  onEducationChange: PropTypes.func.isRequired,
  onExperienceChange: PropTypes.func.isRequired,
  onAddEducation: PropTypes.func.isRequired,
  onAddExperience: PropTypes.func.isRequired,
};
