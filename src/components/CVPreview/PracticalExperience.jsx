// Uses props passed down from the CVPreview component
export default function PracticalExperience({ experience }) {
  // Loop through each object in the array
  const ExperienceCV = experience.map((entry) => (
    // Set key for the experience section.
    <div key={entry.id}>
      {/* Loop through the object */}
      {Object.keys(entry).map((key) => {
        // Dont render the object id
        if (key === 'id') return null;

        // Render practical experience
        return (
          // Set key for each experience field.
          <div key={`${entry.id}-${key}`}>
            <h3>{key}</h3>
            <p>{entry[key]}</p>
          </div>
        );
      })}
    </div>
  ));

  // Render experience
  return (
    <>
      <h2>Practical Experience</h2>
      {ExperienceCV}
    </>
  );
}
