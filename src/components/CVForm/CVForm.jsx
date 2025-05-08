import ContactForm from './ContactForm.jsx';
import EducationForm from './EducationForm.jsx';
import ExperienceForm from './ExperienceForm.jsx';

export default function CVForm({
  contact,
  education,
  experience,
  onContactChange,
  onEducationChange,
  onExperienceChange,
}) {
  return (
    <form>
      <ContactForm contact={contact} onContactChange={onContactChange} />
      <EducationForm
        education={education}
        onEducationChange={onEducationChange}
      />
      <ExperienceForm
        experience={experience}
        onExperienceChange={onExperienceChange}
      />
    </form>
  );
}
