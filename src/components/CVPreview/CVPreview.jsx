export default function CVPreview({ contact, education, experience }) {
  return (
    <form>
      <ContactDetails contact={contact} />
      <EducationExperience education={education} />
      <PracticalExperience experience={experience} />
    </form>
  );
}
