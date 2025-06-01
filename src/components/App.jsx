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
  const [experience, setExperience] = useState([
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
  const [project, setProject] = useState([
    {
      projectName: '',
      role: '',
      placeOrPlatform: '',
      period: '',
    },
  ]);

  // Skills learned
  const [skills, setSkills] = useState([
    {
      skillCategory: '',
      skills: '',
    },
  ]);

  // The current visible form field (contact set as default)
  const [activeForm, setActiveForm] = useState('contact');

  // Add education div to form
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

  // Add work experience div to form
  function addExperience() {
    setExperience((prev) => [
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

  function addProject() {
    setProject((prev) => [
      ...prev,
      {
        projectName: '',
        role: '',
        placeOrPlatform: '',
        period: '',
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
        contact={contact} // Contact state
        profile={profile} // Profile state
        education={education} // Education state
        experience={experience} // Work experience state
        project={project} // Project state
        activeForm={activeForm}
        onContactChange={setContact}
        onProfileChange={setProfile}
        onEducationChange={setEducation}
        onWorkExperienceChange={setExperience}
        onProjectChange={setProject}
        onSkillsChange={setSkills}
        onAddEducation={addEducation}
        onAddExperience={addExperience}
        onAddProject={addProject}
        onRenderFormSection={renderFormSection}
      />
      <CVPreview
        contact={contact}
        education={education}
        experience={experience}
        contactLabel={contactLabel} // Field labels
        educationLabel={educationLabel} // Field labels
        experienceLabel={experienceLabel} // Field labels
      />
    </div>
  );
}

export default App;
