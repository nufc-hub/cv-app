import ContactForm from './ContactForm.jsx';
import EducationForm from './EducationForm.jsx';
import ExperienceForm from './ExperienceForm.jsx';
import './CVForm.css';
import PropTypes from 'prop-types';

export default function CVForm({
  contact,
  education,
  experience,
  contactLabel,
  educationLabel,
  experienceLabel,
  activeForm,
  onContactChange,
  onEducationChange,
  onExperienceChange,
  onAddEducation,
  onAddExperience,
  onRenderFormSection,
}) {
  return (
    <>
      <form>
        {/* Button panel */}
        <nav aria-label="Form section navigation">
          <button type="button" onClick={() => onRenderFormSection('contact')}>
            Personal Info
          </button>
          <button type="button">Profile</button>
          <button
            type="button"
            onClick={() => onRenderFormSection('education')}
          >
            Education
          </button>
          <button
            type="button"
            onClick={() => onRenderFormSection('experience')}
          >
            Work Experience
          </button>
          <button type="button">Projects</button>
          <button type="button">Skills</button>
        </nav>

        {/* Contact info */}
        {activeForm === 'contact' && (
          <ContactForm
            contact={contact}
            labels={contactLabel} //Form labels
            onContactChange={onContactChange}
          />
        )}

        {/* Education info */}
        {activeForm === 'education' && (
          <EducationForm
            education={education} // Education array
            labels={educationLabel} //Form labels
            onEducationChange={onEducationChange} // Input element functionality
            onAddEducation={onAddEducation} // For button click
          />
        )}

        {/* Experience info */}
        {activeForm === 'experience' && (
          <ExperienceForm
            experience={experience} // Experience array
            labels={experienceLabel} //Form labels
            onExperienceChange={onExperienceChange} // Input element functionality
            onAddExperience={onAddExperience} // For button click
          />
        )}
      </form>
    </>
  );
}

CVForm.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    city: PropTypes.string,
    country: PropTypes.string,
    gitHub: '',
    linkedIn: '',
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
  contactLabel: PropTypes.objectOf(PropTypes.string).isRequired,
  educationLabel: PropTypes.objectOf(PropTypes.string).isRequired,
  experienceLabel: PropTypes.objectOf(PropTypes.string).isRequired,
  activeForm: PropTypes.oneOf(['contact', 'education', 'experience'])
    .isRequired,
  onContactChange: PropTypes.func.isRequired,
  onEducationChange: PropTypes.func.isRequired,
  onExperienceChange: PropTypes.func.isRequired,
  onAddEducation: PropTypes.func.isRequired,
  onAddExperience: PropTypes.func.isRequired,
  onRenderFormSection: PropTypes.func.isRequired,
};
