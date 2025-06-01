import ObjectFormSection from './ObjectFormSection.jsx';
import ArrayFormSection from './ArrayFormSection.jsx';
import {
  updateObjectState,
  updateArrayObjectState,
} from '../../utils/stateUpdaters.js';
import {
  contactLabel,
  profileLabel,
  educationLabel,
  experienceLabel,
  projectsLabel,
  skillsLabel,
} from '../../constants/labels.js';
import './CVForm.css';
import PropTypes from 'prop-types';

export default function CVForm({ data, handlers, ui }) {
  const { contact, profile, education, experience, projects, skills } = data;
  const {
    onContactChange,
    onProfileChange,
    onEducationChange,
    onWorkExperienceChange,
    onProjectChange,
    onSkillsChange,
    onAddEducation,
    onAddExperience,
    onAddProject,
    onAddSkills,
  } = handlers;
  const { activeForm, onRenderFormSection } = ui;

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
  const handleProfileInputChange = createObjectStateHandler(onProfileChange);
  const handleEducationChange =
    createArrayObjectStateHandler(onEducationChange);
  const handleWorkExperienceInputChange = createArrayObjectStateHandler(
    onWorkExperienceChange
  );
  const handleProjectInputChange =
    createArrayObjectStateHandler(onProjectChange);
  const handleSkillsInputChange = createArrayObjectStateHandler(onSkillsChange);

  return (
    <>
      <form>
        {/* Button panel */}
        <nav aria-label="Form section navigation">
          <button type="button" onClick={() => onRenderFormSection('contact')}>
            Personal Info
          </button>
          <button type="button" onClick={() => onRenderFormSection('profile')}>
            Profile
          </button>
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
          <button type="button" onClick={() => onRenderFormSection('projects')}>
            Projects
          </button>
          <button type="button" onClick={() => onRenderFormSection('skills')}>
            Skills
          </button>
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

        {/* Profile info*/}
        {activeForm === 'profile' && (
          <ObjectFormSection
            title={'Profile'}
            data={profile}
            labels={profileLabel}
            onInputChange={handleProfileInputChange}
          />
        )}

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

        {/* Work experience info */}
        {activeForm === 'experience' && (
          <ArrayFormSection
            title="Work Experience" // Section title
            data={experience} // Experience array
            labels={experienceLabel} //Form labels
            onInputChange={handleWorkExperienceInputChange} // This is the input element functionality
            onAddField={onAddExperience} // For button click
          />
        )}

        {/* Project info */}
        {activeForm === 'projects' && (
          <ArrayFormSection
            title={'Projects'}
            data={projects}
            labels={projectsLabel}
            onInputChange={handleProjectInputChange}
            onAddField={onAddProject}
          />
        )}

        {/* Skills info */}
        {activeForm === 'skills' && (
          <ArrayFormSection
            title={'Skills'}
            data={skills}
            labels={skillsLabel}
            onInputChange={handleSkillsInputChange}
            onAddField={onAddSkills}
          />
        )}
      </form>
    </>
  );
}

CVForm.propTypes = {
  data: PropTypes.shape({
    contact: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
    education: PropTypes.array.isRequired,
    experience: PropTypes.array.isRequired,
    projects: PropTypes.array.isRequired,
    skills: PropTypes.array.isRequired,
  }).isRequired,

  contactLabel: PropTypes.objectOf(PropTypes.string).isRequired,
  profileLabel: PropTypes.objectOf(PropTypes.string).isRequired,
  educationLabel: PropTypes.objectOf(PropTypes.string).isRequired,
  experienceLabel: PropTypes.objectOf(PropTypes.string).isRequired,
  projectsLabel: PropTypes.objectOf(PropTypes.string).isRequired,
  skillsLabel: PropTypes.objectOf(PropTypes.string).isRequired,

  handlers: PropTypes.shape({
    onContactChange: PropTypes.func.isRequired,
    onProfileChange: PropTypes.func.isRequired,
    onEducationChange: PropTypes.func.isRequired,
    onWorkExperienceChange: PropTypes.func.isRequired,
    onProjectChange: PropTypes.func.isRequired,
    onSkillsChange: PropTypes.func.isRequired,
    onAddEducation: PropTypes.func.isRequired,
    onAddExperience: PropTypes.func.isRequired,
    onAddProject: PropTypes.func.isRequired,
    onAddSkills: PropTypes.func.isRequired,
  }).isRequired,

  ui: PropTypes.shape({
    activeForm: PropTypes.oneOf([
      'contact',
      'profile',
      'education',
      'experience',
      'projects',
      'skills',
    ]).isRequired,
    onRenderFormSection: PropTypes.func.isRequired,
  }).isRequired,
};
