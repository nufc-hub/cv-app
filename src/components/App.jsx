import { useState } from 'react';
import CVForm from '../components/CVForm/CVForm.jsx';
import CVPreview from '../components/CVPreview/CVPreview.jsx';
import './App.css';

function App() {
  // Contact details
  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    country: '',
    gitHub: '',
    linkedIn: '',
    id: crypto.randomUUID(),
  });

  // Profile summary
  const [profile, setProfile] = useState({
    summary: '',
  });

  // Education details
  const [education, setEducation] = useState([
    {
      universityName: '',
      city: '',
      country: '',
      degree: '',
      startDate: '',
      endDate: '',
      id: crypto.randomUUID(),
    },
  ]);

  // Work experience
  const [workExperience, setWorkExperience] = useState([
    {
      jobTitle: '',
      company: '',
      startDate: '',
      endDate: '',
      description: '',
      id: crypto.randomUUID(),
    },
  ]);

  // Projects completed
  const [projects, setProjects] = useState([
    {
      projectName: '',
      role: '',
      placeOrPlatform: '',
      period: '',
      id: crypto.randomUUID(),
    },
  ]);

  // Skills learned
  const [skills, setSkills] = useState([
    {
      skillCategory: '',
      skillList: '',
      id: crypto.randomUUID(),
    },
  ]);

  // The current visible form field ("contact" set as default)
  const [activeForm, setActiveForm] = useState('contact');

  function addEducation() {
    setEducation((prev) => [
      ...prev,
      {
        universityName: '',
        city: '',
        country: '',
        degree: '',
        startDate: '',
        endDate: '',
        id: crypto.randomUUID(),
      },
    ]);
  }

  // Add work experience
  function addWorkExperience() {
    setWorkExperience((prev) => [
      ...prev,
      {
        jobTitle: '',
        company: '',
        startDate: '',
        endDate: '',
        description: '',
        id: crypto.randomUUID(),
      },
    ]);
  }

  // Add project
  function addProject() {
    setProjects((prev) => [
      ...prev,
      {
        projectName: '',
        role: '',
        placeOrPlatform: '',
        period: '',
        id: crypto.randomUUID(),
      },
    ]);
  }

  function addSkills() {
    setSkills((prev) => [
      ...prev,
      {
        skillCategory: '',
        skillList: '',
        id: crypto.randomUUID(),
      },
    ]);
  }

  // Changes which section of the form is visible.
  function renderFormSection(formSection) {
    setActiveForm(formSection);
  }

  return (
    <div className="app-container">
      <CVForm
        // Data states
        data={{ contact, profile, education, workExperience, projects, skills }}
        handlers={{
          // Used for updating states when input is
          onContactChange: setContact,
          onProfileChange: setProfile,
          onEducationChange: setEducation,
          onWorkExperienceChange: setWorkExperience,
          onProjectChange: setProjects,
          onSkillsChange: setSkills,
          // Adds another object into the data array
          onAddEducation: addEducation,
          onAddWorkExperience: addWorkExperience,
          onAddProject: addProject,
          onAddSkills: addSkills,
        }}
        // Active form is the form element currently being displayed
        ui={{ activeForm, onRenderFormSection: renderFormSection }}
        activeForm={activeForm}
        onRenderFormSection={renderFormSection}
      />
      <CVPreview
        data={{ contact, profile, education, workExperience, projects, skills }}
      />
    </div>
  );
}

export default App;
