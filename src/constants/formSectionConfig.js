import {
  contactLabel,
  profileLabel,
  educationLabel,
  workExperienceLabel,
  projectsLabel,
  skillsLabel,
} from './labels';

import ObjectFormSection from '../components/CVForm/ObjectFormSection';
import ArrayFormSection from '../components/CVForm/ArrayFormSection';

// Used in form section rendering

export default function getFormSectionMap(data, handlers) {
  const { contact, profile, education, workExperience, projects, skills } =
    data;
  const {
    handleContactInputChange,
    handleProfileInputChange,
    handleEducationInputChange,
    handleWorkExperienceInputChange,
    handleProjectInputChange,
    handleSkillsInputChange,
    onAddEducation,
    onAddWorkExperience,
    onAddProject,
    onAddSkills,
  } = handlers;

  return {
    // Contact section
    contact: {
      Component: ObjectFormSection,
      props: {
        title: 'Contact Information', // Section title
        data: contact, // Contact object
        labels: contactLabel, //Form labels
        onInputChange: handleContactInputChange, // This is the input element functionality}
      },
    },

    // Profile section
    profile: {
      Component: ObjectFormSection,
      props: {
        title: 'Profile',
        data: profile,
        labels: profileLabel,
        onInputChange: handleProfileInputChange,
      },
    },

    // Education section
    education: {
      Component: ArrayFormSection,
      props: {
        title: 'Education',
        data: education,
        labels: educationLabel,
        onInputChange: handleEducationInputChange,
        onAddField: onAddEducation,
      },
    },

    // Work Experience section
    workExperience: {
      Component: ArrayFormSection,
      props: {
        title: 'Work Experience',
        data: workExperience,
        labels: workExperienceLabel,
        onInputChange: handleWorkExperienceInputChange,
        onAddField: onAddWorkExperience,
      },
    },

    // Projects section
    projects: {
      Component: ArrayFormSection,
      props: {
        title: 'Projects',
        data: projects,
        labels: projectsLabel,
        onInputChange: handleProjectInputChange,
        onAddField: onAddProject,
      },
    },

    // Skills section
    skills: {
      Component: ArrayFormSection,
      props: {
        title: 'Skills',
        data: skills,
        labels: skillsLabel,
        onInputChange: handleSkillsInputChange,
        onAddField: onAddSkills,
      },
    },
  };
}
