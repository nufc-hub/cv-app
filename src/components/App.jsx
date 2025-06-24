import { useState } from 'react';
import {
  createContact,
  createProfileInfo,
  createEducationInfo,
  createWorkExperienceInfo,
  createProjectsInfo,
  createSkillsInfo,
} from '../constants/initialDataFactories.js';
import CVForm from '../components/CVForm/CVForm.jsx';
import CVPreview from '../components/CVPreview/CVPreview.jsx';
import '../styles/App.css';

function App() {
  // Contact details
  const [contact, setContact] = useState(createContact());

  // Profile summary
  const [profile, setProfile] = useState(createProfileInfo());

  // Work experience
  const [workExperience, setWorkExperience] = useState([
    createWorkExperienceInfo(),
  ]);

  // Education details
  const [education, setEducation] = useState([createEducationInfo()]);

  // Projects completed
  const [projects, setProjects] = useState([createProjectsInfo()]);

  // Skills learned
  const [skills, setSkills] = useState([createSkillsInfo()]);

  // The current visible form field ("contact" set as default)
  const [activeForm, setActiveForm] = useState('contact');

  // Add another work experience section to the form
  function addWorkExperience() {
    setWorkExperience((prev) => [...prev, createWorkExperienceInfo()]);
  }

  // Add another education section to the form
  function addEducation() {
    setEducation((prev) => [...prev, createEducationInfo()]);
  }

  // Add another project section to the form
  function addProject() {
    setProjects((prev) => [...prev, createProjectsInfo()]);
  }

  //Add another skills section to the form
  function addSkills() {
    setSkills((prev) => [...prev, createSkillsInfo()]);
  }

  // Changes which section of the form is visible.
  function renderFormSection(formSection) {
    setActiveForm(formSection);
  }

  return (
    <div className="app-container">
      <CVForm
        // Data states
        data={{ contact, profile, workExperience, education, projects, skills }}
        handlers={{
          // Used for updating states when input is
          onContactChange: setContact,
          onProfileChange: setProfile,
          onWorkExperienceChange: setWorkExperience,
          onEducationChange: setEducation,
          onProjectChange: setProjects,
          onSkillsChange: setSkills,
          // Adds another object into the data array
          onAddWorkExperience: addWorkExperience,
          onAddEducation: addEducation,
          onAddProject: addProject,
          onAddSkills: addSkills,
        }}
        // Active form is the form element currently being displayed
        ui={{ activeForm, onRenderFormSection: renderFormSection }}
      />
      <CVPreview
        data={{ contact, profile, workExperience, education, projects, skills }}
      />
    </div>
  );
}

export default App;
