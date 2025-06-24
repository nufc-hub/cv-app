import {
  contactLabel,
  profileLabel,
  educationLabel,
  workExperienceLabel,
  projectsLabel,
  skillsLabel,
} from './labels';

import ObjectPreviewSection from '../components/CVPreview/ObjectPreviewSection';
import ArrayPreviewSection from '../components/CVPreview/ArrayPreviewSection';

// Used in CV preview section rendering
export default function getPreviewSectionMap(data) {
  const { contact, profile, education, workExperience, projects, skills } =
    data;

  return {
    // Contact section
    contact: {
      Component: ObjectPreviewSection, // Renders the section element
      props: {
        data: contact, // Contact object
        labels: contactLabel, //Form labels
      },
    },

    // Profile section
    profile: {
      Component: ObjectPreviewSection,
      props: {
        data: profile,
        labels: profileLabel,
      },
    },

    // Work Experience section
    workExperience: {
      Component: ArrayPreviewSection,
      props: {
        title: 'Work Experience',
        data: workExperience,
        labels: workExperienceLabel,
      },
    },

    // Education section
    education: {
      Component: ArrayPreviewSection,
      props: {
        title: 'Education',
        data: education,
        labels: educationLabel,
      },
    },

    // Projects section
    projects: {
      Component: ArrayPreviewSection,
      props: {
        title: 'Projects',
        data: projects,
        labels: projectsLabel,
      },
    },

    // Skills section
    skills: {
      Component: ArrayPreviewSection,
      props: {
        title: 'Skills',
        data: skills,
        labels: skillsLabel,
      },
    },
  };
}
