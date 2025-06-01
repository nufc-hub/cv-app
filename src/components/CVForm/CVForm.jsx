import ObjectFormSection from './ObjectFormSection.jsx';
import ArrayFormSection from './ArrayFormSection.jsx';
import {
  updateObjectState,
  updateArrayObjectState,
} from '../../utils/stateUpdaters.js';
import './CVForm.css';
import PropTypes from 'prop-types';

export default function CVForm({
  contact,
  profile,
  education,
  experience,
  project,
  skills,
  contactLabel,
  profileLable,
  educationLabel,
  experienceLabel,
  projectLabel,
  skillsLabel,
  activeForm,
  onContactChange,
  onProfileChange,
  onEducationChange,
  onWorkExperienceChange,
  onProjectChange,
  onSkillsChange,
  onAddEducation,
  onAddExperience,
  onRenderFormSection,
}) {
  // For rendering an object into a form section
  function createObjectStateHandler(setStateFn) {
    return (field, value) => updateObjectState(setStateFn, field, value);
  }

  // For rendering an arrayObject into a form section
  function createArrayObjectStateHandler(setStateFn) {
    return (index, field, value) =>
      updateArrayObjectState(setStateFn, index, field, value);
  }

  // Add the setState function to the object/arrayObject renderers
  const handleContactInputChange = createObjectStateHandler(onContactChange);
  const handleEducationChange =
    createArrayObjectStateHandler(onEducationChange);
  const handleWorkExperienceInputChange = createArrayObjectStateHandler(
    onWorkExperienceChange
  );
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
          <ObjectFormSection
            title="Contact Information" // Section title
            data={contact} // Contact object
            labels={contactLabel} //Form labels
            onInputChange={handleContactInputChange} // This is the input element functionality
          />
        )}

        {/* Add profile info and all new state info next */}

        {/* Education info */}
        {activeForm === 'education' && (
          <ArrayFormSection
            title="Education" // Section title
            data={education} // Education array
            labels={educationLabel} //Form labels
            onInputChange={handleEducationChange} // This is the input element functionality
            onAddField={onAddEducation} // For button click
          />
        )}

        {/* Experience info */}
        {activeForm === 'experience' && (
          <ArrayFormSection
            title="Work Experience" // Section title
            data={experience} // Experience array
            labels={experienceLabel} //Form labels
            onInputChange={handleWorkExperienceInputChange} // This is the input element functionality
            onAddField={onAddExperience} // For button click
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
    gitHub: PropTypes.string,
    linkedIn: PropTypes.string,
  }).isRequired,
  profile: PropTypes.shape({
    summary: PropTypes.string,
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
  project: PropTypes.arrayOf(
    PropTypes.shape({
      projectName: PropTypes.string,
      role: PropTypes.string,
      placeOrPlatform: PropTypes.string,
      period: PropTypes.string,
    })
  ).isRequired,
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      skillCategory: PropTypes.string,
      skills: PropTypes.string,
    })
  ).isRequired,
  contactLabel: PropTypes.objectOf(PropTypes.string).isRequired,
  cprofileLabel: PropTypes.objectOf(PropTypes.string).isRequired,
  educationLabel: PropTypes.objectOf(PropTypes.string).isRequired,
  experienceLabel: PropTypes.objectOf(PropTypes.string).isRequired,
  projectLabel: PropTypes.objectOf(PropTypes.string).isRequired,
  skillsLabel: PropTypes.objectOf(PropTypes.string).isRequired,
  activeForm: PropTypes.oneOf(['contact', 'education', 'experience'])
    .isRequired,
  onContactChange: PropTypes.func.isRequired,
  onProfileChange: PropTypes.func.isRequired,
  onEducationChange: PropTypes.func.isRequired,
  onWorkExperienceChange: PropTypes.func.isRequired,
  onProjectChange: PropTypes.func.isRequired,
  onSkillsChange: PropTypes.func.isRequired,
  onAddExperience: PropTypes.func.isRequired,
  onRenderFormSection: PropTypes.func.isRequired,
};
