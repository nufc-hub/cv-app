import {
  contactLabel,
  profileLabel,
  workExperienceLabel,
  educationLabel,
  projectsLabel,
  skillsLabel,
} from './labels';

import ContactFormSection from '../components/CVForm/ContactFormSection';
import SummaryFormSection from '../components/CVForm/SummaryFormSection';
import ArrayFormSection from '../components/CVForm/ArrayFormSection';

// Used in form section rendering
export default function getFormSectionMap(data, handlers) {
  const { contact, profile, workExperience, education, projects, skills } =
    data;
  const {
    handleContactInputChange,
    handleProfileInputChange,
    handleWorkExperienceInputChange,
    handleEducationInputChange,
    handleProjectInputChange,
    handleSkillsInputChange,
    onAddWorkExperience,
    onAddEducation,
    onAddProject,
    onAddSkills,
  } = handlers;

  return {
    // Contact section
    contact: {
      Component: ContactFormSection,
      props: {
        title: 'Contact Information', // Section title
        data: contact, // Contact object
        labels: contactLabel, //Form labels
        onInputChange: handleContactInputChange, // This is the input element functionality}
      },
    },

    // Profile section
    profile: {
      Component: SummaryFormSection,
      props: {
        title: 'Profile',
        data: profile,
        labels: profileLabel,
        onInputChange: handleProfileInputChange,
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
