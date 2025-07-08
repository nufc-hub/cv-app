import PropTypes from 'prop-types';
import { useMemo } from 'react';
import FormNav from '../../components/CVForm/FormNav.jsx';
import {
  updateObjectState,
  updateArrayObjectState,
} from '../../utils/stateUpdaters.js';
import getFormSectionMap from '../../constants/formSectionConfig.js';
import '../../styles/CVForm.css';

// createObjectStateHandler and createArrayObjectStateHandler defined outside of CVForm to prevent redefining them on each render

// For rendering an object into a form section
function createObjectStateHandler(setStateFn) {
  return (field, value) => updateObjectState(setStateFn, field, value);
}

// For rendering an arrayObject into a form section
function createArrayObjectStateHandler(setStateFn) {
  return (index, field, value) =>
    updateArrayObjectState(setStateFn, index, field, value);
}

export default function CVForm({ data, handlers, ui }) {
  const { contact, profile, workExperience, education, projects, skills } =
    data;
  const {
    onContactChange,
    onProfileChange,
    onWorkExperienceChange,
    onEducationChange,
    onProjectChange,
    onSkillsChange,
    onAddWorkExperience,
    onAddEducation,
    onAddProject,
    onAddSkills,
  } = handlers;
  const { activeForm, onRenderFormSection } = ui;

  const inputHandlers = {
    // Add the setState function to the object/arrayObject renderers
    handleContactInputChange: createObjectStateHandler(onContactChange),
    handleProfileInputChange: createObjectStateHandler(onProfileChange),
    handleWorkExperienceInputChange: createArrayObjectStateHandler(
      onWorkExperienceChange
    ),
    handleEducationInputChange:
      createArrayObjectStateHandler(onEducationChange),
    handleProjectInputChange: createArrayObjectStateHandler(onProjectChange),
    handleSkillsInputChange: createArrayObjectStateHandler(onSkillsChange),
  };

  // Form sections
  const formSectionsMap = useMemo(() => {
    // Memoize for performance
    return getFormSectionMap(
      { contact, profile, workExperience, education, projects, skills },
      {
        ...inputHandlers,
        onAddWorkExperience,
        onAddEducation,
        onAddProject,
        onAddSkills,
      }
    );
  }, [
    contact,
    profile,
    workExperience,
    education,
    projects,
    skills,
    ...Object.values(inputHandlers),
    onAddWorkExperience,
    onAddEducation,
    onAddProject,
    onAddSkills,
  ]);

  // Active form section objects
  const { Component: FormSection, props: sectionProps } =
    formSectionsMap[activeForm];

  if (!FormSection) {
    console.error(`No form section found for "${activeForm}"`); // Error handling in case 'activeForm' is undefined.
  }

  return (
    <div className="sidebar">
      <h1>CV Generator</h1>
      <form>
        {/* Nav panel */}
        <FormNav
          onRenderFormSection={onRenderFormSection}
          activeForm={activeForm}
        />

        {/* Render active form section */}
        {FormSection ? (
          <FormSection {...sectionProps} />
        ) : (
          <p>
            Our devs are working on getting your cv generator up and running
            again.
          </p>
        )}
      </form>
    </div>
  );
}

CVForm.propTypes = {
  data: PropTypes.shape({
    contact: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
    workExperience: PropTypes.array.isRequired,
    education: PropTypes.array.isRequired,
    projects: PropTypes.array.isRequired,
    skills: PropTypes.array.isRequired,
  }).isRequired,

  handlers: PropTypes.shape({
    onContactChange: PropTypes.func.isRequired,
    onProfileChange: PropTypes.func.isRequired,
    onWorkExperienceChange: PropTypes.func.isRequired,
    onEducationChange: PropTypes.func.isRequired,
    onProjectChange: PropTypes.func.isRequired,
    onSkillsChange: PropTypes.func.isRequired,
    onAddWorkExperience: PropTypes.func.isRequired,
    onAddEducation: PropTypes.func.isRequired,
    onAddProject: PropTypes.func.isRequired,
    onAddSkills: PropTypes.func.isRequired,
  }).isRequired,

  ui: PropTypes.shape({
    activeForm: PropTypes.oneOf([
      'contact',
      'profile',
      'workExperience',
      'education',
      'projects',
      'skills',
    ]).isRequired,
    onRenderFormSection: PropTypes.func.isRequired,
  }).isRequired,
};
