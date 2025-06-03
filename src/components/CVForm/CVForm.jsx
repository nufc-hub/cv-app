import PropTypes from 'prop-types';
import { useMemo } from 'react';
import FormNav from '../../components/FormNav.jsx';
import {
  updateObjectState,
  updateArrayObjectState,
} from '../../utils/stateUpdaters.js';
import getFormSectionMap from '../../constants/formSectionConfig.js';
import './CVForm.css';

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

  const inputHandlers = {
    // Add the setState function to the object/arrayObject renderers
    handleContactInputChange: createObjectStateHandler(onContactChange),
    handleProfileInputChange: createObjectStateHandler(onProfileChange),
    handleEducationChange: createArrayObjectStateHandler(onEducationChange),
    handleWorkExperienceInputChange: createArrayObjectStateHandler(
      onWorkExperienceChange
    ),
    handleProjectInputChange: createArrayObjectStateHandler(onProjectChange),
    handleSkillsInputChange: createArrayObjectStateHandler(onSkillsChange),
  };

  // Form sections
  const formSectionsMap = useMemo(() =>
    // Memoize for performance
    getFormSectionMap(
      { contact, profile, education, experience, projects, skills },
      {
        ...inputHandlers,
        onAddEducation,
        onAddExperience,
        onAddProject,
        onAddSkills,
      },
      [
        contact,
        profile,
        education,
        experience,
        projects,
        skills,
        ...Object.values(inputHandlers),
        onAddEducation,
        onAddExperience,
        onAddProject,
        onAddSkills,
      ]
    )
  );

  // Active form section objects
  const { Component, props: sectionProps } = formSectionsMap[activeForm];

  return (
    <form>
      {/* Nav panel */}
      <FormNav onRenderFormSection={onRenderFormSection} />

      {/* Render active form section */}
      {Component ? (
        <Component {...sectionProps} />
      ) : (
        <p>
          Our devs are working on getting your cv generator up and running
          again.
        </p>
      )}
    </form>
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
