import { useState } from 'react';
import './App.css';
import CVForm from '../components/CVForm/CVForm.jsx';
import CVPreview from '../components/CVPreview/CVPreview.jsx';

function App() {
  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    country: '',
    link: '',
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

  function addExperience() {
    console.log('Default prevented');
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

  return (
    <div className="app-container">
      <CVForm
        contact={contact}
        education={education}
        experience={experience}
        onContactChange={handleContactChange}
        onEducationChange={handleEducationChange}
        onExperienceChange={handleExperienceChange}
        onAddEducation={addEducation}
        onAddExperience={addExperience}
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

// Add 'Add education/experience' button to form
// When clicked it adds a new object into the education state array
// It adds another educationForm component to the CVForm
// It adds another educationExperience component to CVPreview

// Then make a delete button, which reverses this process

// Make button function here.
// Pass it as props via App and CVFrom into the EducationForm component
// Create /render button in the EducationFrom component
// Pass function to the button in EducationForm component
// In the same way that handleEducationChange is passed as a prop to the EducationForm component
