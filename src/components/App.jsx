import { useState } from 'react';
import CVForm from '../components/CVForm/CVForm.jsx';
import CVPreview from '../components/CVPreview/CVPreview.jsx';
import {
  contactLabel,
  educationLabel,
  experienceLabel,
} from '../constants/labels.js';
import './App.css';

function App() {
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

  // The current visible form field
  const [activeForm, setActiveForm] = useState('contact');

  function handleContactChange(field, value) {
    setContact((prev) => ({ ...prev, [field]: value }));
  }

  console.log(contact);

  function handleEducationChange(index, field, value) {
    setEducation((prev) =>
      // Receive the previous state in prev
      // Interate over the objs in the array. Entry is the current obj
      prev.map((entry, i) =>
        // When at the correct index, copy the current obj with ...entry
        // Update the value and return a new obj
        i === index ? { ...entry, [field]: value } : entry
      )
    );
  }

  console.log(education);

  function handleExperienceChange(index, field, value) {
    setExperience((prev) =>
      prev.map((entry, i) =>
        i === index ? { ...entry, [field]: value } : entry
      )
    );
  }

  console.log(experience);

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

  // Changes which section of the form is visible.
  function renderFormSection(formSection) {
    setActiveForm(formSection);
  }

  return (
    <div className="app-container">
      <CVForm
        contact={contact}
        education={education}
        experience={experience}
        activeForm={activeForm}
        contactLabel={contactLabel}
        educationLabel={educationLabel}
        experienceLabel={experienceLabel}
        onContactChange={handleContactChange}
        onEducationChange={handleEducationChange}
        onExperienceChange={handleExperienceChange}
        onAddEducation={addEducation}
        onAddExperience={addExperience}
        onRenderFormSection={renderFormSection}
      />
      <CVPreview
        contact={contact}
        education={education}
        experience={experience}
      />
    </div>
  );
}

export default App;
